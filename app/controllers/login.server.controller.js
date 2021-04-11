const config = require("../../config/config");
const jwt = require("jsonwebtoken");


exports.verifyToken = (req, res, next) => {
    let token = (req.headers['x-access-token'] || req.headers['authorization']);

    if (token) {
        if (/^Bearer /.test(token)) {
            token = token.slice(7, token.length);
        }

        jwt.verify(token, config.jwtSecretKey, (err, decoded) => {
            if (err) {
                res.status(401).send({
                    message: `Token is invalid! \n Error:${err.message}`
                });
            } else {
                res.locals.email = decoded.email;
                res.locals.id = decoded.id;
                next();
            }
        })
    } else {
        res.status(401).json({
            message: 'Auth token is not provided'
        });
    }
}
