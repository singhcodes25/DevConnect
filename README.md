# DevConnect

DevConnect is a full-stack web application built using **React.js** for the frontend and **Express.js/Node.js** for the backend. The project provides a platform for developers and includes user authentication, developer functionality, and communication between the frontend and backend.

## Tech Stack

### Frontend

* React.js
* JavaScript
* Vite
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

## Project Structure

```text
DevConnect/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── routes/
│   ├── server.js
│   └── package.json
│
├── devconnect_frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   └── pages/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## Features

* User signup and login
* Authentication and protected routes
* Developer portal
* User and developer data management
* MongoDB database integration
* REST API using Express.js
* Responsive React frontend
* Reusable frontend components

## Running the Project

### Frontend

```bash
cd devconnect_frontend
npm install
npm run dev
```

### Backend

Open another terminal:

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file inside the `backend` folder and add the required environment variables such as the MongoDB connection string and authentication secret.

## Project Development

The project was initially planned as a more complicated application with multiple features and workflows. However, the complexity of the original implementation created difficulties during development, particularly with debugging, integration, and maintaining the code.

Therefore, the project was simplified to focus on the **core functionality** and provide a cleaner and more manageable implementation. The simplified version makes the project easier to understand, develop, debug, and extend.

**Timely, more versions of this project will add all complex functionality.**

## AI Assistance

AI tools were used during the development of this project, particularly for **frontend component development, UI implementation, debugging, and resolving development issues**.

Some frontend components were created with the help of AI and were then adapted and modified according to the requirements of the project. AI was used as a development aid rather than as a replacement for the overall development process.
