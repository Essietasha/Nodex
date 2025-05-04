import os

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash

from helpers import apology, login_required, lookup, usd

# Configure application
app = Flask(__name__)

# Custom filter
app.jinja_env.filters["usd"] = usd

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///finance.db")


@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


@app.route("/")
@login_required
def index():
    """Show portfolio of stocks"""
    # Get user id via session
    loggedInUser = session["user_id"]

    # Get user's cash balance
    accountBal = db.execute("SELECT cash FROM users WHERE id = ?", loggedInUser)
    if not accountBal:
        return apology("Oops! No user found!", 404)
    cash = accountBal[0]['cash']

    # Select needed queries. Sum up the number of shares in each symbol. Then Group using the stocksymbol.
    ownedStocks = db.execute(
        "SELECT stocksymbol, SUM(shares) AS userShares, stockprice, total FROM stocks WHERE userid = ? GROUP BY stocksymbol", loggedInUser)

    # Loop through each stock, multiply the shares by price
    # Assign the value to a the gtotal variable. Add user's cash to arrive at the grand Total.
    gTotal = 0
    for stock in ownedStocks:
        gTotal += stock["userShares"] * stock["stockprice"]
    grandTotal = gTotal + cash

    # Render the index page, pass needed vialues just like prop to the html.
    return render_template("index.html", stocks=ownedStocks, cashBalance=cash, grandTotal=grandTotal)


@app.route("/buy", methods=["GET", "POST"])
@login_required
def buy():
    """Buy shares of stock"""

    # Get user id via session
    userId = session["user_id"]

    if request.method == "POST":
        # Validate for possible errors when my user submits the form
        stockSymbol = request.form.get("symbol")
        numOfSharesToBuy = request.form.get("shares")
        if not stockSymbol or not numOfSharesToBuy:
            return apology("No Stock symbol or number of shares provided!", 400)

        # Convert my user's input to an integer
        try:
            numOfSharesToBuy = int(numOfSharesToBuy)
            if numOfSharesToBuy <= 0:
                return apology("Provide a positive number of shares!", 400)
        except ValueError:
            return apology("Provide a positive number!", 400)

        # Call the lookuo function to see the stock details for user's input
        stockResult = lookup(stockSymbol)
        if not stockResult:
            return apology("Oops! Stock symbol does not exist!", 400)

        price = stockResult["price"]
        # stockName = stockResult["name"]
        totalPurchase = price * numOfSharesToBuy

        accountBal = db.execute("SELECT cash FROM users WHERE id = ?", userId)
        if not accountBal:
            return apology("Oops! No user found!", 404)
        cash = accountBal[0]['cash']

        # Make sure user has enough cash to buy the shares
        if cash < totalPurchase:
            return apology("Sorry, you are unable to afford the number of shares.", 403)

        userCurrentStock = db.execute(
            "SELECT shares FROM stocks WHERE userid = ? AND stocksymbol = ?", userId, stockSymbol)

        # Update user's shares if he or she has some stock already, update the totalprice too; else
        # add their purchased share to my stock db right after they but the shares
        if userCurrentStock:
            updateShares = userCurrentStock[0]["shares"] + numOfSharesToBuy
            updateTotal = updateShares * price
            db.execute("UPDATE stocks SET shares = ?, total = ? WHERE userid = ? AND stocksymbol = ?",
                       updateShares, updateTotal, userId, stockSymbol)
        else:
            db.execute("INSERT INTO stocks (userid, stocksymbol, stockprice, shares, total) VALUES (?, ?, ?, ?, ?)",
                       userId, stockSymbol, price, numOfSharesToBuy, totalPurchase)

        # Update their cash balance by deducting their cash from the total amount of sahres they bought
        # Set transaction type to buy
        cashBal = cash - totalPurchase
        transactionType = 'Buy'

        # Necessary queries; update user's cash, add data to my transaction/history/ttype table.
        db.execute("UPDATE users SET cash = ? WHERE id = ?", cashBal, userId)
        db.execute("INSERT INTO ttype (userid, stocksymbol, stockprice, shares, transactiontype) VALUES (?, ?, ?, ?, ?)",
                   userId, stockSymbol, price, numOfSharesToBuy, transactionType)

        # Redirect the user to the homepage
        return redirect("/")
    else:
        return render_template("buy.html")


@app.route("/history")
@login_required
def history():
    """Show history of transactions"""

    # Get user id via session
    loggedInUser = session["user_id"]

    # Query to get all transaction details from the database and display to the user
    history = db.execute("SELECT * FROM ttype WHERE userid = ?", loggedInUser)
    return render_template("history.html", history=history)


@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":
        # Ensure username was submitted
        if not request.form.get("username"):
            return apology("must provide username", 403)

        # Ensure password was submitted
        elif not request.form.get("password"):
            return apology("must provide password", 403)

        # Query database for username
        rows = db.execute(
            "SELECT * FROM users WHERE username = ?", request.form.get("username")
        )

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(
            rows[0]["hash"], request.form.get("password")
        ):
            return apology("invalid username and/or password", 403)

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
        return redirect("/")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")


@app.route("/quote", methods=["GET", "POST"])
@login_required
def quote():
    """Get stock quote."""

    if request.method == "POST":
        # Check and validate user input/stock symbol
        stockSymbol = request.form.get("symbol")
        if not stockSymbol:
            return apology("No Stock quote provided!", 400)

        # Run the lookup function on the symbol to get stock details.
        result = lookup(stockSymbol)
        # Any Error? Alert user, otherwise display the stock details in html page
        if not result:
            return apology("Oops! Stock symbol does not exist!", 400)
        return render_template("quoted.html", stockResult=result)
    else:
        return render_template("quote.html")


@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user"""

    # Forget any previous user
    session.clear()

    if request.method == "POST":
        # Get user details from the form
        registeredName = request.form.get("username")
        registeredPassword = request.form.get("password")
        registeredCPassword = request.form.get("confirmation")

        # Check if the username a new user is trying to use exists
        regNameExists = db.execute("SELECT * FROM users WHERE username = ?", registeredName)

        # Validate for possible errors
        if not registeredName or not registeredPassword or not registeredCPassword:
            return apology("Must provide all input fields", 400)
        elif registeredPassword != registeredCPassword:
            return apology("Passwords don't match", 400)
        elif len(regNameExists) > 0:
            return apology("Username already exists", 400)

        # Call the hash function on the user's password input to hash their password
        hashedPassword = generate_password_hash(registeredPassword)

        # Store the hashed password into the database
        db.execute("INSERT INTO users (username, hash) VALUES (?, ?)",
                   registeredName, hashedPassword)

        newUser = db.execute("SELECT * FROM users WHERE username = ?", registeredName)

        # Set a session id for the new user
        session["user_id"] = newUser[0]["id"]

        # Log the user in to the homepage
        return redirect("/")

    else:
        return render_template("register.html")


@app.route("/sell", methods=["GET", "POST"])
@login_required
def sell():
    """Sell shares of stock"""

    # Get user id via session
    userId = session["user_id"]

    if request.method == "POST":
        # Check and validate user's input
        stockSymbol = request.form.get("symbol")
        toSell = request.form.get("shares")
        if not stockSymbol or not toSell:
            return apology("Select a stock or provide a valid shares to sell", 400)

        # Necessary query
        userstock = db.execute(
            "SELECT SUM(shares) AS userTotalShares, stockprice, total FROM stocks WHERE userid = ? AND stocksymbol = ? GROUP BY stocksymbol", userId, stockSymbol)

        # Alert the user if he or she doesn't own a/the stock
        if not userstock:
            return apology("You do not own this stock", 400)

        # Get the stock price
        price = userstock[0]["stockprice"]

        # Convert the number of shares they'd like to sell to an integer
        try:
            toSell = int(toSell)
            if toSell <= 0:
                return apology("Provide a positive number of shares!", 400)
        except ValueError:
            return apology("Provide a positive number!", 400)

        # Get the number of shares the user owns
        sharesOwned = userstock[0]["userTotalShares"]

        # Notufy the user if they don't have that amount of share they intend to sell
        if toSell > sharesOwned:
            return apology("You do not have enough shares to sell!", 400)

        accountBal = db.execute("SELECT cash FROM users WHERE id = ?", userId)
        if not accountBal:
            return apology("Oops! No user found!", 404)
        cash = accountBal[0]['cash']

        # Update the number of sahres owned by the user by deducting the amount of shares to sell from the amount of shares they own
        updatedSharesOwned = sharesOwned - toSell
        # Get the value of the sale by mMultiplying the number of shares to sell by the price of the share
        sellValue = toSell * price
        # Update the user's cash balance by adding the amount/value of the shares they jsut sold.
        updatedBal = cash + sellValue

        # Update the total column
        updatedTotal = updatedSharesOwned * price
        # Set transaction type to sell for history purposes
        transactionType = 'Sell'

        # Necessary queries; update user cash value in the database. Update the stocks table too
        db.execute("UPDATE users SET cash = ? WHERE id = ?", updatedBal, userId)
        db.execute("UPDATE stocks SET shares = ?, total = ? WHERE userid = ? AND stocksymbol = ?",
                   updatedSharesOwned, updatedTotal, userId, stockSymbol)

        # Add/Log data into the history/ttype table.
        db.execute("INSERT INTO ttype (userid, stocksymbol, stockprice, shares, transactiontype) VALUES (?, ?, ?, ?, ?)",
                   userId, stockSymbol, price, toSell, transactionType)

        # Redirect user to homepage
        return redirect("/")
    else:
        userstock = db.execute("SELECT * FROM stocks WHERE userid = ?", userId)
        return render_template("sell.html", stocks=userstock)



@app.route("/topup", methods=["GET", "POST"])
@login_required
def topup():
    """Allow user top up balance"""

    if request.method == "POST":
        # Check and validate user input before topping up their balance
        loggedInUser = session["user_id"]
        topupAmount = request.form.get("topup")

        if not topupAmount:
            return apology("No amount provided!", 400)

        # Convert the top up input to an integer
        try:
            topupAmount = int(topupAmount)
            if topupAmount <= 0 or topupAmount > 10000:
                return apology("Provide a valid amount to top up! Max: $10,000", 400)
        except ValueError:
            return apology("Provide a positive number!", 400)

        # Get user's cash balance; validate.
        accountBal = db.execute("SELECT cash FROM users WHERE id = ?", loggedInUser)
        if not accountBal:
            return apology("Oops! No user found!", 404)
        usercash = accountBal[0]['cash']

        # Update user's balance by adding the top up amount to it
        newCashBalanace = usercash + topupAmount

        # In the database, update the balanace too.
        db.execute("UPDATE users SET cash = ? WHERE id = ?", newCashBalanace, loggedInUser)

        # Redirect the user to homepage.
        return redirect("/")
    else:
        return render_template("topup.html")

