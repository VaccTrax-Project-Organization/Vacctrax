const mongoose = require("mongoose");
const config = require("../../config/config");
const jwt = require("jsonwebtoken");
const Account = mongoose.model('Account');
const bcrypt = require("bcrypt");
const Patient = mongoose.model('Patient');
const HealthPractitioner = mongoose.model('HealthPractitioner');
const MedicalAdmin = mongoose.model('MedicalAdmin');

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
exports.signIn = async (req, res) => {

    const {email, password} = req.body;
    let userId = '-1';
    let userSchema = {};

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
                            switch (account.type) {
                                case 'PATIENT':
                                    sendUserDetails({type: account.type, user: Patient, account, token}, req, res);
                                    break;
                                case 'MEDICAL_ADMIN':
                                    sendUserDetails({type: account.type, user: MedicalAdmin, account, token}, req, res);
                                    break;
                                case 'HEALTH_PRACTITIONER':
                                    sendUserDetails({type: account.type, user: HealthPractitioner, account, token}, req, res);
                                    break;
                                default:
                                    res.status(200).send({message: 'Sign In Successfully', success: true, id : account._id, token: token, email: account.email, type: account.type, userId: '-1'});
                                    break;
                            }
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

sendUserDetails = (details, req, res) => {
    details.user.findOne({account: details.account}, (err, schema) => {
        if (err) {
            res.status(500).send({message: `Error while finding ${details.type} for account.`, success: false, err: err}).end();
        } else {
            if (schema) {
                res.status(200).send({message: 'Sign In Successfully', success: true, id : details.account._id, token: details.token, email: details.account.email, type: details.account.type, userId: schema._id});
            } else {
                res.status(404).send({message: `${details.type} not found for the account.`, success: false}).end();
            }
        }
    });
}
