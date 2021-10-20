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
});

// Configure the 'AddressSchema' to use getters and virtuals when transforming to JSON
AddressSchema.set("toJSON", {
    getters: true,
    virtuals: true,
});


mongoose.model('Address', AddressSchema, "addresses");
