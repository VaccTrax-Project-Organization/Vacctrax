const Appointment = require('mongoose').model('Appointment');

exports.requestAppointment = (req, res) => {
    console.log(req.body);
}

exports.getAllAppointmentsForClinic = (req, res, next) => {
    const clinic = req.clinic;

    Appointment.find({clinic: clinic}, (err, appointments) => {
        if (err) {
            return next(err);
        } else {
            console.log(appointments);
            // getting appointment list
            res.status(200).send(appointments);
        }
    });
}
