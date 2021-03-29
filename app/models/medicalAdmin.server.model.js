const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MedicalAdminSchema = new Schema({
    account: {
        type: Schema.Types.ObjectId,
        ref: 'Account'
    },
    clinic: {
        type: Schema.Types.ObjectId,
        ref: 'Clinic'
    }
});

// Configure the 'MedicalAdminSchema' to use getters and virtuals when transforming to JSON
MedicalAdminSchema.set("toJSON", {
    getters: true,
    virtuals: true,
});

// Create the 'Student' model out of the 'StudentSchema'
mongoose.model("MedicalAdmin", MedicalAdminSchema);
