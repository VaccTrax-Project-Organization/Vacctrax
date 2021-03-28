const mongoose = require("mongoose");
const Patient = mongoose.model('Patient');

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