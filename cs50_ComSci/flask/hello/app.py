
# FLASK: A framework/microframework -  Flask is really a third-party library and it's popular in the Python world-- that's
# just going to make it easier to implement web applications using Python.
# Allows you to start a web server by running flask run 

# WEBSITE Vs WEB APPLICATION: Website-Static Content. Web Application-Takes in input/Dynamic Content.
# Flask run
# Structure
    # Main Folder
        # app.py
        # templates/
            # index.html
        # static/
        # requirements.txt

from flask import Flask, render_template, request
app = Flask(__name__)
@app.route("/")
def index():
    name = request.args.get("name", "Guest")
    return render_template("index.html", username=name)
    # HTML:  Hello {{ username }}


#REQUEST.ARGS.GET; Rem to set the method in the html form tag to get
    @app.route("/")
    def index():
        return render_template("index.html")

    @app.route("/greet")
    def greetFunction():
        name = request.args.get("name", "Guest")
        return render_template("greet.html", username=name)


#REQUEST.FORM | POST METHOD | PRIVACY CONCERNS; Rem to set the method in the html form tag to post
    @app.route("/")
    def index():
        return render_template("index.html")

    @app.route("/greet", methods=["POST"])
    def greetFunction():
        name = request.form.get("name", "Guest")
        return render_template("greet.html", username=name)


# Use Two methods | Check the request method
    @app.route("/", methods=["GET", "POST"])
    def index():
        if request.method == "POST":
            name = request.form.get("name", "Guest")
            return render_template("greet.html", username=name)
        else:
            return render_template("index.html")

# Not relying on default value on request.form
    #HTML: Hello {% if username %} {{ username }} {% else %}Guest {% endif %}
    @app.route("/", methods=["GET", "POST"])
    def index():
        if request.method == "POST":
            name = request.form.get("name")
            return render_template("greet.html", username=name)
        else:
            return render_template("index.html")
