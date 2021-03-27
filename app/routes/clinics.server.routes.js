// Load the 'clinics' controller
const clinicController = require("../controllers/clinics.server.controller");

// Define the routes module' method
module.exports = (app) => {
    app.param('clinicId', clinicController.getClinicById);
};
