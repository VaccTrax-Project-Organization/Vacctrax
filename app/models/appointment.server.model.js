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
        required: "type is required",
    },
    clinic: {
        type: Schema.Types.ObjectId,
        ref: 'Clinic'
    }
});

mongoose.model('Appointment', AppointmentSchema);
