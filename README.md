# user-account

This Flask web application provides a basic user account management system. It allows users to sign up, log in, log out, change their password, and delete their account. The application uses SQLite for data storage and Flask for the backend framework.

## Features

- **User Registration:** New users can create an account.
- **User Login:** Users can log in with their credentials.
- **Dashboard Access:** After login, users can access a dashboard.
- **Log Out:** Users can log out of the application.
- **Change Password:** Users can change their password.
- **Delete Account:** Users can delete their account.

## Installation and Setup

Follow these steps to get the application running locally:

### Prerequisites

- Python 3.6 or later
- pip (Python package manager)
- Git (for cloning the repository)

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/eduardobassanii/user-account.git

2. **Install Required Packages:**

   ```bash
   pip3 install Flask

3. **Initialize the Database:**

   The application will automatically create an SQLite database named database.db and set up the necessary tables when run.

4. **Run the Application:**
   ```bash
   python3 app.py
   ```
   This will start the Flask server. By default, the application will be accessible at http://127.0.0.1:5000/.

5. **Access the Application:**

   Open a web browser and go to http://127.0.0.1:5000/ to access the application.

## Usage

Sign Up: Click on the "Get Started" link on the homepage to create a new account.
Log In: Use your credentials to log in from the homepage.
Dashboard: Once logged in, you'll be redirected to the dashboard where you can choose to log out, change your password or delete your account.

## Note
The application is a basic demonstration and not production-ready. It lacks features like email verification, password hashing, and advanced security measures.
Always remember to replace your_secret_key in app.py with a strong secret key in a production environment.
