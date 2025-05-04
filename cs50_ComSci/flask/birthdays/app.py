import os

from cs50 import SQL
from flask import Flask, flash, jsonify, redirect, render_template, request, session

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///birthdays.db")


@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        # Get User's Birthday Details
        userName = request.form.get("username")
        birthMonth = request.form.get("birthmonth")
        birthDay = request.form.get("birthday")
        # print(userName, birthMonth, birthDay)

        # Check user input / validation
        # If input is not valid, direct the user to the invalid page
        if not userName or not birthMonth or not birthDay:
            return render_template("invalid.html")

        # TODO: Add the user's entry into the database

        # INSERT INTO the Database(name, month, day) column the User's birthday details.
        db.execute("INSERT INTO birthdays (name, month, day) VALUES(?, ?, ?)", userName, birthMonth, birthDay)
        return redirect("/")

    else:

        # TODO: Display the entries in the database on index.html
        birthdayList = db.execute("SELECT * FROM birthdays")

        # Pass in the birthdayList just like a prop as a second argument to the render_template.
        return render_template("index.html", birthdaysList=birthdayList)

@app.route("/delete/<int:id>", methods=["POST"])
def deleteBirthday(id):
    db.execute("DELETE FROM birthdays WHERE id = ?", id)
    return redirect("/")
