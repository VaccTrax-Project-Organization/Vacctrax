// Load the 'appointments' controller
const appointments = require("../controllers/appointments.server.controller");

// Define the routes module' method
module.exports = function (app) {
    // Mount the 'appointments' controller's 'requestAppointment' method
    app.post("/api/requestAppointment", appointments.requestAppointment);

    app.get("/api/getAllClinicAppointments/:clinicId", appointments.getAllAppointmentsForClinic);

};
