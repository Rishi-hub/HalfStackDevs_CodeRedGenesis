from flask import Flask, request, render_template
import sqlite3

app = Flask(__name__)

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

    return 'Data received'


if __name__ == '__main__':
    app.run(debug=True)
