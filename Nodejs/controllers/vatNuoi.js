const express = require('express');
var router  = express.Router();
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var VatNuoi = require('../models/vatNuoi');

// ===================== xử lý có phụ thuộc ===================

// lấy dữ liệu phụ thuộc vào trại-dãy-chuồng
router.get('/:tenTrai/:tenDay/:tenChuong', (req,res) => { 
    VatNuoi.find({ 
        tenTrai: req.params.tenTrai,
        tenDay: req.params.tenDay,
        tenChuong: req.params.tenChuong,  
    }, (err, result) => { 
        if(err){ 
            return JSON.stringify(err,undefined,2);
        }else { 
            res.send(result);
        }
    });
})


// ======================= xử lý không phụ thuộc  ====================
router.get('/', (req, res) => {
    VatNuoi.find( (err, result) => {
        if(err){
            return console.log("loi tai du lieu: "  + JSON.stringify(err, undefined, 2));
        }else{
            res.send(result);
        }
    });
});

router.get('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`khong tim thay id: ${req.params.id}`);
    }else{
        VatNuoi.findById(req.params.id, (err,result)=>{
            if(err){
                return console.log(`loi khi tim ${JSON.stringify(err, undefined, 2)}`);
            }else{
                res.send(result);
            }
        });
    }
});

router.post('/', (req,res) => {
    var vatnuoi = new VatNuoi({
        maVatNuoi : req.body.maVatNuoi,
        ngaySinh: req.body.ngaySinh,
        ngayNhapChuong: req.body.ngayNhapChuong,
        gioiTinh: req.body.gioiTinh,
        tenChuong: req.body.tenChuong,
        tenDay: req.body.tenDay,
        tenTrai: req.body.tenTrai,
        // trai: {type: String, required: true},
        // day: {type: String, required: true},
        // chuong: {type: String, required: true},
        // phamGiong: {type: String, required: true},
        // loai: {type: String, required: true},
        // sucKhoe: {type: String, required: true},
        // ghiChu: {type: String},
    });

    vatnuoi.save( (err, result) => {
        if(err){
            return console.log(`loi save: ${JSON.stringify(err, undefined, 2)}`);
        }else{
            res.send(result);
        }
    })
});

router.put('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('khong tim thay id: ' + req.params.id);
    }else{
        var vatnuoi = new VatNuoi({
            _id: ObjectId(req.params.id),
            maVatNuoi : req.body.maVatNuoi,
            ngaySinh: req.body.ngaySinh,
            ngayNhapChuong: req.body.ngayNhapChuong,
            gioiTinh: req.body.gioiTinh,
            tenChuong: req.body.tenChuong,
            tenDay: req.body.tenDay,
            tenTrai: req.body.tenTrai,
            // trai: {type: String, required: true},
            // day: {type: String, required: true},
            // chuong: {type: String, required: true},
            // phamGiong: {type: String, required: true},
            // loai: {type: String, required: true},
            // sucKhoe: {type: String, required: true},
            // ghiChu: {type: String},
            me: req.body.me
            // tinhCha: {type:String},
            // giaMua: {type: String},
            // xuatXu: {type: String}

        })

        VatNuoi.findByIdAndUpdate(vatnuoi._id,{$set: vatnuoi}, {new: true}, (err, result) => {
            if(err){
                return console.log(`loi khi update: ${JSON.stringify(err, undefined, 2)} `);
            }else{
                res.send(result);
            }
        })
    }
});

// delete vatnuoi
router.delete('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`khong tim thay id: ${req.params.id}`);
    }else{
        VatNuoi.findByIdAndRemove(req.params.id, (err, result) => {
            if(err){
                return console.log(`loi khi delete vat nuoi: ${JSON.stringify(err, undefined, 2)}`);
            }else{
                res.send(result);
            }
        });
    }
});
module.exports = router;