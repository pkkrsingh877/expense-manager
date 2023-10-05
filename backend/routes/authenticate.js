const express = require('express');
const router = express();
const User = require('../models/user');

router.post('/signup', (req, res) => {
    try {
        const { username, password } = req.body;
        const user = User.create({ username, password });
        res.status(200).json(user);
    } catch (error) {
        console.trace(error);
        res.status(400).json({"error": "Couldn't Log you in."});
    }
});

router.post('/login', (req, res) => {
    try {
        const {  username, password } = req.body;
        const user = User.findOne({ username });
        res.status(200).json(user);
    } catch (error) {
        console.trace(error);
        res.status(400).json({"error": "Couldn't Log you in."});
    }
});

