# Kanban Board Project

This project is a Kanban Board application where users can create and manage tasks with subtasks across different boards. It includes both frontend and backend components.

## Features

- User authentication with login and registration.
- Create, update, delete boards.
- Create, update, delete tasks with subtasks.
- Drag and drop tasks between boards.
- Avatar upload using Cloudinary.

## Technologies Used

- Frontend: HTML, CSS, JavaScript (React)
- Backend: Node.js, Express.js, MongoDB (Mongoose)
- Authentication: JSON Web Tokens (JWT)
- Image Upload: Cloudinary



## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/kanban-board-project.git
cd kanban-board-project

cd backend
npm install
cd frontend
npm install

## Configuration

Create a `.env` file in the `backend` folder and add the following:

```makefile
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

