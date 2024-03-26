# Task Manager

This project is a simple Task Manager API built with Express.js and TypeScript. It allows users to manage tasks by creating, retrieving, updating, and deleting them. The API provides endpoints for various operations related to tasks.

## Setup

1. **Install Dependencies**: Run `npm install` to install all dependencies.

    npm init -y
    npm install express  typescript @types/express @types/node ts-node
    npx tsc --init  

    
## Dependencies

- **Express.js**: Web framework for handling HTTP requests.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **@types/express**: Type definitions for Express.js.

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `ts-node`: TypeScript execution environment for Node.js.
- `ts-node-dev`: TypeScript execution and reload tool for Node.js.

## Folder Structure

            task-manager/
            ├── src/
            │ ├── controllers/
            │ │ └── taskController.ts
            │ ├── models/
            │ │ └── Task.ts
            │ ├── routes/
            │ │ └── taskRoutes.ts
            │ ├── utils/
            │ │ └── errorHandler.ts
            │ └── index.ts
            ├── package.json
            ├── tsconfig.json
            └── README.md
        

2. **Start the Server**: Run `npm start` to start the server. By default, it runs on port 3000, but you can specify a different port by setting the `PORT` environment variable.

3. **Test the Endpoints**: Use a REST client tool or VS Code extension to test the API endpoints. Refer to the [Testing](#testing) section for more details.

## Testing

You can test the API endpoints using a REST client tool like Postman or using the REST Client extension in VS Code.

### Using a REST Client Tool:

1. **Install REST Client Extension**: Install a REST client extension for your preferred code editor. Popular choices include "REST Client" for VS Code or "Postman" as a standalone application.

2. **Create a Test File**: Create a new file with a `.http` or `.rest` extension. This will allow you to write and execute HTTP requests directly in this file.

3. **Write Test Requests**: Write your API test requests in the test file using the HTTP request format. Refer to the [Testing](#testing) section in the README for more details.

4. **Execute Requests**: Use the extension's functionality to execute the requests in the test file. You'll see the response directly in the editor, making it easy to view and debug.

### Using VS Code Extension - REST Client:

1. **Install REST Client Extension**: If you haven't already, install the "REST Client" extension for VS Code.

2. **Create a Test File**: Create a new file with a `.http` or `.rest` extension.

3. **Write Test Requests**: Write your API test requests directly in this file using the HTTP request format. Refer to the [Testing](#testing) section in the README for more details.

4. **Execute Requests**: You can either click the "Send Request" button next to each request to execute it or right-click anywhere in the file and select "Send Request" to execute all requests in the file.


## API URL

The API is hosted at: `http://localhost:3000`

### 1. Create a New Task

- **Description**: Creates a new task with the provided details.
- **URL**: `/task`
- **Method**: `POST`
- **Request Body**:
  - `title`: Title of the task (required).
  - `description`: Description of the task.
  - `dueDate`: Due date of the task (required).
  - `assignedTo`: Name of the user to whom the task is assigned (required).
  - `category`: Category of the task (required).
- **Response**: Returns the created task object.

### 2. Retrieve a Task by ID

- **Description**: Retrieves a task by its ID.
- **URL**: `/task/:id`
- **Method**: `GET`
- **Response**: Returns the task object corresponding to the provided ID.

### 3. Update a Task

- **Description**: Updates an existing task with the provided details.
- **URL**: `/task/:id`
- **Method**: `PUT`
- **Request Body**: Fields to be updated (title, description, dueDate, assignedTo, category, status).
- **Response**: Returns the updated task object.

### 4. Delete a Task

- **Description**: Deletes a task by its ID.
- **URL**: `/task/:id`
- **Method**: `DELETE`
- **Response**: Returns a success message upon successful deletion.

### 5. Retrieve All Tasks

- **Description**: Retrieves all tasks.
- **URL**: `/task`
- **Method**: `GET`
- **Response**: Returns an array of all tasks.

### 6. Retrieve Tasks Assigned to a Specific User

- **Description**: Retrieves all tasks assigned to a specific user.
- **URL**: `/task/assigned/:assignedTo`
- **Method**: `GET`
- **Response**: Returns an array of tasks assigned to the specified user.

### 7. Retrieve Tasks Under a Specific Category

- **Description**: Retrieves all tasks under a specific category.
- **URL**: `/task/category/:category`
- **Method**: `GET`
- **Response**: Returns an array of tasks under the specified category.

## Features

- Create, retrieve, update, and delete tasks.
- Filter tasks by assigned user or category.
- Error handling for missing fields and invalid requests.
- Asynchronous handling of controller operations.
- Clear and concise API documentation.