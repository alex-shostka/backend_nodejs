const Users = require('../models/User');

module.exports.getUsers = async (req, res) => {
  try {
    const users = await Users.find({}, '-password -__v -field');

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Oшибка сервера' });
  }
};

module.exports.getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id, '-password -__v -field');

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Oшибка сервера' });
  }
};
