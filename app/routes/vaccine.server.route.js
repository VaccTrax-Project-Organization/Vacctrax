var vaccines = require('../controllers/vaccine.server.controller');
var express = require('express');
var router = express.Router();

module.exports =  function(app){
    app.post('/addVaccine',vaccines.create);
    app.get('/vaccines',vaccines.list);

    //setting up vaccine search by mongodb id paramter
    app.route('/vaccines/:vaccineId')
    .get(vaccines.read)
    .put(vaccines.update)
    .delete(vaccines.delete)

    app.param('vaccineId',vaccines.vaccineByID);
}