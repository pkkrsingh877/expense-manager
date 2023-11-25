const User = require('../models/user');

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ _id: id });
        res.status(200).json({ username: user.username });
    } catch (error) {
        console.log(error)
        res.status(400).json({error: "Couldn't Get User"});
    }
}

module.exports = { getUser };