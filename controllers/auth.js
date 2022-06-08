module.exports.login = function(req, res) {
    res.status(200).json({
        login: {
            username: req.body.username,
            password: req.body.password
        }
    })
}