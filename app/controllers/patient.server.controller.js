const mongoose = require("mongoose");
const Patient = mongoose.model('Patient');
const Account = mongoose.model('Account');
const Address = mongoose.model('Address');
const jwt = require('jsonwebtoken');
const emailController = require("./email.server.controller")
const config = require("../../config/config")
const bcrypt = require("bcrypt");

/** Get the patient by Id */
exports.getPatientById = (req, res, next, id) => {
    Account.findOne({_id: id, type: "PATIENT"}, (err, patient) => {
        if (err) {
            return res.status(500).send(err);
        } else if (!patient) {
            return res.status(404).send({message: `Patient with the id of ${id} not found`});
        } else {
            res.locals.patient = patient;
            console.log("patient found", patient);
            next();
        }
    }).select("-password");
}

//update the patient via it's unique id
exports.updatePatientDetails = (req,res) => {
    console.log("req.body", req.body);
    delete req.body.password;
    delete req.body.email;
    Account.findOneAndUpdate({_id: res.locals.patient._id, type: "PATIENT"}, req.body, {new: true}, (err, patient) => {
        if (err) {
            return res.status(500).send(err);
        } else {
            return res.status(200).send(patient);
        }
    }).select("-password");
}

/** get all patients in the database for the medical admin */
exports.getAllPatients = (req, res) => {
    // only sending firstName and lastName in account for patient
    Account.find({}, (err, patients) => {
        if (err) {
            return res.status(500).send(err).end();
        } else {
            return res.status(200).send(patients);
        }
    }).lean().select('firstName lastName');
}

/**
 * Sign Up function for validating if the account with email already exists if not then create a new account and
 * link it with patient object and then send an email to the patient through sendgrid api
 * */
exports.signUp = async (req, res, next) => {

    const body = req.body;
    console.log(body);

    try {
        const foundAccount = await Account.findOne({email: body.email});

        if (foundAccount) {
            return res.status(409).send({message: "An account with the current email already exists."});
        }

        if (!req.body.healthCardNo) {
            return res.status(400).send({message: "Health Card number is required for sign up."});
        }

        let newAccount = new Account({firstName: body.firstName, lastName: body.lastName, email: body.email, phone: body.phone,
            address: {streetLine1: body.streetLine1, streetLine2: body.streetLine2, postalCode: body.postalCode, province: body.province, city: body.city},
            type: 'PATIENT'});

        const addedAccount = await newAccount.save();

        if (addedAccount) {
            const token = jwt.sign({ id: addedAccount._id, email: req.body.email}, config.jwtSecretKey,
                {
                    algorithm: "HS256",
                    expiresIn: config.emailJwtLifespan
                });
            console.log(addedAccount);
            // sending email through email controller
            await emailController.sendCreatePasswordEmail(res, {email: req.body.email, firstName: addedAccount.firstName}, token);

            return res.status(200).send({message: "Patient account created and email sent", email: req.body.email.email});
        }

        return res.status(500).send({message: "There was an Error creating a new account. 'Unable to save new account'", success: false})

    } catch (err) {
        return res.status(500).send({message: "There was an Error signing up the patient.", err: err})
    }
}
