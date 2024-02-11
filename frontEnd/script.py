import string
from flask import Flask, request, render_template, redirect
import sqlite3
import random
import emailing

app = Flask(__name__)
app.config['SECRET_KEY'] = "".join(random.choice(string.ascii_letters + string.digits) for _ in range(100))


DB_path = "../DB/COP_Sustainability.db"


def confirmation_email(email):
    subject = "Confirmation of Emailing List Signup from COP Sustainability Tracker"
    body = "Hello {},\n\nYou have successfully subscribed to our mailing list, where you will get regular updates regarding the sustainability of COP.\n\nThank you for supporting our mission to hold COP to the highest sustainability standards,\nCOP Sustainability Tracker Team"

    with sqlite3.connect(DB_path) as conn:
        c = conn.cursor()
        c.execute(f"SELECT name FROM EmailList WHERE email = '{email}'")

        recipient = c.fetchall()[0][0]

    emailing.email(email, subject, body.format(recipient))


def goodbye_email(email):
    subject = "We're sorry to see you go..."
    body = "Hi {},\n\nYou have successfully unsubscribed from our mailing list, and will no longer receive regular updates regarding the sustainability of COP.\nOur team is very sorry to see you go. You can resubscribe anytime from our website.\n\nThank you for the time you spent supporting our mission,\nCOP Sustainability Tracker Team"

    with sqlite3.connect(DB_path) as conn:
        c = conn.cursor()
        c.execute(f"SELECT name FROM EmailList WHERE email = '{email}'")

        recipient = c.fetchall()[0][0]

    emailing.email(email, subject, body.format(recipient))


def insert_recipient(first_name, email):
    with sqlite3.connect(DB_path) as conn:
        c = conn.cursor()
        c.execute(f"INSERT INTO EmailList (name, email) VALUES ('{first_name}', '{email}')")
        conn.commit()


def remove_recipient(email):
    with sqlite3.connect(DB_path) as conn:
        c = conn.cursor()
        c.execute(f"DELETE FROM EmailList WHERE email = '{email}'")
        conn.commit()


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/submit-form', methods=['POST'])
def handle_data():
    first_name = request.form['firstname']
    email = request.form['email']

    try:
        insert_recipient(first_name, email)
    except Exception as e:
        print(e)
        return render_template("repeat_submission.html")

    try:
        confirmation_email(email)
    except Exception as e:
        print(e)
        return render_template("failed_submission.html")

    return render_template("submitted.html")


#@app.route('/remove_from_mailing_list', methods=['POST'])
def handle_data():
    email = request.form['email']

    try:
        goodbye_email(email)
    except Exception as e:
        print(e)
        return render_template("failed_submission.html")

    try:
        remove_recipient(email)
    except Exception as e:
        print(e)
        return render_template("failed_submission.html")

    return render_template("successful_unsubscribe.html")


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
