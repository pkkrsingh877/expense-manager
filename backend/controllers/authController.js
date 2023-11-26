const User = require('../models/user');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body);
        const user = await User.create({ username, password });
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET); // 7 days
        res.cookie('jwt', token, { expiresIn: '7d', path: '/', secure: false, SameSite: "None", httpOnly: true });
        res.status(200).json({ userId: user._id, token: token });
    } catch (error) {
        console.trace(error);
        res.status(400).json({"error": "Couldn't Log you in."});
    }
}

const login = async (req, res) => {
    try {
        const {  username, password } = req.body;
        const user = await User.login(username, password);
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.cookie('jwt', token, { expiresIn: '7d', path: '/', secure: false, SameSite: "None", httpOnly: true });
        res.status(200).json({ userId: user._id, token: token });
    } catch (error) {
        console.trace(error);
        res.status(400).json({"error": "Couldn't Log you in."});
    }
}

module.exports = { login, signup };