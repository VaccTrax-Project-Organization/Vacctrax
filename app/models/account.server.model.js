const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    firstName: {
        type: String,
        required: "First name is required",
        trim: true
    },
    lastName: {
        type: String,
        required: "Last name is required",
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    password: {
        type: String,
        // Validate the 'password' value length
        validate: [
            (password) => password && password.length > 6,
            "Password should be longer",
        ],
    },
    phone: {
        type: String,
        required: "Phone is required",
        trim: true,
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
    },
    type: {
        type: String,
        enum: ['PATIENT', 'MEDICALADMIN', 'HEALTHPRACTITIONER', 'GOVERNMENT']
    }
});

mongoose.model('Account', AccountSchema);