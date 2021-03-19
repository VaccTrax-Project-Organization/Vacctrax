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

mongoose.model('Patient', PatientSchema);
