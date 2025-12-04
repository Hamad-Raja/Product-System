Product Management App
1. Project Overview

This is a Product Management App where you can Add, Edit, Delete, and View products.
The project is built with Next.js (frontend), Express + Sequelize (backend), and MySQL.

2. Tech Stack

Frontend: Next.js, React, Tailwind CSS

Backend: Node.js, Express, Sequelize

Database: MySQL

Other: Axios, react-hot-toast

3. Prerequisites

Node.js >= 18

MySQL database

npm or yarn

4. Setup & Run Instructions
Backend

Navigate to backend folder:

cd backend


Install dependencies:

npm install


Create a .env file with your database credentials:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=product
PORT=5000


Run migrations / import SQL file (if included):

mysql -u root -p product_db < database.sql


Start the backend server:

npm run dev


The backend will run at: http://localhost:5000

Frontend

Navigate to frontend folder:

cd frontend


Install dependencies:

npm install


Start the frontend server:

npm run dev


The frontend will run at: http://localhost:3000

5. Database Setup

Database: product

Table: products

Columns:

id (INT, PK, AUTO_INCREMENT)

name (VARCHAR)

price (DECIMAL)

category (VARCHAR)

SQL file: database.sql (included in repo)

6. API Documentation
Get All Products
GET /api/products
Response:
[
  { "id": 1, "name": "Product1", "price": 100, "category": "Category1" },
  { "id": 2, "name": "Product2", "price": 150, "category": "Category2" },
  ...
]

Get Single Product
GET /api/products/:id
Response:
{ "id": 1, "name": "Product1", "price": 100, "category": "Category1" }

Add Product
POST /api/products
Body:
{
  "name": "Product Name",
  "price": 100,
  "category": "Category Name"
}
Response:
{ "id": 1, "name": "Product Name", "price": 100, "category": "Category Name" }

Edit Product
PUT /api/products/:id
Body:
{
  "name": "Updated Name",
  "price": 150,
  "category": "Updated Category"
}
Response:
{ "id": 1, "name": "Updated Name", "price": 150, "category": "Updated Category" }

Delete Product
DELETE /api/products/:id
Response:
{ "message": "Product deleted successfully" }

7. Usage

Open http://localhost:3000 in your browser.

Click Add Product to create a new product.

Click Edit to update product info.

Click Delete to remove a product.