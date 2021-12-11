const inventoryController = require('../controllers/inventory.server.controller');
const express = require('express');
const vaccineController = require("../controllers/vaccine.server.controller");
const router = express.Router();

module.exports = (app) => {
    app.param('inventoryId', inventoryController.inventoyByID);
    app.post('/api/addInventory', inventoryController.create);
    app.route('/api/updateInventory/:inventoryId').put(inventoryController.update);
    app.route('/api/deleteInventory/:inventoryId').delete(inventoryController.delete);
    app.get('/api/inventory', inventoryController.list);
}
