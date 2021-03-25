const Patient = require('mongoose').model('Patient');

exports.getPatientById=(req,res,next,id)=>{
    console.log("Finding Patient");
    Patient.findOne({
        _id:id
    },(err,patient)=>{
        if(err){
            return next(err);
        }else{
            req.patient  = patient;
            console.log(patient);
            next();          
        }
    })
}