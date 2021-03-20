const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClinicSchema = new Schema({
    clinicId: Number,
    name: String,
    appointments: {
        type: Schema.Types.ObjectId,
        ref: "Appointments",
    },
    healthPractitioners: {
        type: Schema.Types.ObjectId,
        ref: "HealthPractitioners",
    },
    medicalAdmins: {
        type: Schema.Types.ObjectId,
        ref: "MedicalAdmins"
    },
});
// Configure the 'CliniSchema' to use getters and virtuals when transforming to JSON
ClinicSchema.set("toJSON", {
    getters: true,
    virtuals: true,
});

// Create the 'Clinic' model out of the 'ClinicSchema'
mongoose.model("Clinic", ClinicSchema);
