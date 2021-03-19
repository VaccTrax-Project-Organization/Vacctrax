const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HealthPractitionerSchema = new Schema({
    upcomingAppointments: {
        type: Schema.Types.ObjectId,
        ref: "Appointments",
    }
});
// Configure the 'UserSchema' to use getters and virtuals when transforming to JSON
HealthPractitionerSchema.set("toJSON", {
    getters: true,
    virtuals: true,
});

// Create the 'Student' model out of the 'StudentSchema'
mongoose.model("HealthPractitioner", HealthPractitionerSchema);
