const express = require('express');
const app =  express();
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const mongoose = require('mongoose');

//database setup
const databaseSetup = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/expenseapp');
        console.log('DB Connection Successful');
    } catch (error) {
        console.log('DB Connection Failed');
        console.log(error);
    }
}

databaseSetup();

// Middleware to encode URL-encoded data in POST requests
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// cors setup
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Allow credentials (cookies)
}));

// Files for Route Handlers
const expenseRoutes = require('./routes/expense');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

// Middleware for Routes
app.use('/expense', expenseRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('App is up and running!');
});

app.listen(process.env.PORT, () => {
    console.log('App running at PORT', process.env.PORT);
});