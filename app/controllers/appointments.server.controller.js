const mongoose = require("mongoose");
const Appointment = mongoose.model('Appointment');
const Account = mongoose.model("Account");

exports.requestAppointment = (req, res) => {
    console.log(req.body);
    Appointment
    let appointment = new Appointment(req.body);

    appointment.save((err, app) => {
        if (err) {
            res.status(500).send({
                error: {
                    message: err.message
                }
            });
        } else {
            console.log(app);
            res.status(200).send({
                payload: app
            });
        }
    });
}

exports.getAllAppointmentsForClinic = (req, res, next) => {
    const clinic = req.clinic;

    console.log(clinic);

    Appointment.find({clinic: clinic}, (err, appointments) => {
        if (err) {
            res.status(500).send(err).end();
        } else {
            console.log(appointments);
            // getting appointment list
            res.status(200).send(appointments);
        }
    }).populate(['clinic', {path: 'patient', populate: {path: 'account', model: 'Account'}}, {path: "healthPractitioner", populate: {path: "account", model: "Account"}}, 'vaccine']);
}

//pass in a patient to the req. This is so a medical admin or a patient can get all their appointments.
exports.getPatientAppointments = (req, res, next) => {
    const patient = res.locals.patient;
    console.log("patient", res.locals);
    Appointment.find({patient: patient}, (err) => {
        if (err) {
            return res.status(500).send(err).end();
        }
        // populate will auto fill the reference Id's with the actual object of each listed (including their ids)
        //FOR SOME WEIRD REASON THE HEALTHPRACTITIONER DOESNT POPULATE IDK WHY!>@#>!@#>!>@#>!@>#!>>!@# (IT RETURNS NULL)
    }).populate(["clinic", {path: "patient", populate: {path: "account", model: "Account"}}, {path: "healthPractitioner", populate: {path: "account", model: "Account"}}, "vaccine"]).then(appointments => {
        console.log("appointments", appointments);
        return res.status(200).send(appointments);
    });
}

//for a specific appoint for a specific patient (get it by it's id)
exports.getPatientAppointmentDetail = (req, res, next) => {
    const patient = req.patient;
    Appointment.findOne({
        _id: id
    }, (err, appointment) => {
        if (err) {
            return next(err);
        } else {
            req.appointment = appointment;
            console.log(appointment);
            next();
        }
    })
}

exports.bookAppointment = (req, res) => {
    console.log(req.body);

    let appointment = new Appointment(req.body);

    appointment.save((err, app) => {
        if (err) {
            res.status(500).send({
                error: {
                    message: err.message
                }
            });
        } else {
            console.log(app);
            res.status(200).send({
                payload: app
            });
        }
    });
}

exports.updateAppointment = (req, res, next) => {
    console.log("req.body", req.body);
    Appointment.findByIdAndUpdate(res.locals.appointment._id, {$set: req.body}, {new: true}, (err, appointment) => {
        if(err) {
            return res.status(500).send(err).end();
        } else {
            return res.status(200).send(appointment).end();
        }
    });
};

// to be implemented in the future
exports.deleteAppointment = (req, res, next) => {

};

// param middleware used to get object for other CRUD activities
exports.getAppointmentById = (req, res, next, id) => {
    Appointment.findById(id, (err, appointment) => {
        if (err) {
            return res.status(500).send(err).end();
        } else if (!appointment) {
            return res.status(404).send({message: `Appointment with the id of ${id} not found`}).end();
        } else {
            res.locals.appointment = appointment;
            return next();
        }
    });
};

exports.testCreate = (req, res, next) => {

    console.log(req.body);

    let appointment = new Appointment(req.body);
    appointment.vaccine = req.body.vaccineId;
    appointment.patient = req.body.patientId;
    appointment.clinic = req.body.clinicId;
    appointment.healthPractitioner = req.body.healthPractitionerId;

    appointment.save((err, app) => {
        if (err) {
            return res.status(500).send(err).end();
        } else {
            if (app) {
                return res.status(200).send(app);
            } else {
                return res.status(500).send({message: "There was an error saving appointment."}).end();
            }
        }
    });
}

const samplePayloadForRequestAppointment = {
    reason: 'Sample Reason',
    preferredDate: '2021-03-30T13:00:00',
    preferredTime: '2021-03-30T13:00:00',
    startTime: '2021-03-30T13:00:00',
    endTime: '2021-03-30T14:00:00',
    type: 'REQUESTED',
    clinic: '',
    patient: '',
    healthPractitioner: ''
}
