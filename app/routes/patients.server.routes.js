// import patients controller
const patientController = require("../controllers/patient.server.controller");

module.exports = function (app) {

    // if any route contains the patient Id param this middle ware is called first
    //DO NOT UNCOMMENT THIS APP PARAM METHOD - ASAD
    app.param("patientId", patientController.getPatientById);

    // app.route().get();
};
