// import patients controller
const patientController = require("../controllers/patient.server.controller");

module.exports = function (app) {

    // if any route contains the patient Id param this middle ware is called first
    app.param("patientId", patientController.getPatientById);

    app.post("/api/patient", patientController.createPatientTest);
};
