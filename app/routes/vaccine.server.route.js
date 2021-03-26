var vaccines = require('../controllers/vaccine.server.controller');
var express = require('express');
var router = express.Router();

module.exports =  function(app){
    app.post('/api/addVaccine',vaccines.create);
    app.get('/api/vaccines',vaccines.list);

    //setting up vaccine search by mongodb id paramter
    app.route('/api/vaccines/:vaccineId')
    .get(vaccines.read)
    .put(vaccines.update)
    .delete(vaccines.delete)

    app.param('vaccineId',vaccines.vaccineByID);
}
