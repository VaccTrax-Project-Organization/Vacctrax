const mongoose = require("mongoose");
const Inventory = mongoose.model('Inventory');

exports.create = async function (req, res, next) {
    try {
        const inventory = new Inventory(req.body);
        const saved = await inventory.save();
        return res.status(200).send(saved);

    } catch (e) {
        return res.status(500).send(e).end();
    }
}

exports.list = async function (req, res, next) {
    //get a list of all the vaccines in a JSON object
    try {
        const inventory = await Inventory.find().lean().populate("vaccines.vaccineType");
        return res.status(200).send(inventory);
    } catch (e) {
        return res.status(500).send(e).end();
    }
};
