# MERN To-Do App

Welcome to the **MERN To-Do App**! This full-stack application allows users to sign up, log in, and manage their tasks seamlessly. It's built using the powerful **MERN stack** (MongoDB, Express.js, React.js, Node.js) with JWT-based authentication to ensure security.

---

## Features

### 🔐 **User Authentication**
- **Sign Up and Log In**: Users can register and securely log in using JWT tokens.
- **Authentication Middleware**: Protect routes from unauthorized access.

### 📝 **Task Management**
- Add, view, and manage tasks efficiently.
- RESTful API for CRUD operations on tasks.

### 🖥️ **Modern Frontend**
- Built with **React** and styled using **TailwindCSS**.
- Responsive and intuitive UI for a seamless user experience.

### 🌍 **Backend API**
- **Node.js** and **Express.js** for handling server-side logic.
- Modular structure for clean and scalable code.

---

## Technologies Used

### Frontend
- **React**: UI Development
- **Vite**: Fast build tool
- **TailwindCSS**: CSS Framework

### Backend
- **Node.js**: Server environment
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **JWT**: Authentication

---


## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js**
- **MongoDB(Local or MongoDBAtlas)**

### 1. Clone the Repository
```bash
git clone https://github.com/KandarpJoshi1112/Mern-TODO.git
cd KandarpJoshi1112-Mern-TODO
```

### 2. Backend Setup
```bash
cd Backend
npm install
cp .env.example .env
# Update .env with your MongoDB connection string and JWT secret
npm start
```
The backend server will start at `http://localhost:5000`.

### 3. Frontend Setup
```bash
cd ../Frontend
npm install
npm run dev
```
The frontend will be available at `http://localhost:5173`.

---
## Environment Variables
Create a `.env` file in the `Backend/` directory with the following variables:

```
PORT=Your Port Number
MONGODB_URI="MongoDB URI"
JWT_SECRET_KEY="JWT Secret Key"
FRONTEND_URL="Frontend URL"
```

Refer to the `.env.example` file for guidance.



---


## Screenshots

### Signup Page
![Screenshot (2)](https://github.com/user-attachments/assets/f1b8718d-8448-441e-9789-0a3744e69033)


### Login Page
![Screenshot (1)](https://github.com/user-attachments/assets/1dce2792-2a40-4252-b6c9-aa51fcb4311a)


### Todo List
![Screenshot (3)](https://github.com/user-attachments/assets/36adc09d-bd93-4f49-9f9d-c00e55c5617d)



---


## Contribution
Feel free to submit issues or pull requests to contribute to this project. Your ideas are always welcome!

---





## Author
Developed by **Kandarp Joshi**. 
* Github: [@Kandarp Joshi](https://github.com/KandarpJoshi1112)
* LinkedIn: [@Kandarp Joshi](https://www.linkedin.com/in/kandarp-joshi-3451231bb/)


