const mongoose = require("mongoose");
const config = require("../../config/config")
const bcrypt = require("bcrypt");
const Account = mongoose.model('Account');
const jwt = require('jsonwebtoken');

exports.verifyTokenForSetPassword = (req, res) => {
    const token = req.body.token;

    jwt.verify(token, config.jwtSecretKey, (err, decoded) => {
        if (err) {
            res.status(401).send({message: "Token Invalid"});
        } else {
            res.status(200).send({message: "Token Valid."})
        }
    })
}

exports.setPassword = (req, res) => {
    const email = res.locals.email;
    const id = res.locals.id;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    console.log(res.locals);

    if (password && confirmPassword && password === confirmPassword) {
        Account.findById(id, (err, account) => {
            if (err) {
                res.status(500).send({message: "There was an error finding the account.", error: err}).end();
            } else {
                if (account) {
                    bcrypt.hash(password, config.saltRounds).then((hashedPassword) => {
                        Account.findByIdAndUpdate(id, {password: hashedPassword}, (errr, acc) => {
                            if (errr) {
                                res.status(500).send({message: "Failed to set password for the Account.", error: errr}).end();
                            } else {
                                res.status(200).send({message: "Password Successfully set."});
                            }
                        });
                    })
                } else {
                    res.status(500).send({message: "Account Not Found."}).end();
                }
            }
        })
    } else {
        res.status(500).send({message: "Provided passwords does not match."}).end();
    }
}
