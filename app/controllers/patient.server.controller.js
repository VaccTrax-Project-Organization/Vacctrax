const mongoose = require("mongoose");
const {ObjectID} = require("bson");
const Patient = mongoose.model('Patient');

exports.getPatientById = (req, res, next, id) => {
    // let newId = new ObjectID(id);
    // console.log("newId", newId);
    console.log("Finding Patient", id);
    console.log("Finding Patient", req.params.patientId);

    Patient.findOne({_id: id}, (err, patient) => {
        if (err) {
            console.log("errorrrr", err);
            return next(err);
            // return next();
            // return res.status(500).send(err).end();
        } else {
            // req.patient = patient;
            console.log("patient in getbyid", patient);
            res.locals.patient = patient;
            return next();
        }
    });
}