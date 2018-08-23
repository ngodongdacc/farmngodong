const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var traiSchema = new Schema({
    tenTrai: {type: String , unique: true},
    ghiChu: {type: String},
    moTa: {type: String}
});

module.exports = mongoose.model('Trai', traiSchema);