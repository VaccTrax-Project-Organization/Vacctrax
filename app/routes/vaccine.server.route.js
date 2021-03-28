const vaccineController = require('../controllers/vaccine.server.controller');
const express = require('express');
const router = express.Router();

module.exports = (app) => {
    app.post('/api/addVaccine', vaccineController.create);
    app.get('/api/vaccines', vaccineController.list);

    //setting up vaccine search by mongodb id paramter
    app.route('/api/vaccines/:vaccineId')
        .get(vaccineController.read)
        .put(vaccineController.update)
        .delete(vaccineController.delete)

    app.param('vaccineId', vaccineController.vaccineByID);
}
