const MedicalAdmin = require('mongoose').model('MedicalAdmin');
const Appointment = require('mongoose').model('Appointment');

exports.declineAppointment = function (req, res, next) {

    let appointment = res.locals.appointment;
    console.log(res.locals.appointment);

    Appointment.findByIdAndUpdate(appointment.id, {type: 'CANCELLED'}, (err, updatedAppointment) => {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            console.log("Appointment " + updatedAppointment.id);
            res.status(200).send(updatedAppointment);
        }
    })
}