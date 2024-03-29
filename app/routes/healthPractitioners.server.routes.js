// import health Practitioner controller
const healthPractitioner = require("../controllers/healthPractitioners.server.controller");

module.exports = (app) => {

    app.post("/api/healthPractitioner", healthPractitioner.createHealthPractitionerTest);
    app.get("/api/getAllHealthPractitioners/:clinicId", healthPractitioner.getHealthPractitionersByClinicId);

    app.route("/api/getHealthPractionerDetails/:practitionerId")
    .get(healthPractitioner.getHealthPractitionerDetails)
    .put(healthPractitioner.updateHealthPractitionerDetails);
    

    app.param("practitionerId", healthPractitioner.getHealthPracitionerById);

};
