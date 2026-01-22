# MERN Task Manager Backend

Backend API for task management application built with Express.js, MongoDB, and JWT authentication.

## Features
- User authentication (register/login)
- JWT token-based authorization
- Complete CRUD operations for tasks
- MongoDB database integration

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Tasks (Protected Routes - Requires JWT Token)
- `POST /api/tasks/newTask` - Create new task
- `GET /api/tasks/getTask` - Get all user tasks
- `GET /api/tasks/getTask/:id` - Get single task by ID
- `PUT /api/tasks/updateTask/:id` - Update entire task
- `PATCH /api/tasks/patchTask/:id` - Partial task update
- `DELETE /api/tasks/deleteTask/:id` - Delete task

## Environment Variables

Create a `.env` file with:
```
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

## Installation

```bash
npm install
```

## Run Locally

```bash
npm start
```

## Deploy to Render

1. Push code to GitHub
2. Create new Web Service on Render
3. Connect your GitHub repository
4. Set environment variables in Render dashboard:
   - `MONGO_URL`
   - `JWT_SECRET`
5. Deploy!

## Technologies
- Node.js
- Express.js
- MongoDB/Mongoose
- JWT (jsonwebtoken)
- bcryptjs
