const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    numberOfVaccines: {
        type: Number
    },
    vaccineType: {
        type: Schema.Types.ObjectId,
        ref: 'Vaccine'
    }
});
InventorySchema.set("toJSON", {
    getters: true,
    virtuals: true,
});

mongoose.model("Inventory", InventorySchema, "inventory");
