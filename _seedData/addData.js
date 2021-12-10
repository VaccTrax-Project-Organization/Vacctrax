const db = require("mongoose");
const mongoose = require("mongoose");
const Schema = db.Schema;
require("../app/models/clinic.server.model");
require("../app/models/address.server.model");
require("../app/models/appointment.server.model");
require("../app/models/healthPractitioner.server.model");
require("../app/models/medicalAdmin.server.model");
require("../app/models/patient.server.model");
require("../app/models/vaccine.server.model");
require("../app/models/inventory.server.model");
require("../app/models/account.server.model");
require("../app/models/requestAppointment.server.model");
const Vaccine = mongoose.model('Vaccine');
const Account = mongoose.model('Account');
const Clinic = mongoose.model('Clinic');
const Appointment = mongoose.model("Appointment");
const RequestedAppointment = mongoose.model("RequestedAppointment");

const addedClinics = [];
let addedPatients = [];
const addedVaccines = [];
const addedPractitioners = [];
const addedAdmins = [];
const addedGovernmentUsers = [];
const addedAppointments = [];

db.connect(
    "mongodb+srv://vacctrax-admin:ZG910hbIrR2zqUWe@vacctrax.84jrm.mongodb.net/vacctrax-seed-db?retryWrites=true&w=majority",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
).then(() => {
        console.log("DB Connected...");
        addClinics();
    })
    .catch((err) => {
        console.log(`DB Connection Error: ${err.message}`);
});

addClinics = async () => {
    const clinics = [];
    const newClinic = new Clinic({
        name: "Centennial College",
        address: {
            streetLine1: "960, Progress Ave",
            streetLine2: "",
            postalCode: "L6C T6Y",
            province: "ON",
            city: "Scarborough"
        }
    });

    const newClinic2 = new Clinic({
        name: "Toronto Clinic",
        address: {
            streetLine1: "Old Street Ave",
            streetLine2: "",
            postalCode: "J7G U7Y",
            province: "ON",
            city: "Toronto"
        }
    });

    const newClinic3 = new Clinic({
        name: "Vancouver Clinic",
        address: {
            streetLine1: "Harbour Street Ave",
            streetLine2: "",
            postalCode: "G6T E4R",
            province: "BC",
            city: "Vancouver"
        }
    });
    clinics.push(newClinic);
    clinics.push(newClinic2);
    clinics.push(newClinic3);

    await Promise.all(clinics.map(async (cl) => {
        const res = await cl.save();
        addedClinics.push(res);
      }));
    console.log("clinics added !!");
    addUsers();
}

addUsers = async () => {
    try {
        const newPatientAccount = new Account({
            firstName: "Mike",
            lastName: "Smith",
            email: "mike@gmail.com",
            password: "$2a$10$/pjxWQ/GzwjoAbh2kVKkgONWnyGphG/5SOkUkvL6UqrgOixYuREZK", // Mike123!
            phone: "6574738282",
            address: {
                streetLine1: "Mississippi Street",
                streetLine2: "",
                postalCode: "H7G J8H",
                province: "ON",
                city: "Scarborough"
            },
            type: "PATIENT",
            healthCardNo: "GH5672GSHJ62"
        });

        addedPatients.push(await newPatientAccount.save());

        const newPatientAccount2 = new Account({
            firstName: "James",
            lastName: "Clark",
            email: "jamesc@gmail.com",
            password: "$2a$10$J6tcfRe5nLl2wzdUFBlv5ObFWbtARXoBVlRfERfuhTvhaXi5sea2.", // James123!
            phone: "4562526262",
            address: {
                streetLine1: "Ocatia Street",
                streetLine2: "",
                postalCode: "J7G J8H",
                province: "ON",
                city: "Vaughan"
            },
            type: "PATIENT",
            healthCardNo: "HSGSY6777SHH"
        });

        addedPatients.push(await newPatientAccount2.save());

        const newPractitionerAccount = new Account({
            firstName: "Octo",
            lastName: "Octavious",
            email: "prac@gmail.com",
            password: "$2a$10$pJcy95S6B8s9I78BI8cQZu9xc1JYexszXEXpzoVUzdJwqmgTaGVNy", // Test123!
            phone: "5260721772",
            address: {
                streetLine1: "York Street",
                streetLine2: "",
                postalCode: "JH7 J8H",
                province: "ON",
                city: "Toronto"
            },
            type: "HEALTH_PRACTITIONER",
            clinic: addedClinics[0]._id
        });

        addedPractitioners.push(await newPractitionerAccount.save());

        const newPractitionerAccount2 = new Account({
            firstName: "Markus",
            lastName: "Smith",
            email: "marksmith@gmail.com",
            password: "$2a$10$pJcy95S6B8s9I78BI8cQZu9xc1JYexszXEXpzoVUzdJwqmgTaGVNy", // Test123!
            phone: "536727271",
            address: {
                streetLine1: "James Street",
                streetLine2: "",
                postalCode: "H7G K8J",
                province: "BC",
                city: "Vancouver"
            },
            type: "HEALTH_PRACTITIONER",
            clinic: addedClinics[2]._id
        });

        addedPractitioners.push(await newPractitionerAccount2.save());

        const newMedicalAdmin = new Account({
            firstName: "Tom",
            lastName: "Philips",
            email: "tom@gmail.com",
            password: "$2a$10$pJcy95S6B8s9I78BI8cQZu9xc1JYexszXEXpzoVUzdJwqmgTaGVNy", // Test123!
            phone: "647377272",
            address: {
                streetLine1: "Old Wine Street",
                streetLine2: "",
                postalCode: "H7G K8J",
                province: "ON",
                city: "Toronto"
            },
            type: "MEDICAL_ADMIN",
            clinic: addedClinics[0]._id
        });

        addedAdmins.push(await newMedicalAdmin.save());

        const newMedicalAdmin2 = new Account({
            firstName: "Amanda",
            lastName: "Clark",
            email: "amanda@gmail.com",
            password: "$2a$10$pJcy95S6B8s9I78BI8cQZu9xc1JYexszXEXpzoVUzdJwqmgTaGVNy", // Test123!
            phone: "5627711",
            address: {
                streetLine1: "John Street",
                streetLine2: "",
                postalCode: "H7G K8J",
                province: "ON",
                city: "Toronto"
            },
            type: "MEDICAL_ADMIN",
            clinic: addedClinics[1]._id
        });

        addedAdmins.push(await newMedicalAdmin2.save());

        const governmentUser = new Account({
            firstName: "John",
            lastName: "Wayne (Government)",
            email: "wayne@gmail.com",
            password: "$2a$10$pJcy95S6B8s9I78BI8cQZu9xc1JYexszXEXpzoVUzdJwqmgTaGVNy", // Test123!
            phone: "68776565",
            address: {
                streetLine1: "John Street",
                streetLine2: "",
                postalCode: "H7G K8J",
                province: "ON",
                city: "Ottawa"
            },
            type: "GOVERNMENT"
        });

        addedGovernmentUsers.push(await governmentUser.save());
        console.log("users added !!");
        addVaccines();
    } catch (er) {
        console.log(er);
    }
}

addVaccines = async () => {
    const newVaccine = new Vaccine({
        name: "Moderna Spikevax COVID-19 vaccine",
        manufacturer: "ModernaTX, Inc.",
        shelfLife: 2,
        approvedProvinces: "ON, BC, QC, NF"
    });

    const newVaccine2 = new Vaccine({
        name: "Pfizer-BioNTech Comirnaty COVID-19 vaccine",
        manufacturer: "BioNTech Manufacturing GmbH",
        shelfLife: 1,
        approvedProvinces: "ON, BC, QC, NF"
    });

    const newVaccine3 = new Vaccine({
        name: "AstraZeneca Vaxzevria COVID-19 vaccine",
        manufacturer: "AstraZeneca Canada Inc",
        shelfLife: 3,
        approvedProvinces: "ON, BC"
    });

    addedVaccines.push(await newVaccine.save());
    addedVaccines.push(await newVaccine2.save());
    addedVaccines.push(await newVaccine3.save());
    console.log("vaccines added !!");
    addAppointments();
}

addAppointments = async () => {
    const newAppointment = new Appointment({
        reason : "reason",
        preferredDate: new Date('2021-12-22T10:00:00'),
        preferredTime: new Date('2021-12-22T10:15:00'),
        startTime: new Date('2021-12-22T10:00:00'),
        endTime: new Date('2021-12-22T10:15:00'),
        type: "CONFIRMED",
        vaccine: addedVaccines[0]?._id,
        vaccineDose: "2nd dose",
        clinic: addedClinics[0]?._id,
        patient: addedPatients[0]._id,
        healthPractitioner: addedPractitioners[0]?._id
    });

    addedAppointments.push(await newAppointment.save());

    const newAppointment2 = new Appointment({
        reason : "reason",
        preferredDate: new Date('2021-12-05T14:00:00'),
        preferredTime: new Date('2021-12-05T14:15:00'),
        startTime: new Date('2021-12-05T14:00:00'),
        endTime: new Date('2021-12-05T14:15:00'),
        type: "COMPLETED",
        vaccine: addedVaccines[0]?._id,
        vaccineDose: "1st dose",
        clinic: addedClinics[0]?._id,
        patient: addedPatients[0]._id,
        healthPractitioner: addedPractitioners[0]?._id
    });

    addedAppointments.push(await newAppointment2.save());

    console.log("Appointments saved !!");
}

