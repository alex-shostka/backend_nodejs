const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.header('authorization');

  try {
    const decodedToken = jwt.verify(authHeader, process.env.JWT_SECRET_KEY);

    req.userId = decodedToken.user._id; // ???

    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized, Access Denied' });
  }
};
