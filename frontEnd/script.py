import string
from flask import Flask, request, render_template, redirect
import sqlite3
import random

app = Flask(__name__)
app.config['SECRET_KEY'] = "".join(random.choice(string.ascii_letters + string.digits) for _ in range(100))

DB_path = "../DB/COP_Sustainability.db"


def insert_recipient(first_name, email):
    with sqlite3.connect(DB_path) as conn:
        c = conn.cursor()
        c.execute(f"INSERT INTO EmailList (name, email) VALUES ('{first_name}', '{email}')")
        conn.commit()


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/submit-form', methods=['POST'])
def handle_data():
    first_name = request.form['firstname']
    email = request.form['email']

    insert_recipient(first_name, email)

    return render_template("submitted.html")


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
