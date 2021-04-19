// Load the 'appointments' controller
const appointmentController = require("../controllers/appointments.server.controller");
const medicalAdminController = require('../controllers/medicalAdmin.server.controller');

// Define the routes module' method
module.exports = (app) => {
    // Mount the 'appointments' controller's 'requestAppointment' method
    app.post("/api/requestAppointment", appointmentController.requestAppointment);

    app.get("/api/getAllAppointmentsByPatientId/:patientId", appointmentController.getPatientAppointments);
    app.get("/api/getConfirmedAppointmentsByClinicId/:clinicId", appointmentController.getAllConfirmedAppointmentsForClinic);
    app.get("/api/getConfirmedAppointmentsByPatient/:patientId",appointmentController.getBookedAppointment);
    app.get("/api/getRequestAppointmentsByPatient/:patientId",appointmentController.getRequestedAppointment);
    app.get("/api/getAllAppointmentsByClinicId/:clinicId", appointmentController.getAllAppointmentsForClinic);

    app.route('/api/declineAppointment/:appointmentId')
        .put(medicalAdminController.declineAppointment);

    app.post("/api/bookAppointment", appointmentController.bookAppointment);

    app.route("/api/appointments/:appointmentId")
        .put(appointmentController.updateAppointment)
        .delete(appointmentController.deleteAppointment);

    app.post("/api/requestAppointmentUpdate", appointmentController.requestAppointmentUpdate);

    app.param("appointmentId", appointmentController.getAppointmentById);

};
