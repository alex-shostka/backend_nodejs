const jwt = require('jsonwebtoken');

module.exports = function (rolesToAccess) {
    return (req, res, next) => {

        try {
            const authHeaderToken = req.header('authorization');

            const getUser = jwt.verify(authHeaderToken, process.env.JWT_SECRET_KEY);

            const roles = getUser.user.roles;

            let hasRole = false;

            roles.forEach(role => {
                if (rolesToAccess.includes(role)) {
                    hasRole = true;
                }
            });

            if (!hasRole) {
                return res.status(401).json({ error: 'Access Denied for your role' });
            }
            next();
        } catch (error) {
            return res.status(401).json({ error: 'Unauthorized, Access Denied' });
        }
    };
}