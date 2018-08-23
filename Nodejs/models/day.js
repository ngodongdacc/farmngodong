const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var daySchema = new Schema({
    tenDay: {type: String},
    tenTrai: {type: String, required: true},
    ghiChu: {type: String},
    moTa: {type: String}
});

module.exports = mongoose.model('Day', daySchema);