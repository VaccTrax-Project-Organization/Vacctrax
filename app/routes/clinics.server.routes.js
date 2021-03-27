// Load the 'clinics' controller
const clinics = require("../controllers/clinics.server.controller");

// Define the routes module' method
module.exports = function (app) {
    app.get("/api/clinics", clinics.getAllClinics);
    app.param('clinicId', clinics.getClinicById);
};
