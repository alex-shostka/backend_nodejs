const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../config/keys');
const errorHandler = require('../utils/errorHandler');

module.exports.login = async function(req, res) {
    const candidate = await User.findOne({username: req.body.username});

    if(candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
        if (passwordResult) {
            const token = jwt.sign({
                username: candidate.username,
                userId: candidate._id
            }, keys.jwt, { expiresIn: 60 * 60 });
            res.status(200).json({
                token: `Bearer ${ token }`
            })
        } else {
            res.status(401).json({
                message: "Пароли не совпадают"
            })
        }
    } else {
        res.status(404).json({
            message: "Пользователь не найден"
        })
    }
}

module.exports.register = async function(req, res) {
    const candidate = await User.findOne({username: req.body.username});

    if(candidate) {
        res.status(409).json({
            message: "Данный пользователь уже существует"
        })
    } else {
        const salt = bcrypt.genSaltSync(10);
        const user = new User({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, salt)
        });

        try {
            await user.save();
            res.status(201).json(user)
        } catch (error) {
            errorHandler(error)
        }
    }
}