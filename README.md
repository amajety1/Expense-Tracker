
# Expense Tracker Application

## Overview

The **Expense Tracker Application** allows users to track their expenses and gain insights into their spending habits. The app is built with a **backend API** using **Node.js** and **Express**, with **MongoDB** as the database to store expense data. The app enables users to add, update, delete, and view their expenses, categorized for better financial tracking.

---

## Features

- **Add Expense**: Add new expenses with categories like "Food", "Transport", etc.
- **Update Expense**: Edit details of an existing expense.
- **Delete Expense**: Remove an expense from the records.
- **View Expenses**: View a list of all expenses, sorted by date.
- **Expense Categories**: Group expenses by category to track spending habits.

---

## Tech Stack

- **Backend**: 
  - **Node.js** with **Express** for building the API.
  - **MongoDB** for data storage.
  - **Mongoose** for MongoDB object modeling.
  - **JWT** for user authentication.

- **Frontend**: (Optional section if you have a frontend)
  - **React.js** (for UI).
  - **Axios** for making API requests.

---

## Setup and Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** (locally or cloud-based instance like MongoDB Atlas)
- **Postman** (for API testing - optional)

### Installation Steps

1. **Clone the repository**:

```bash
git clone https://github.com/aniketmajety/expense-tracker-api.git
```

2. **Install dependencies**:

```bash
cd expense-tracker-api
npm install
```

3. **Configure environment variables**:

- Create a `.env` file in the root directory of the project.
- Add the following environment variables:

```plaintext
MONGO_URI=mongodb://localhost:27017/expense-tracker
JWT_SECRET=your-secret-key
PORT=5000
```

4. **Start the MongoDB server** (if running locally):

```bash
mongod
```

5. **Start the application**:

```bash
npm run dev
```

- The app will be running at `http://localhost:5000`.

---

## API Endpoints

### 1. **POST /api/expenses**

- **Description**: Add a new expense.
- **Request Body**:

```json
{
  "name": "Coffee",
  "amount": 5.00,
  "category": "Food",
  "date": "2024-11-01"
}
```

- **Response**: 
```json
{
  "message": "Expense added successfully",
  "expense": {
    "_id": "60c72b3f4f1a2b3a4c56e2f7",
    "name": "Coffee",
    "amount": 5.00,
    "category": "Food",
    "date": "2024-11-01"
  }
}
```

### 2. **GET /api/expenses**

- **Description**: Get all expenses.
- **Response**:
```json
[
  {
    "_id": "60c72b3f4f1a2b3a4c56e2f7",
    "name": "Coffee",
    "amount": 5.00,
    "category": "Food",
    "date": "2024-11-01"
  }
]
```

### 3. **PUT /api/expenses/:id**

- **Description**: Update an existing expense.
- **Request Body**:
```json
{
  "name": "Tea",
  "amount": 4.00,
  "category": "Food",
  "date": "2024-11-01"
}
```

- **Response**:
```json
{
  "message": "Expense updated successfully",
  "expense": {
    "_id": "60c72b3f4f1a2b3a4c56e2f7",
    "name": "Tea",
    "amount": 4.00,
    "category": "Food",
    "date": "2024-11-01"
  }
}
```

### 4. **DELETE /api/expenses/:id**

- **Description**: Delete an expense by its ID.
- **Response**:
```json
{
  "message": "Expense deleted successfully"
}
```

---

## Authentication (Optional)

If you are implementing user authentication, you will also need the following endpoints:

### 5. **POST /api/auth/register**

- **Description**: Register a new user.
- **Request Body**:

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### 6. **POST /api/auth/login**

- **Description**: Log in a user and receive a JWT.
- **Request Body**:

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

---

## Testing

You can use **Postman** or **cURL** to test the API endpoints.

---

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make changes, and create a pull request. Please ensure that your changes are well-documented and include tests where applicable.

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Future Improvements

- Add user authentication (JWT).
- Integrate frontend for a fully-functional web app.
- Add more advanced expense analytics (e.g., monthly/yearly reports).
- Implement recurring expense tracking.

---

