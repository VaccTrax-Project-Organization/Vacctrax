const Address = require('mongoose').model('Address');

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
    Clinic.find( { _id : id}, (err, clinic) => {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Set the 'req.clinic' property
            req.clinic = clinic;
            console.log(clinic);
            // Call the next middleware
            next();
        }
    });
};

exports.deleteClinicById = function(req,res,next){
    Clinic.findByIdAndDelete(req.clinic.id, req.body, function (err, clinic) {
        if (err) return next(err);
        console.log("deleting clinic: " + req.clinic.id );
        res.json(clinic);
    });
}

exports.testSave = (req, res, next) => {
    const address = new Address(
        {
            streetLine1: "test street",
            streetLine2: "tetet",
            postalCode: "L7H7H7",
            province: "ON",
            city: "Scar"
        }
    );

    let savedAddress = null;

    address.save().then((add) => {
        const clinic = new Clinic({
            name: "test Clinic",
            address: add
        });

        clinic.save((err, cli) => {
            if (err) {
                return next(err);
            } else {
                console.log(cli);
                next();
            }
        })
    })
}
