var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var traiSchema = require('../models/trai').traiSchema;

var vatNuoiSchema = new Schema({
    // -- them moi ---
    maVatNuoi : {type: String, required: true, unique: true},
    ngaySinh: {type: Date},
    ngayNhapChuong: {type: Date},
    gioiTinh: {type: Boolean},

    // vi tri
    tenTrai: {type: String},
    tenDay: {type: String},//{type: String, required: true}
    tenChuong:{type: String},// {type: String, required: true},

    phamGiong: {type: String},// {type: String, required: true},
    loai: {type: String},// {type: String, required: true},
    sucKhoe: {type: String},//{type: String, required: true},
    ghiChu: {type: String},

    // -- cap nhat --
    me: {type: String},
    tinhCha: {type:String},
    giaMua: {type: String},
    xuatXu: {type: String}
});

module.exports = mongoose.model('VatNuoi', vatNuoiSchema);