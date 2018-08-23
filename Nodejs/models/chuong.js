const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var chuongShema = new Schema({
    tenChuong: {type: String, required: true},    
    tenDay: {type: String},
    tenTrai: {type: String},
    moTa:  {type: String}
});

module.exports = {
    Chuong: mongoose.model('Chuong', chuongShema),
    chuongShema: chuongShema
}
