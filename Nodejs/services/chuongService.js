var mongosse = require('mongoose');
var Chuong = require('../models/chuong');

module.exports =   {
    Find : function(id){
        Chuong.findById(id, (err, result)=>{
            if(err){
                next(err);
            }else{
                return result;
            }
        });
    }

    
}