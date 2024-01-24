from flask import Flask, render_template, request, redirect, url_for, flash, session
import sqlite3

app = Flask(__name__)
app.config['SESSION_COOKIE_SECURE'] = True
app.secret_key = 'your_secret_key'  # Replace with your own secret key

def create_table():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT,
            last_name TEXT,
            username TEXT UNIQUE,
            password TEXT
        )
    ''')
    conn.commit()
    conn.close()

create_table()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('index.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/dashboard')
def dashboard():
    if 'username' in session:
        username = session['username']

        conn = sqlite3.connect('database.db')
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE username=?", (username,))
        user = cursor.fetchone()
        conn.close()

        user_info = {
            'first_name': user[1],
            'last_name': user[2],
        }
        return render_template('dashboard.html', user_info=user_info)
    else:
        return redirect(url_for('login'))

@app.route('/login_request', methods=['GET', 'POST'])
def login_request():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        conn = sqlite3.connect('database.db')
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE username=?", (username,))
        user = cursor.fetchone()
        conn.close()
        
        if user and user[4] == password:
            session['username'] = user[3]
            return redirect(url_for('dashboard'))
        else:
            return redirect(url_for('login', login_failed=1))
    return render_template('index.html')

@app.route('/signup_request', methods=['GET', 'POST'])
def signup_request():
    if request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        username = request.form['username']
        password = request.form['password']
        
        conn = sqlite3.connect('database.db')
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE username=?", (username,))
        user = cursor.fetchone()

        if user:
            conn.close()
            return redirect(url_for('signup', signup_failed=1))
        else:
            cursor.execute("INSERT INTO users (first_name, last_name, username, password) VALUES (?, ?, ?, ?)", (first_name, last_name, username, password))
            conn.commit()
            conn.close()
            return redirect(url_for('login', signup_successful=1))
    return render_template('signup.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))

@app.route('/delete_account')
def delete_account():
    if 'username' not in session:
        return redirect(url_for('login'))

    username = session['username']

    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute("DELETE FROM users WHERE username=?", (username,))
    conn.commit()
    conn.close()

    session.clear()
    return redirect(url_for('login'))

if __name__ == "__main__":
    app.run()
