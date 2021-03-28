// Load the 'appointments' controller
const appointmentController = require("../controllers/appointments.server.controller");

// Define the routes module' method
module.exports = function (app) {
    // Mount the 'appointments' controller's 'requestAppointment' method

    app.post("/api/requestAppointment", appointmentController.requestAppointment);

    app.get("/api/getAllAppointmentsByPatientId/:patientId", appointmentController.getPatientAppointments);

    app.post("/api/bookAppointment", appointmentController.bookAppointment);

    app.post("/api/testSave", appointmentController.testCreate);

    app.route("/api/appointments/:appointmentId")
        .put(appointmentController.updateAppointment)
        .delete(appointmentController.deleteAppointment);

    app.param("appointmentId", appointmentController.getAppointmentById);
};
