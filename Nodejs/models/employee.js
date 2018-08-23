const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var employeeSchema = new Schema({
    name: {type: String},
    position: {type: String},
    office: {type: String},
    saraly: {type: Number}
});

module.exports = mongoose.model('Employee', employeeSchema);
