# Task Management Project

A task management web application developed as a final project for the frontend course by Dor Bruker. 
The application allows users to efficiently manage their tasks with a user-friendly interface built using React and JavaScript.

## Features

- **Task Creation and Management:** Users can add, edit, and delete tasks.
- **User Authentication:** Secure login and registration system.
- **Data Persistence:** Tasks are stored locally using a JSON server.
- **Responsive Design:** Optimized for various screen sizes and devices.

## Technologies

### Client (React)
- **React:** For building the user interface.
- **React Router:** For navigation between pages.
- **Axios:** For handling HTTP requests.
- **CSS Modules:** For styling components.

### Server (JSON Server)
- **JSON Server:** A lightweight REST API for data persistence.

## How to Install and Run the Application

1. **Clone the repository:**
    ```bash
    git clone https://github.com/dorb99/Task_Management.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd Task_Management
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Start the development server:**
    ```bash
    npm start
    ```

5. **Log:**
    ```bash
    npx json-server --watch src/userinfo.json --port 3000
    ```

## Usage

1. **Access the application:**
   - Open your browser and navigate to `http://localhost:3000`.

2. **Register a new account or log in with existing credentials.**

3. **Manage tasks:**
   - Create new tasks.
   - Edit or delete existing tasks.

4. **Log out when finished to secure your session.**

## Acknowledgements

- **Developer:** Dor Bruker
- **Technologies Used:** React, JavaScript
- **Deployment:** Netlify
