// Load the controllers
const appointmentController = require("../controllers/appointments.server.controller");

// Define the routes module' method
module.exports = (app) => {
    // Mount the 'appointments' controller's 'requestAppointment' method
    app.post("/api/requestAppointment", appointmentController.requestAppointment);

    app.get("/api/getAllAppointmentsByClinicId/:clinicId", appointmentController.getAllAppointmentsForClinic);

    app.post("/api/bookAppointment", appointmentController.bookAppointment);

    app.get("/api/getAllAppointmentsByPatientId/:patientId", appointmentController.getPatientAppointments);

    app.route("/api/appointments/:appointmentId")
        .put(appointmentController.updateAppointment)
        .delete(appointmentController.deleteAppointment);

};
