const Address = require('mongoose').model('Address');

const Clinic = require('mongoose').model('Clinic');


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

exports.getAllClinics = (req, res, next) => {
    Clinic.find({}, (err, clinics) => {
        if (err) {
            return res.status(500).send(err).end();
        } else {
            return res.status(200).send(clinics).end();
        }
    }).populate('address');
}

exports.testSave = (req, res, next) => {
    const address = new Address(
        {
            streetLine1: "Progress Ave",
            streetLine2: "test street",
            postalCode: "L7H7H7",
            province: "ON",
            city: "Scar"
        }
    );

    let savedAddress = null;

    address.save().then((add) => {
        const clinic = new Clinic({
            name: "Centennial Clinic",
            address: add
        });

        clinic.save((err, cli) => {
            if (err) {
                return res.status(500).send(err).end();
            } else {
                return res.status(200).send(cli);
            }
        })
    })
}
