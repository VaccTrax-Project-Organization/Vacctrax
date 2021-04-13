const mongoose = require("mongoose");
const config = require("../../config/config");
const jwt = require("jsonwebtoken");
const Account = mongoose.model('Account');
const bcrypt = require("bcrypt");

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

// used for user sign in
exports.signIn = (req, res) => {

    const {email, password} = req.body;

    if (email && password) {
        Account.findOne({email: email}, (err, account) => {
            if (err) {
                res.status(500).send({message: 'There was an error fetching this account.', err: err, success: false}).end();
            } else {
                if (account) {
                    if (account.password) {
                        if (bcrypt.compareSync(password, account.password)) {
                            const token = jwt.sign({ id: account._id, email: account.email, role: account.type}, config.jwtSecretKey,
                                {
                                    algorithm: "HS256",
                                    expiresIn: config.emailJwtLifespan
                                });
                            res.status(200).send({message: 'Sign In Successfully', success: true, id : account._id, token: token, email: account.email, type: account.type});
                        }  else {
                            res.status(401).send({message: 'Invalid Username or password.', success: false}).end();
                        }
                    } else {
                        res.status(401).send({message: 'Invalid Username or password.', success: false}).end();
                    }
                } else {
                    res.status(401).send({message: 'Invalid Username or password.', success: false}).end();
                }
            }
        })
    } else {
        res.status(400).send({message: 'Email/Password not provided.', success: false}).end();
    }
}
