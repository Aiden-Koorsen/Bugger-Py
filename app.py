from flask import Flask, render_template, redirect, session
import os
from helper import login_required

app = Flask(__name__)
app.secret_key = os.environ["BUGGER_PY_KEY"].encode()

@app.route("/")
@login_required
def index():
    return "hello"

@app.route("/login")
def login():
    return render_template("login.html")