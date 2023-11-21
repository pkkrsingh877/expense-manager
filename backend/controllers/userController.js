const User = require('../models/user');

const signup = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body);
        const user = await User.create({ username, password });
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        console.trace(error);
        res.status(400).json({"error": "Couldn't Log you in."});
    }
}

const login = async (req, res) => {
    try {
        const {  username, password } = req.body;
        const user = await User.findOne({ username });
        res.status(200).json(user);
    } catch (error) {
        console.trace(error);
        res.status(400).json({"error": "Couldn't Log you in."});
    }
}

module.exports = { login, signup };