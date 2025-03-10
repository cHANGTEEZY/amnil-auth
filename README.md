# JSON Server User Authentication Simulation

This project simulates user creation, login, and protected homepage access using JSON Server for a mock backend and local storage for token-based authentication.

## Features

- **User Registration:** Allows users to create new accounts.
- **User Login:** Authenticates users and stores a token in local storage.
- **Protected Homepage:** Restricts access to the homepage to authenticated users only.
- **Token-Based Authentication:** Uses local storage to manage authentication tokens.
- **JSON Server:** Provides a mock REST API for user data.

## Technologies Used

- HTML
- CSS
- JavaScript
- JSON Server
- Local Storage

## Prerequisites

- Node.js and npm installed.
- A web browser with local storage support.

## Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

## Running the Application

1.  **Start JSON Server:**

    Create a `db.json` file in your project root with the following structure:

    ```json
    {
      "users": []
    }
    ```

    Then, start JSON Server:

    ```bash
     json-server --watch db.json
    ```

    This will start the JSON Server on `http://localhost:3000`.

2.  **Open `index.html`:**

    Use a Live Server extension in your code editor or open `index.html` directly in your browser.

## Usage

1.  **Registration:**
    - Navigate to the registration page.
    - Enter a username and password.
    - Click the "Register" button.
2.  **Login:**
    - Navigate to the login page.
    - Enter your username and password.
    - Click the "Login" button.
    - If successful, a token will be stored in local storage, and you will be redirected to the home page.
3.  **Homepage:**
    - If you are logged in (a valid token exists in local storage), you will be able to view the home page.
    - If you are not logged in, you will be redirected to the login page.
4.  **Logout:**
    - A logout button will be provided on the homepage.
    - Clicking the logout button will remove the token from local storage and redirect you to the login page.
