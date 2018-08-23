const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp',{ useNewUrlParser: true }, function(err){
    if(err){
        return console.log('loi ket noi',+ JSON.stringify(err,undefined,2) );
    }
    else{
        console.log('ket noi mongodb thanh cong');
    }
 
});

module.exports = mongoose;