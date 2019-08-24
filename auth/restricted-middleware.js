const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {

    if (req.session && req.session.user) {
        next();
    } else {
        res.status(400).json({message: "Im gonna give you til the count of 10...1...2..10!"})
    }
};