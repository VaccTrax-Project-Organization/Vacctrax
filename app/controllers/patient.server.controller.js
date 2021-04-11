const mongoose = require("mongoose");
const Patient = mongoose.model('Patient');
const Account = mongoose.model('Account');
const Address = mongoose.model('Address');
const jwt = require('jsonwebtoken');
const emailController = require("./email.server.controller")
const config = require("../../config/config")
const bcrypt = require("bcrypt");

exports.getPatientById = (req, res, next, id) => {
    Patient.findById(id, (err, patient) => {
        if (err) {
            return res.status(500).send(err).end();
        } else if (!patient) {
            return res.status(404).send({message: `Patient with the id of ${id} not found`}).end();
        } else {
            res.locals.patient = patient;
            return next();
        }
    });
}

//update the patient via it's unique id
exports.updatePatientDetails = (req,res,next,id) => {
    console.log("req.body", req.body);
    Patient.findByIdAndUpdate(res.locals.patient._id, {$set: req.body}, {new: true}, (err, patient) => {
        if (err) {
            return res.status(500).send(err).end();
        } else {
            return res.status(200).send(patient).end();
        }
    });
}

exports.getAllPatients = (req, res) => {
    // only sending firstName and lastName in account for patient
    Patient.find({}, (err, patients) => {
        if (err) {
            return res.status(500).send(err).end();
        } else {
            return res.status(200).send(patients);
        }
    }).lean().populate('account', 'firstName lastName');
}

exports.signUp = (req, res, next) => {

    const body = req.body;
    console.log(body);

    // checking for email duplicates
    Account.findOne({email: body.email}, (err, account) => {
        if (err) {
            return res.status(500).send({message: "There was an Error checking for patient email duplicate check.", err: err}).end();
        } else {
            if (account) {
                return res.status(409).send({message: "An account with the current email already exists."}).end();
            } else {
                // making an address object to save patient address
                let address = new Address({streetLine1: body.streetLine1, streetLine2: body.streetLine2, postalCode: body.postalCode, province: body.province, city: body.city});


                address.save((err, add) => {
                    if (err) {
                        return res.status(500).send({message: "There was an Error Creating the Patient Address.", err: err}).end();
                    } else {
                        if (add) {

                            // creating a new account object to save
                            let account = new Account({firstName: body.firstName, lastName: body.lastName, email: body.email, phone: body.phone, address: add, type: 'PATIENT'});


                            account.save((err, acc) => {
                                if (err) {
                                    return res.status(500).send({message: "There was an Error Creating the Patient Account.", err: err}).end();
                                } else {
                                    if (acc) {
                                        let patient = new Patient({healthCardNo: body.healthCardNo, account: acc});
                                        patient.save((err, pat)=> {
                                            if (err) {
                                                return res.status(500).send({message: "There was an Error Creating the Patient."}).end();
                                            } else {
                                                if (pat) {
                                                    const token = jwt.sign({ id: acc._id, email: req.body.email}, config.jwtSecretKey,
                                                        {
                                                            algorithm: "HS256",
                                                            expiresIn: config.emailJwtLifespan
                                                        });
                                                    emailController.sendCreatePasswordEmail(res, {email: acc.email, firstName: acc.firstName}, token);
                                                    console.log(pat);
                                                } else {
                                                    return res.status(500).send({message: "There was an Error Creating the Patient."}).end();
                                                }
                                            }
                                        });
                                    } else {
                                        return res.status(500).send({message: "Account not found."}).end();
                                    }
                                }
                            });
                        } else {
                            return res.status(500).send({message: "There was an Error Creating the Patient Address."}).end();
                        }
                    }
                })
            }
        }
    });
}

// exports.createPatientTest = (req, res, next) => {
//
//     console.log(req.body);
//
//     let address = new Address(req.body.address);
//
//     address.save((err, add) => {
//         if (err) {
//             return res.status(500).send({message: "There was an Error Creating the Patient Address.", err: err}).end();
//         } else {
//             if (add) {
//                 let account = new Account(req.body.account);
//
//                 account.type = 'PATIENT';
//                 account.address = add;
//
//                 account.save((err, acc) => {
//                     if (err) {
//                         return res.status(500).send({message: "There was an Error Creating the Patient Account.", err: err}).end();
//                     } else {
//                         if (acc) {
//                             let patient = new Patient(req.body.patient);
//                             patient.account = acc;
//                             patient.save((err, pat)=> {
//                                 if (err) {
//                                     return res.status(500).send({message: "There was an Error Creating the Patient."}).end();
//                                 } else {
//                                     if (pat) {
//
//
//                                         console.log(pat);
//                                         return res.status(200).send({account: acc, patient: pat});
//                                     } else {
//                                         return res.status(500).send({message: "There was an Error Creating the Patient."}).end();
//                                     }
//                                 }
//                             });
//                         } else {
//                             return res.status(500).send({message: "Account not found."}).end();
//                         }
//                     }
//                 });
//             } else {
//                 return res.status(500).send({message: "There was an Error Creating the Patient Address."}).end();
//             }
//         }
//     })
// }
