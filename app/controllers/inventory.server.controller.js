const mongoose = require("mongoose");
const Inventory = mongoose.model('Inventory');


//get a inventory by its mongodb id
exports.inventoyByID = function (req,res,next,id){
    console.log("finding inventory");
    Inventory.findOne({
        _id:id
    },(err,inventory)=>{
        if(err){
            return next(err);
        }else{
            req.inventory = inventory;
            console.log(inventory);
            next();
        }
    })

}

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
        const inventory = await Inventory.find().lean().populate("vaccineType");
        return res.status(200).send(inventory);
    } catch (e) {
        return res.status(500).send(e).end();
    }
};

exports.update = async function (req, res, next) {
    console.log(req.inventory.id);
    try {
        const inventory = await Inventory.findByIdAndUpdate(req.inventory.id, req.body).lean().populate("vaccineType");
        return res.status(200).send(inventory);
    } catch (e) {
        return res.status(500).send(e).end();
    }
};

exports.delete = async function (req, res, next) {
    try {
        const inventory = await Inventory.findByIdAndDelete(req.inventory.id).lean().populate("vaccineType");
        return res.status(200).send(inventory);
    } catch (e) {
        return res.status(500).send(e).end();
    }
};
