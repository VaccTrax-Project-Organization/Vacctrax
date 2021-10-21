const inventoryController = require('../controllers/inventory.server.controller');
const express = require('express');
const router = express.Router();

module.exports = (app) => {
    app.post('/api/addInventory', inventoryController.create);
    app.get('/api/inventory', inventoryController.list);
}
