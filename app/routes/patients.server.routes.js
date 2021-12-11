// import patients controller
const patientController = require("../controllers/patient.server.controller");
const loginController = require("../controllers/login.server.controller")

module.exports = (app) => {
    // if any route contains the patient Id param this middle ware is called first
    app.param("patientId", patientController.getPatientById);

    app.put("/api/patient/:patientId", patientController.updatePatientDetails);

    app.get("/api/patients", patientController.getAllPatients);

    app.post("/api/signUp", patientController.signUp);
};
