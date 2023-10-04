const express = require('express');
const app =  express();

require('dotenv').config()

// Files for Route Handlers
const expenseRoutes = require('./routes/expense');

// Middleware for Routes
app.use('/expenses', expenseRoutes);

app.get('/', (req, res) => {
    res.send('App is up and running!');
});

app.listen(process.env.PORT, () => {
    console.log('App running at PORT', process.env.PORT);
});