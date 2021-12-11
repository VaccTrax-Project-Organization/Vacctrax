const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClinicSchema = new Schema({
    name: String,
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
    }
});
// Configure the 'CliniSchema' to use getters and virtuals when transforming to JSON
ClinicSchema.set("toJSON", {
    getters: true,
    virtuals: true,
});

// Create the 'Clinic' model out of the 'ClinicSchema'
mongoose.model("Clinic", ClinicSchema, "clinics");
