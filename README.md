# 📚 Book Listing App

This is a full-stack Book Listing and Order Placement app built using **Spring Boot (backend)** and **React JS (frontend)**.

## 📦 Project Structure

Book_App/
├── backend/ # Spring Boot backend
├── frontend/ # React frontend
└── README.md

## 🚀 Features

- View list of available books
- Click to order any book
- Enter customer name and submit order
- Success message shown and option to go back to book list

## ⚙️ How to Run the Backend (Spring Boot)

### 🛠 Requirements

- Java 17+
- Maven
- MySQL
- IDE like Eclipse or IntelliJ

### 🔌 Database Setup

1. Create a MySQL database (example: `bookdb`)
2. Update `application.properties` in `backend/src/main/resources/`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/bookdb
   spring.datasource.username=your_mysql_username
   spring.datasource.password=your_mysql_password
   spring.jpa.hibernate.ddl-auto=update


#####  Run the Backend
Open in Eclipse or run from terminal:

cd backend
mvn spring-boot:run

#### How to Run the Frontend (React JS)
🛠 Requirements
Node.js and npm

Code editor like VS Code

##### Run the React App
cd frontend
npm install
npm start
