const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VaccineSchema = new Schema({
    vaccineId: Number,
    name: String,
    isRationed: Boolean,
    manufactuer: String,
    shelfLife: Number,
    province: {
        type: String,
        enum: ['NL', 'PE', 'NS', 'NB','QC','ON','MB','SK','AB','BC','YT','NT']
    }
  
});
// Configure the 'UserSchema' to use getters and virtuals when transforming to JSON
VaccineSchema.set("toJSON", {
    getters: true,
    virtuals: true,
});

// Create the 'Student' model out of the 'StudentSchema'
mongoose.model("Vaccine", VaccineSchema);