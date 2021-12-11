const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VaccineSchema = new Schema({
    name: String,
    manufacturer: String,
    shelfLife: Number,
    approvedProvinces: {
        type: String,
    },
    
});
// Configure the 'Vaccine' to use getters and virtuals when transforming to JSON
VaccineSchema.set("toJSON", {
    getters: true,
    virtuals: true,
});

// Create the 'Student' model out of the 'StudentSchema'
mongoose.model("Vaccine", VaccineSchema, "vaccines");
