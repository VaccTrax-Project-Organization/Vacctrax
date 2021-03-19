const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    streetLine1: {
        type: String,
        required: "Street line one is required",
        trim: true
    },
    streetLine2: {
        type: String,
        required: "Street line two is required",
        trim: true
    },
    postalCode: {
        type: String,
        required: "Postal code is required",
        trim: true
    },
    province: {
        type: String,
        required: "Province is required",
        trim: true
    },
    city: {
        type: String,
        required: "City is required",
        trim: true
    }
});

// Configure the 'AddressSchema' to use getters and virtuals when transforming to JSON
AddressSchema.set("toJSON", {
    getters: true,
    virtuals: true,
});


mongoose.model('Address', AddressSchema);