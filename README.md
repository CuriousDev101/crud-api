# Todo CRUD API

A simple CRUD API for managing Todos. Built with Express.js, MongoDB, and Mongoose.

## Features

- **Create a Todo**
- **Get Todos**
- **Update a Todo**
- **Delete a Todo**
- **Get a single Todo**

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/CuriousDev101/crud-api.git
cd crud-api
```
### 2. Install Dependencies
Follow these steps to set up the project on your local machine:
```bash
npm install
```
### 3. Set up Environment Variables

You need to create an .env file in the root directory with your MongoDB connection string and other environment variables.

Create a .env file and add the following:
```ini
URI=your_mongo_db_connection_string_here
```

### 4. Run the Development Server

To start the development server, use the following command:
```bash
npm run dev
```

## 5. Test the Application

You can now test the API using tools like Postman or curl to send requests to the following endpoints:

   - POST /create-todo - To create a new Todo

   - GET /todo/:todoId - To get a specific Todo by ID

   - PATCH /todo/:todoId - To update a Todo

   - DELETE /delete/:todoId - To delete a Todo

   - GET /todo - To get a list of all Todos

Your application should now be running and accessible at http://localhost:4000
