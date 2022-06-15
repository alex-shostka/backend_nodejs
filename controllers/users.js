const Users = require('../models/User');

module.exports.getUsers = async function(req, res) {
    try {
        const users = await Users.find({});
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
}

module.exports.getUser = async function(req, res) {
    try {
        const user = await Users.findById( req.params.id );
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
}