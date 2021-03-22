const Vaccine = require('mongoose').model('Vaccine');

exports.create = function(req,res,next){

    try{
        //get the vaccine information from the request.
        var vaccine = new Vaccine(req.body);
        console.log("body: "+ req.body.name);

        vaccine.save(function(err){
            if(err){
                return next(err);
            }else{
                res.json(vaccine);
            }
        })

    }catch(e){
        console.log('Error creating vaccine object see error below: \n' + e);
    }
    
   

}

exports.list = function (req, res, next) {
    //get a list of all the vaccines in a JSON object
    try{
    Vaccine.find({}, function (err,vaccines) {
        if (err) {
            return next(err);
        } else {
            res.json(vaccines);
        }
    });
}catch(e){
    console.log('Error: could not  get vaccine list');
}
};

//read controller to display a student
exports.read = function(req, res){
    //response object to send  a JSON response
    res.json(req.vaccine);
}

//get a vaccine by its mongodb id
exports.vaccineByID = function (req,res,next,id){
    console.log("finding vaccine");
    Vaccine.findOne({
        _id:id
    },(err,vaccine)=>{
        if(err){
            return next(err);
        }else{
            req.vaccine = vaccine;
            console.log(vaccine);
            next();          
        }
    })

}

//update vaccine info

exports.update = function (req,res,next){
    console.log(req.body);
    Vaccine.findByIdAndUpdate(req.vaccine.id, req.body, function(err,vaccine){
        if(err){
            console.log(err);
            return next(err);
        }
        res.json(vaccine);
    })
}

exports.delete = function(req,res,next){
    Vaccine.findByIdAndDelete(req.vaccine.id, req.body, function (err, vaccine) {
        if (err) return next(err);
        console.log("deleting vaccine: " + req.vaccine.id );
        res.json(vaccine);
      });
}