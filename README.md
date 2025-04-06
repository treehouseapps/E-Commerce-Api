
# E-Commerce API

This is a backend API for an e-commerce platform. It provides functionalities for managing users, products, a shopping cart, and a payment gateway integration. This API supports both regular users and admins with different levels of access.

## Features

### User Authentication
- **Sign Up**: Users and admins can sign up using their email and password.
- **Login**: Users and admins can log in with their credentials, receiving a JWT token for authentication.
- **Admin Privileges**: Admins have additional privileges, such as adding products, viewing all users, etc.

### Cart Management
- **Add to Cart**: Users can add products to their cart, and the cart will store the product ID and quantity.
- **Remove from Cart**: Users can remove items from their cart.
- **View Cart**: Users can view the contents of their cart, including product details and total price.

### Product Management (For Admins)
- **Add Products**: Admins can add new products to the store, including details like name, description, price, and category.
- **View Products**: All users can view available products.
- **Search Products**: Users can search for products based on various criteria (e.g., name, category).
- **Update Products**: Admins can modify the details of products (e.g., price, description).
- **Delete Products**: Admins can delete products from the store.

### Checkout and Payment Gateway Integration
- **Checkout**: Users can proceed to checkout with their cart items.
- **Simulate Payment**: The API simulates the payment process and clears the cart after payment.

### Admin Routes
- **Get Users**: Admins can view a list of all users (excluding other admins).
- **Admin Signup**: A special signup route for admins, which requires a secret key to prevent unauthorized users from signing up as admins.

## API Endpoints

### User Authentication Routes
- `POST /signup`: Register a new user.
- `POST /login`: Log in a user.
- `POST /adminSignup`: Register a new admin (requires secret key).
- `GET /getusers`: Retrieve all users (excluding admins) for admin users only.

### Cart Routes
- `POST /cart/add`: Add a product to the user's cart.
- `GET /cart/`: View the user's cart items.
- `PUT /cart/:id`: Update the user's cart.
- `DELETE /cart/:id`: Remove a product from the user's cart.
- `GET /cart/payment/`: Proceed to payment and simulate the checkout process.

### Product Routes (Admin Only)
- `POST /products/add`: Add a new product to the store.
- `POST /products/search`: Admin searches for products by various criteria.
- `GET /products`: View all products.
- `GET /products/:id`: View a specific product.
- `PUT /products/:id`: Update the details of an existing product.
- `DELETE /products/:id`: Delete a product from the store.

### Checkout & Payment Routes
- `POST /checkout`: Proceed to checkout and simulate payment.

## Installation

### Prerequisites
- Node.js
- MongoDB
- A `.env` file with the following variables:
  - `JWT_SECRET`: Secret key for JWT token generation.
  - `ADMIN_SECRET`: Secret key for admin signup.
  - `DBCONNECTION`: MongoDB connection string.
  - `PORT`: The port for the API server.

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/e-commerce-api.git
   ```

2. Navigate to the project folder:
   ```bash
   cd e-commerce-api
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Set up your `.env` file with the required environment variables.

5. Start the server:
   ```bash
   npm start
   ```

6. The API will be available at `http://localhost:3000` by default.

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for Authentication
- Bcrypt for Password Hashing

## Admin Route Implementation

In addition to the basic user and product routes, the following admin-specific routes are available:

### Admin Signup
The `adminSignup` route is used to create new admin users. This route requires a special secret key (`ADMIN_SECRET`) to prevent unauthorized users from signing up as admins.

**Route**: `POST /adminSignup`

**Required Fields**:
- `name`: Admin's full name.
- `email`: Admin's email.
- `password`: Admin's password.
- `secret`: Admin secret key (must match the value in the environment variables).

### Get Users
The `getUsers` route allows admins to view a list of all users, excluding other admins. This route is restricted to admin users only.

**Route**: `GET /getusers`

**Access**: Requires admin role (via the `isAdmin` middleware).

**Response**: Returns a list of users, excluding admin details and passwords.

## Future Enhancements
- Implement order history and tracking for users after checkout.
- Add payment gateway integration (e.g., Stripe, PayPal).
- Add more advanced filtering and sorting options for products.
- Implement pagination for user and product listings.

## Example Request

### 1. Admin Signup
**Request**:
```json
{
    "name": "Admin Name",
    "email": "admin@example.com",
    "password": "adminpassword123",
    "secret": "YourSecretCode"
}
```

**Response**:
```json
{
    "message": "Admin created successfully",
    "token": "JWTTokenHere",
    "user": {
        "id": "123456789",
        "name": "Admin Name",
        "email": "admin@example.com",
        "role": "admin"
    }
}
```

### 2. User Login
**Request**:
```json
{
    "email": "user@example.com",
    "password": "userpassword123"
}
```

**Response**:
```json
{
    "msg": "Login successful",
    "token": "JWTTokenHere"
}
```

---

**Author**: Bereket Tsegaye  
**LinkedIn**: [Link to LinkedIn](https://www.linkedin.com/in/berekettsegaye/)
