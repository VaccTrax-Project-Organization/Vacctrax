// Load the 'clinics' controller
const clinics = require("../controllers/clinics.server.controller");

// Define the routes module' method
module.exports = function (app) {
    app.param('clinicId', clinics.getClinicById);
};
