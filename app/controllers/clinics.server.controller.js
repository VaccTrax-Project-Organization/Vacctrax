const Clinic = require('mongoose').model('Clinic');


exports.getAllClinics = function (req, res, next) {
        Clinic.find({}, function (err,clinics) {
            if(err){
                console.log("error", err);
                return res.status(500).send(err).end();
            }else{
                return res.status(200).send(clinics);
            }
        });
};


// get clinic by Id to get a clinic provided by the given id
exports.getClinicById = (req, res, next , id) => {
    console.log(id);
    // Using the 'Clinic' static 'findById' method to retrieve a specific clinic
    Clinic.findById( id, (err, clinic) => {
        if (err) {
            // Call the next middleware with an error message
            // return next(err);
            return res.status(500).send(err).end();
        } else {
            if (clinic) {
                // Set the 'req.clinic' property
                res.locals.clinic = clinic;
                console.log(clinic);
                // Call the next middleware
                return next();
            } else {
                return res.status(404).send({message: "Clinic with Provided Id not found."}).end();
            }
        }
    });
};

exports.getAllClinics = (req, res, next) => {
    Clinic.find({}, (err, clinics) => {
        if (err) {
            return res.status(500).send(err).end();
        } else {
            return res.status(200).send(clinics).end();
        }
    });
}

exports.updateClinicById = function (req,res,next){
    console.log(req.body);
    Clinic.findByIdAndUpdate(req.clinic.id, req.body, function(err,clinic){
        if(err){
            console.log(err);
            return next(err);
        }
        res.status(200).send(clinic);
    })
}

exports.deleteClinicById = function(req,res,next){
    Clinic.findByIdAndDelete(req.clinic.id, req.body, function (err, clinic) {
        if (err) return next(err);
        console.log("deleting clinic: " + req.clinic.id );
        res.json(clinic);
    });
}
