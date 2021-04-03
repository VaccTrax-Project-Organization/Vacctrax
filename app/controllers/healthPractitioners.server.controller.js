const mongoose = require("mongoose");
const HealthPractitioner = mongoose.model('HealthPractitioner');
const Account = mongoose.model('Account');
const Address = mongoose.model('Address');
const Clinic = mongoose.model('Clinic');

exports.createHealthPractitionerTest = (req, res, next) => {

    console.log(req.body);

    let address = new Address(req.body.address);


    address.save((err, add) => {
        if (err) {
            return res.status(500).send({message: "There was an Error Creating the Patient Address.", err: err}).end();
        } else {
            if (add) {
                let account = new Account(req.body.account);

                account.type = 'HEALTHPRACTITIONER';
                account.address = add;

                account.save((err, acc) => {
                    if (err) {
                        return res.status(500).send({
                            message: "There was an Error Creating the Patient Account.",
                            err: err
                        }).end();
                    } else {
                        if (acc) {

                            Clinic.findById('6060e1268ed9f38095247d80', (err, clinic) => {
                                if (err) {
                                    return res.status(500).send(err).end();
                                } else {
                                    if (clinic) {
                                        let practitioner = new HealthPractitioner();
                                        practitioner.account = acc;
                                        practitioner.clinic = clinic

                                        practitioner.save((err, pract) => {
                                            if (err) {
                                                return res.status(500).send({
                                                    message: "There was an Error Creating the practitioner.",
                                                    err: err
                                                }).end();
                                            } else {
                                                if (pract) {
                                                    console.log(pract);
                                                    return res.status(200).send({
                                                        account: acc,
                                                        practitioner: practitioner
                                                    });
                                                } else {
                                                    return res.status(500).send({message: "There was an Error Creating the practitioner."}).end();
                                                }
                                            }
                                        });
                                    }
                                }
                            });
                        } else {
                            return res.status(500).send({message: "Account not found."}).end();
                        }
                    }
                });
            } else {
                return res.status(500).send({message: "There was an Error Creating the Patient Address."}).end();
            }
        }
    });
}

exports.getHealthPractitionersByClinicId = (req, res, next) => {
    const clinic = res.locals.clinic;
    HealthPractitioner.find({clinic: clinic?._id}, (err, healthPractitioners) => {
        if (err) {
            return res.status(500).send({message: "There was an Error In Getting the Health Practitioners."}).end();
        }

        return res.status(200).send(healthPractitioners).end();
    }).populate([{path: "account", populate: "address"}]);
};