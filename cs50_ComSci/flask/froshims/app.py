# Froshims One
from flask import Flask, render_template, request
app = Flask(__name__)
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/register", methods=["POST"])
def registerFunction():
    if not request.form.get("namevalue") or not request.form.get("sport"):
        return render_template("failed.html")
    else:
        return render_template("success.html")


# Froshims Two | Using a list to validate sports
from flask import Flask, render_template, request
app = Flask(__name__)
SPORTS = ["Basketball", "Soccer", "Frisbee"]

@app.route("/")
def index():
    return render_template("index.html", sports=SPORTS)

@app.route("/register", methods=["POST"])
def registerFunction():
    if not request.form.get("namevalue") or request.form.get("sport") not in SPORTS:
        return render_template("failed.html")
    else:
        return render_template("success.html")


# Froshims Three | Getting all the list from checkbox and validating
SPORTS = ["Basketball", "Soccer", "Frisbee"]

@app.route("/")
def index():
    return render_template("index.html", sports=SPORTS)

@app.route("/register", methods=["POST"])
def registerFunction():
    if not request.form.get("namevalue"):
        return render_template("failed.html")
    for sport in request.form.getlist("sport"):
        if sport not in SPORTS:
            return render_template("failed.html")
    else:
        return render_template("success.html")

# Froshims Four | Implements a registration form, storing registrants in a dictionary, with error messages
    from flask import Flask, redirect, render_template, request
    app = Flask(__name__)
    # Create a dic for registrants
    REGISTRANTS = {}
    SPORTS = [
        "Basketball",
        "Soccer",
        "Ultimate Frisbee"
    ]

    @app.route("/")
    def index():
        return render_template("index.html", sports=SPORTS)

    @app.route("/register", methods=["POST"])
    def register():

        name = request.form.get("namevalue")
        if not name:
            return render_template("error.html", message="Missing name")

        sport = request.form.get("sport")
        if not sport:
            return render_template("error.html", message="Missing sport")
        if sport not in SPORTS:
            return render_template("error.html", message="Invalid sport")

        # Remember registrant | Associate the registrant sport value with the reg-name key
        REGISTRANTS[name] = sport
        # Confirm registration
        return redirect("/registrants")

    @app.route("/registrants")
    def registrants():
        return render_template("registrants.html", registrants=REGISTRANTS)


# Froshims Five | Using SQL | Implements a registration form, storing registrants in a SQLite database, with support for deregistration
    from cs50 import SQL
    from flask import Flask, redirect, render_template, request
    app = Flask(__name__)

    db = SQL("sqlite:///froshims.db")

    SPORTS = [
        "Basketball",
        "Soccer",
        "Ultimate Frisbee"
    ]

    @app.route("/")
    def index():
        return render_template("index.html", sports=SPORTS)

    @app.route("/deregister", methods=["POST"])
    def deregister():

        # Forget registrant
        id = request.form.get("id")
        if id:
            db.execute("DELETE FROM registrants WHERE id = ?", id)
        return redirect("/registrants")

    @app.route("/register", methods=["POST"])
    def register():

        # Validate submission
        name = request.form.get("name")
        sport = request.form.get("sport")
        if not name or sport not in SPORTS:
            return render_template("failure.html")

        # Remember registrant
        db.execute("INSERT INTO registrants (name, sport) VALUES(?, ?)", name, sport)

        # Confirm registration
        return redirect("/registrants")

    @app.route("/registrants")
    def registrants():
        registrants = db.execute("SELECT * FROM registrants")
        return render_template("registrants.html", registrants=registrants)
    #Database: registrant table, id INTEGER, name TEXT NULL, sport TEXT NOT NULL, PEIMARY KEY(id)

# COOKIES: The Set-Cookie header in programming is used to send cookies from the server to the client (typically a browser) in an HTTP response. A cookie is a small piece of data that the server wants to store on the client-side to maintain state, track sessions, or store user preferences.

# SESSION | LOGIN FORM
    from flask import Flask, redirect, render_template, request, session
    from flask_session import Session
    app = Flask(__name__)

    # Configure session
    app.config["SESSION_PERMANENT"] = False # Ensures cookie is deleted when browser is quitted.
    app.config["SESSION_TYPE"] = "filesystem" # Ensures the content of one's cookies are stored in the server's file.
    Session(app) # Activate session on the app.

    @app.route("/")
    def index():
        return render_template("index.html", name=session.get("name"))

    @app.route("/login", methods=["GET", "POST"])
    def login():
        if request.method == "POST":
            session["name"] = request.form.get("name") # Session works just like a dictionary; key value pairs.
            return redirect("/")
        return render_template("login.html")

    @app.route("/logout")
    def logout():
        session.clear()
        return redirect("/")


# BOOK | STORE
    from cs50 import SQL
    from flask import Flask, redirect, render_template, request, session
    from flask_session import Session

    app = Flask(__name__)

    # Connect to database
    db = SQL("sqlite:///store.db")

    # Configure session
    app.config["SESSION_PERMANENT"] = False
    app.config["SESSION_TYPE"] = "filesystem"
    Session(app)

    @app.route("/")
    def index():
        books = db.execute("SELECT * FROM books")
        return render_template("books.html", books=books)

    @app.route("/cart", methods=["GET", "POST"])
    def cart():

        # Ensure cart exists
        if "cart" not in session:
            session["cart"] = []

        # POST
        if request.method == "POST":
            book_id = request.form.get("id")
            if book_id:
                session["cart"].append(book_id)
            return redirect("/cart")

        # GET
        books = db.execute("SELECT * FROM books WHERE id IN (?)", session["cart"])
        return render_template("cart.html", books=books)
    #Database: books table, id INTEGER, name TEXT NULL, sport TEXT NOT NULL, PEIMARY KEY(id)


# SHOWS - 
 #One: Searches for shows
    from cs50 import SQL
    from flask import Flask, render_template, request
    app = Flask(__name__)

    db = SQL("sqlite:///shows.db")

    @app.route("/")
    def index():
        return render_template("index.html")

    @app.route("/search")
    def search():
        shows = db.execute("SELECT * FROM shows WHERE title = ?", request.args.get("q"))
        return render_template("search.html", shows=shows)
 
 # SHOWS - B: Broader/Wildcart Searches
 #... Same as one except an adjustment in the search function
    @app.route("/search")
    def search():
        q = request.args.get("q")
        shows = db.execute("SELECT * FROM shows WHERE title LIKE ?", "%" + q + "%") 
        return render_template("search.html", shows=shows)
    
 # SHOWS - Two: Searches for shows using AJAX  - Using JS to get more data from the server so - Not refreshing the URL all again
    #... Same as one except an adjustment in the search function
    @app.route("/search")
    def search():
        q = request.args.get("q")
        if q:
            shows = db.execute("SELECT * FROM shows WHERE title LIKE ? LIMIT 50", "%" + q + "%")
        else:
            shows = []
        return render_template("search.html", shows=shows)

 # SHOWS - Three: Using JSON to send back data | Not returning an HTML file from the server to the browser.
    # Searches for shows using Ajax with JSON
    from cs50 import SQL
    from flask import Flask, jsonify, render_template, request
    app = Flask(__name__)
    db = SQL("sqlite:///shows.db")

    @app.route("/")
    def index():
        return render_template("index.html")

    @app.route("/search")
    def search():
        q = request.args.get("q")
        if q:
            shows = db.execute("SELECT * FROM shows WHERE title LIKE ? LIMIT 50", "%" + q + "%")
        else:
            shows = []
        return jsonify(shows)
    #Database: shows