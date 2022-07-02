const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({
        message: "Пользователь не найден",
      });
    }

    const isMatchPassword = bcrypt.compareSync(password, user.password);

    if (!isMatchPassword) {
      return res.status(401).json({
        message: "Неверный пароль",
      });
    }

    const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({
      token: `Bearer ${token}`,
      user: { username: username },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Oшибка сервера" });
  }
};

module.exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user) {
      res.status(409).json({
        message: "Данный пользователь уже существует",
      });
    }

    const newUser = new User({
      username,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    });

    await newUser.save();

    res.status(201).json({
      message: "Пользователь создан",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Oшибка сервера" });
  }
};
