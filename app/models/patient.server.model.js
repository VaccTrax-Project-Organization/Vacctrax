const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    healthCardNo: {
        type: String,
        required: "Health Card Number is required",
        trim: true
    },
    account: {
        type: Schema.Types.ObjectId,
        ref: 'Account'
    }
});

// Configure the 'PatientSchema' to use getters and virtuals when transforming to JSON
PatientSchema.set("toJSON", {
    getters: true,
    virtuals: true,
});

mongoose.model('Patient', PatientSchema, "patients");
