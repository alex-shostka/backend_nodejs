const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeaderToken = req.header('authorization');

  try {
    const decodedToken = jwt.verify(authHeaderToken, process.env.JWT_SECRET_KEY);

    req.user = decodedToken; // ???

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized, Access Denied' });
  }
};
