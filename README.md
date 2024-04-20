# Product Management System

The Product Management System is a web application that allows users to manage products in a database. It consists of a React frontend and a Node.js backend API.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the Frontend](#running-the-frontend)
  - [Running the Backend API](#running-the-backend-api)
- [API Endpoints](#api-endpoints)
- [Frontend Components](#frontend-components)
- [Redux Store](#redux-store)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Features

- View a list of products
- Add new products
- Edit existing products
- Delete products
- Search for products
- View detailed product information

## Technologies

- Frontend:
  - React
  - Redux
  - React Router
  - Axios
  - Bootstrap
- Backend:
  - Node.js
  - Express
  - Sequelize (ORM)
  - SQLite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)


## Usage

### Running the Frontend

1. Navigate to the frontend directory:

```bash
cd my-app
```

2. Start the development server:

```bash
npm start
```

3. Open your browser and visit `http://localhost:3000` to access the application.

### Running the Backend API

1. Navigate to the backend directory:

```bash
cd api-server
```

2. Start the API server:

```bash
npm start
```

The backend API will be running on `http://localhost:5000`.

## API Endpoints

The following API endpoints are available:

- `GET /api/products`: Retrieve all products
- `GET /api/products/:id`: Retrieve a specific product by ID
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product by ID
- `DELETE /api/products/:id`: Delete a product by ID

## Frontend Components

The frontend of the application is built using React components. The main components are:

- `App`: The main component that sets up the routing and renders other components.
- `ProductList`: Displays a list of products and allows deleting products.
- `ProductDetails`: Shows detailed information about a specific product.
- `ProductForm`: Provides a form for adding or editing a product.

## Redux Store

The application uses Redux for state management. The main Redux slice is `productSlice`, which handles the state related to products. The available actions are:

- `fetchProducts`: Fetches all products from the API.
- `addProduct`: Adds a new product to the store and API.
- `editProduct`: Updates an existing product in the store and API.
- `removeProduct`: Removes a product from the store and API.

## Database Schema

The backend uses SQLite as the database. The main database table is `Products`, which has the following schema:

- `id` (integer, primary key): The unique identifier of the product.
- `name` (string): The name of the product.
- `description` (string): The description of the product.
- `price` (decimal): The price of the product.

