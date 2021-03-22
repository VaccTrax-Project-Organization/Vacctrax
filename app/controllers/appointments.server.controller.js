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

//pass in a patient to the req. This is so a medical admin or a patient can get all their appointments.
exports.getPatientAppointment = (req,res,next) => {
    const patient = req.patient;
    Appointment.find({patient:patient},(err,appointments)=>{
        if(err){
            return next(err);
        }else{
            console.log("Patient " + patient.id + "'s appointments: \n" +appointments );
            res.status(200).send(appointments);
        }
    })
}

//for a specific appoint for a specific patient (get it by it's id)
exports.getPatientAppointmentDetail = (req,res,next) => {
    const patient = req.patient;
    Appointment.findOne({
        _id:id
    },(err,appointment)=>{
        if(err){
            return next(err);
        }else{
            req.appointment = appointment;
            console.log(appointment);
            next();          
        }
    })
}