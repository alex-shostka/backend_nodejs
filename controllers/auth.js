const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports.login = async function(req, res) {
    const { username, password } = req.body;
    const candidate = await User.findOne({ username });

    if(candidate) {
        const isComparedPassword = bcrypt.compareSync(password, candidate.password);
        if (isComparedPassword) {
            const token = jwt.sign({ candidate }, process.env.JWT_SECRET_KEY, { expiresIn: '8h' });
            res.status(200).json({
                success: true, token: `Bearer ${ token }`, user: candidate
            })
        } else {
            res.status(401).json({
                message: "Wrong password"
            })
        }
    } else {
        res.status(404).json({
            message: "User not found"
        })
    }
}

module.exports.register = async function(req, res) {
    const { username, password } = req.body;
    const candidate = await User.findOne({ username });

    if(candidate) {
        res.status(409).json({
            message: "Данный пользователь уже существует"
        })
    } else {
        const salt = bcrypt.genSaltSync(10);
        const user = new User({
            username,
            password: bcrypt.hashSync(password, salt)
        });

        try {
            await user.save();
            res.status(201).json(user)
        } catch (error) {
            console.log(error);
        }
    }
}