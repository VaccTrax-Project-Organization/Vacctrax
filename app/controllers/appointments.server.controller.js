const mongoose = require("mongoose");
const Appointment = mongoose.model('Appointment');
const Account = mongoose.model("Account");
const Patient = mongoose.model("Patient");
const HealthPractitioner = mongoose.model("HealthPractitioner");
const Clinic = mongoose.model("Clinic");
const Vaccine = mongoose.model("Vaccine");
const RequestAppointment = mongoose.model("RequestedAppointment");

exports.requestAppointment = (req, res) => {
    console.log(req.body);
    // let appointment = new RequestAppointment(req.body);
    let appointment = new Appointment(req.body);
    appointment.type = 'REQUESTED';

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
    const clinic = res.locals.clinic;

    console.log(clinic);

    // getting results for both collections and concatenating them in a single array
    Promise.all([
        Appointment.find({clinic: clinic._id}).populate(['clinic', {
            path: 'patient',
            populate: {path: 'account', model: 'Account'}
        }, {path: "healthPractitioner", populate: {path: "account", model: "Account"}}, 'vaccine']),
        RequestAppointment.find({clinic: clinic._id}).populate(['clinic', {
            path: 'patient',
            populate: {path: 'account', model: 'Account'}
        }, {path: "healthPractitioner", populate: {path: "account", model: "Account"}}, 'vaccine'])
    ]).then(results => {
        const [appointments, requestedAppointments] = results;

        console.log(appointments);
        console.log(requestedAppointments);
        res.status(200).send([...appointments, ...requestedAppointments])
    }).catch(error => {
        res.status(500).send(error).end();
    })
}

exports.getAllConfirmedAppointmentsForClinic = (req, res, next) => {
    const clinic = res.locals.clinic;
    console.log("check clinic", clinic);

    Appointment.find({clinic: clinic, type: "CONFIRMED"}, (err, appointments) => {
        if (err) {
            res.status(500).send(err).end();
        } else {
            console.log(appointments);
            // getting appointment list
            res.status(200).send(appointments);
        }
    }).populate(['clinic', {
        path: 'patient',
        populate: {path: 'account', model: 'Account'}
    }, {path: "healthPractitioner", populate: {path: "account", model: "Account"}}, 'vaccine']);
}

//pass in a patient to the res.locals. This is so a medical admin or a patient can get all their appointments.
exports.getPatientAppointments = (req, res, next) => {
    const patient = res.locals.patient;

    // getting results for both collections and concatenating them in a single array
    Promise.all([
        Appointment.find({patient: patient}).populate(['clinic', {
            path: 'patient',
            populate: {path: 'account', model: 'Account'}
        }, {path: "healthPractitioner", populate: {path: "account", model: "Account"}}, 'vaccine']),
        RequestAppointment.find({patient: patient}).populate(['clinic', {
            path: 'patient',
            populate: {path: 'account', model: 'Account'}
        }, {path: "healthPractitioner", populate: {path: "account", model: "Account"}}, 'vaccine'])
    ]).then(results => {
        const [appointments, requestedAppointments] = results;

        console.log(appointments);
        console.log(requestedAppointments);
        res.status(200).send([...appointments, ...requestedAppointments])
    }).catch(error => {
        res.status(500).send(error).end();
    })
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

// used to book appointment
exports.bookAppointment = (req, res) => {
    console.log(req.body);
    Promise.all([findIfPatientExistsByPatientId(req.body.patientId, res),
        findIfHealthPractitionerExistsByPractitionerId(req.body.healthPractitionerId, res),
        findIfClinicExistsByClinicId(req.body.clinicId, res),
        findIfVaccineExistsByVaccineId(req.body.vaccineId, res)
    ]).then((val) => {
        // const patient = val[0];
        // const healthPractitioner = val[1];
        // const clinic = val[2];
        // const vaccine = val[3];
        const [patient, healthPractitioner, clinic, vaccine] = val;
        if (patient && healthPractitioner && clinic && vaccine) {
            let appointment = new Appointment({
                reason: req.body.reason,
                preferredDate: req.body.preferredDate,
                preferredTime: req.body.preferredTime,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                type: 'CONFIRMED',
                clinic: clinic,
                patient: patient,
                vaccine: vaccine,
                vaccineDose: req.body.vaccineDose,
                healthPractitioner: healthPractitioner
            });

            appointment.save((err, app) => {
                if (err) {
                    return res.status(500).send(err).end();
                } else {
                    return res.status(200).send(app);
                }
            })
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).send(err).end();
    });
}

exports.updateAppointment = (req, res, next) => {
    console.log("req.body", req.body);
    console.log("res.locals", res.locals);
    Appointment.findByIdAndUpdate(res.locals.appointment._id, {$set: req.body}, {new: true}, (err, appointment) => {
        if (err) {
            return res.status(500).send(err).end();
        } else {
            return res.status(200).send(appointment).end();
        }
    });

    console.log(req.body);

};

exports.getBookedAppointment = (req,res,next)=>{
    //first get all the booked appointments for the 
    const patient = res.locals.patient;
    Appointment.find({patient: patient,type:"CONFIRMED"}, (err, appointments) => {
        
        if (err) {
            return res.status(500).send(err).end();
        }
        //will return a list of appointments with the confimred status. The user will be be able then select which of the booked appointment they want to access and we use the GetPaitentAppointment method to get the specified one
        return res.status(200).send(appointments);
        //populate will auto fill the reference Id's with the actual object of each listed (including their ids)
    }).populate([
        "clinic",
        "vaccine",
        {path: "patient", populate: {path: "account"}},
        {path: "healthPractitioner", populate: {path: "account"}}
    ]);
}


exports.getRequestedAppointment = (req,res,next)=>{

    const patient = res.locals.patient;
    RequestAppointment.find({patient: patient,type:"REQUESTED"}, (err, appointments) => {
        
        if (err) {
            return res.status(500).send(err).end();
        }
        //will return a list of appointments with the REQUESTED status. The user will be be able then select which of the Requested appointment they want to access and we use the GetPaitentAppointment method to get the specified one
        return res.status(200).send(appointments);
        //populate will auto fill the reference Id's with the actual object of each listed (including their ids)
    }).populate([
        "clinic",
        "vaccine",
        {path: "patient", populate: {path: "account"}},
        {path: "healthPractitioner", populate: {path: "account"}}
    ]);
}



// to be implemented in the future
exports.deleteAppointment = (req, res, next) => {

};

// param middleware used to get object for other CRUD activities
exports.getAppointmentById = (req, res, next, id) => {
    console.log("id");
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

function findIfPatientExistsByPatientId(patientId, res) {
    return new Promise(resolve => {
        Patient.findById(patientId, (err, patient) => {
            if (err) {
                res.status(500).send(err).end();
            } else {
                if (patient) {
                    resolve(patient);
                } else {
                    res.status(404).send('Patient with the given Id Not found.').end();
                }
            }
        });
    });
}

function findIfHealthPractitionerExistsByPractitionerId(healthPractitionerId, res) {
    return new Promise(resolve => {
        HealthPractitioner.findById(healthPractitionerId, (err, practitioner) => {
            if (err) {
                res.status(500).send(err).end();
            } else {
                if (practitioner) {
                    resolve(practitioner);
                } else {
                    res.status(404).send('Health Practitioner with the given Id Not found.').end();
                }
            }
        });
    });
}

function findIfClinicExistsByClinicId(clinicId, res) {
    return new Promise(resolve => {
        Clinic.findById(clinicId, (err, clinic) => {
            if (err) {
                res.status(500).send(err).end();
            } else {
                if (clinic) {
                    resolve(clinic);
                } else {
                    res.status(404).send('Clinic with the given Id Not found.').end();
                }
            }
        });
    });
}

function findIfVaccineExistsByVaccineId(vaccineId, res) {
    return new Promise(resolve => {
        console.log(vaccineId);
        Vaccine.findById(vaccineId, (err, vaccine) => {
            if (err) {
                res.status(500).send(err).end();
            } else {
                if (vaccine) {
                    resolve(vaccine);
                } else {
                    res.status(404).send('Vaccine with the given Id Not found.').end();
                }
            }
        });
    });
}

function findIfAppointmentExistsByAppointmentId(appointmentId, res) {
    return new Promise(resolve => {
        console.log(appointmentId);
        Appointment.findById(appointmentId, (err, app) => {
            if (err) {
                res.status(500).send(err).end();
            } else {
                if (app) {
                    resolve(app);
                } else {
                    res.status(404).send('Appointment with the given Id Not found.').end();
                }
            }
        });
    });
}

exports.requestAppointmentUpdate = (req,res) => {
    Promise.all([findIfAppointmentExistsByAppointmentId(req.body._id, res),
        findIfPatientExistsByPatientId(req.body.patientId, res),
        findIfHealthPractitionerExistsByPractitionerId(req.body.healthPractitionerId, res),
        findIfClinicExistsByClinicId(req.body.clinicId, res),
        findIfVaccineExistsByVaccineId(req.body.vaccineId, res)
    ]).then((val) => {
        const [appoint, patient, healthPractitioner, clinic, vaccine] = val;
        if (patient && healthPractitioner && clinic && vaccine) {
            let appointment = new RequestAppointment({
                reason: req.body.reason,
                preferredDate: req.body.preferredDate,
                preferredTime: req.body.preferredTime,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                type: 'REQUESTED',
                clinic: clinic,
                patient: patient,
                vaccine: vaccine,
                healthPractitioner: healthPractitioner,
                vaccineDose: req.body.vaccineDose,
                originalAppointment: appoint
            });

            appointment.save((err, app) => {
                if (err) {
                    return res.status(500).send(err).end();
                } else {
                    return res.status(200).send(app);
                }
            })
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).send(err).end();
    });
}

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

