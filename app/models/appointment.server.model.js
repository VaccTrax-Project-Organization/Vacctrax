const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    reason : {
        type: String,
        required: "Reason is required",
        trim: true
    },
    preferredDate: {
        type: Date,
        default: new Date(),
        required: "Preferred Date is required",
    },
    preferredTime: {
        type: Date,
        default: new Date(),
        required: "Preferred Time is required",
    },
    startTime: {
        type: Date,
        default: new Date(),
    },
    endTime: {
        type: Date,
        default: new Date(),
    },
    type: {
        type: String,
        enum : ['CONFIRMED','REQUESTED', 'CANCELLED', 'COMPLETED'],
        default: 'REQUESTED',
        required: "Type is required",
    },
    vaccine: {
        type: String,
        required: "Vaccine is required"
    },
    vaccineDose: {
        type: Number,
        required: "Vaccine dose is required"
    },
    vaccine: {
        type: Schema.Types.ObjectId,
        ref: 'Vaccine'
    },
    vaccineDose: {
        type: String,
        required: "Vaccine dose is required"
    },
    clinic: {
        type: Schema.Types.ObjectId,
        ref: 'Clinic'
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    healthPractitioner: {
        type: Schema.Types.ObjectId,
        ref: 'HealthPractitioner'
    }
});

// Configure the 'AppointmentSchema' to use getters and virtuals when transforming to JSON
AppointmentSchema.set("toJSON", {
    getters: true,
    virtuals: true,
});

mongoose.model('Appointment', AppointmentSchema);
