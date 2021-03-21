const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClinicSchema = new Schema({
    name: String,
    address: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
    }
});
// Configure the 'CliniSchema' to use getters and virtuals when transforming to JSON
ClinicSchema.set("toJSON", {
    getters: true,
    virtuals: true,
});

// Create the 'Clinic' model out of the 'ClinicSchema'
mongoose.model("Clinic", ClinicSchema);
