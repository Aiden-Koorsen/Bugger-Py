from functools import wraps
from flask import g, request, redirect, url_for, session

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user-id' not in session:
            return redirect("/login")
        return f(*args, **kwargs)
    return decorated_function