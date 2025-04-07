const express = require('express');
const app = express();

const { isAdmin } = require('../middleware/authMddleware');
const { adminSignup, signUp, login, getUsers } = require('../controller/userController');

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     description: Allows users to sign up using their email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 */
app.post('/signup', signUp);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Log in a user
 *     description: Allows users to log in using their email and password, and receive a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login successful, returns JWT token
 *       401:
 *         description: Unauthorized
 */
app.post('/login', login);

/**
 * @swagger
 * /adminSignup:
 *   post:
 *     summary: Register a new admin (requires secret key)
 *     description: Allows new admins to register. Admin registration requires a special secret key.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               secret:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *               - secret
 *     responses:
 *       201:
 *         description: Admin registered successfully
 *       400:
 *         description: Bad request or invalid secret key
 */
app.post('/adminSignup', adminSignup);

/**
 * @swagger
 * /getusers:
 *   get:
 *     summary: Retrieve a list of all users
 *     description: Admin users can retrieve a list of non-admin users.
 *     responses:
 *       200:
 *         description: List of all users (excluding admin users)
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   role:
 *                     type: string
 *       403:
 *         description: Forbidden, only admins can access this route
 */
app.get('/getusers', isAdmin, getUsers);

module.exports = app;
