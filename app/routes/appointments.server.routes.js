// Load the 'appointments' controller
const appointments = require("../controllers/appointments.server.controller");

// Define the routes module' method
module.exports = function (app) {
    // Mount the 'appointments' controller's 'requestAppointment' method

    /**
     * @swagger
     * components:
     *  schemas:
     *      Appointment:
     *          type:object
     *          required:
     *              -reason
     *              -type
     *              -preferredDate
     *              -preferredTime
     *          properties:
     *              _id:
     *                  type: string
     *                  description: Auto-generated id of the appointment
     *              reason:
     *                  type: string
     *                  description: Reason for the appointment request
     *              preferredDate:
     *                  type: string
     *                  description: Preferred date for the appointment
     *              preferredTime:
     *                  type: string
     *                  description: Preferred Time for the appointment
     *              startTime:
     *                  type: string
     *                  description: Start Time of the appointment
     *              endTime:
     *                  type: string
     *                  description: End Time of the appointment
     *              type:
     *                  type: string
     *                  description: Type of the appointment ('CONFIRMED','REQUESTED', 'CANCELLED', 'COMPLETED')
     *              clinic:
     *                  type: object
     *                  description: Clinic linked to the patient
     *              patient:
     *                  type: object
     *                  description: Patient linked to the appointment
     *              healthPractitioner:
     *                  type: object
     *                  description: Health Practitioner linked to the appointment
     * */

    app.post("/api/requestAppointment", appointments.requestAppointment);

    app.get("/api/getAllClinicAppointments/:clinicId", appointments.getAllAppointmentsForClinic);

    app.post("/api/bookAppointment", appointments.bookAppointment);

};
