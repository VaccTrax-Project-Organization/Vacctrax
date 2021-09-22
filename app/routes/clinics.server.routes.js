// Load the 'clinics' controller
const clinicController = require("../controllers/clinics.server.controller");

// Define the routes module' method
module.exports = function (app) {
    app.get("/api/clinics", clinicController.getAllClinics);

    app.route('/api/clinics/:clinicId')
        .get(clinicController.getClinicById)
        .put(clinicController.updateClinicById)
        .delete(clinicController.deleteClinicById)

    app.param('clinicId', clinicController.getClinicById);
};
