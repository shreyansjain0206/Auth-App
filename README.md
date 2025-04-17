# Auth-App
# 🔐 Auth App

A simple authentication app built using **Node.js**, **Express**, **MongoDB**, and **JWT**. It allows users to **register** and **login**, with password encryption using **bcrypt** and token-based authentication using **JSON Web Tokens**.

## 🚀 Features

- User registration with hashed passwords
- Secure login using JWT tokens
- Express backend with MongoDB via Mongoose
- Frontend using vanilla HTML/CSS/JS
- CORS enabled for cross-origin requests
- Environment variable support using `dotenv`

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Security:** bcrypt.js, JWT
- **Frontend:** HTML, CSS, JavaScript
- **Environment Management:** dotenv

---

## 📁 Project Structure

auth-app/ │ ├── models/ │ └── user.js # Mongoose User schema │ ├── routes/ │ └── auth.js # Register/Login API routes │ ├── middleware/ │ └── auth.js # JWT verification middleware │ ├── .env # Environment variables ├── server.js # Express server ├── index.html # Simple frontend



---

## 🌐 API Endpoints

### POST `/api/auth/register`

Registers a new user.

**Request Body:**
```json
{
  "username": "yourUsername",
  "password": "yourPassword"
}


{ "msg": "User created successfully" }




🧪 How to Run Locally
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/auth-app.git
cd auth-app
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the root directory and add:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
Run the server:

bash
Copy
Edit
node server.js
Open index.html in your browser to test the UI.

