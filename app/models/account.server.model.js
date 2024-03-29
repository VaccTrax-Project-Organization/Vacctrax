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
        trim: true,
    },
    address: {
        streetLine1: {
            type: String,
            required: "Street line one is required",
            trim: true
        },
        streetLine2: {
            type: String,
            trim: true
        },
        postalCode: {
            type: String,
            required: "Postal code is required",
            trim: true
        },
        province: {
            type: String,
            enum: ['NL', 'PE', 'NS', 'NB','QC','ON','MB','SK','AB','BC','YT','NT']
        },
        city: {
            type: String,
            required: "City is required",
            trim: true
        }
    },
    type: {
        type: String,
        enum: ['PATIENT', 'MEDICAL_ADMIN', 'HEALTH_PRACTITIONER', 'GOVERNMENT']
    },
    clinic: {
        type: Schema.Types.ObjectId,
        ref: 'Clinic'
    },
    healthCardNo: {
        type: String,
        trim: true
    }
});

// Configure the 'AccountSchema' to use getters and virtuals when transforming to JSON
AccountSchema.set("toJSON", {
    getters: true,
    virtuals: true,
});

mongoose.model('Account', AccountSchema, "accounts");
