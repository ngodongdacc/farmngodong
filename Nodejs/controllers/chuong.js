const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


var Chuong = require('../models/chuong').Chuong;
var Days = require('../models/day').Days;
// ======================== chuồng tự động trong từng dãy ==========================

// lấy dữ liệu trong từng dãy-trại
router.get('/day/:tenDay/trai/:tenTrai', (req,res) =>{
   // console.log(req.params.tenDay);
   // console.log(req.params.tenTrai);
    Chuong.find({ tenTrai: req.params.tenTrai, tenDay: req.params.tenDay }, (err, chuong) =>{
        if(err){
            return console.log('lỗi tìm dữ liệu'+ JSON.stringify(err,undefined,2));
        }else{
            res.send(chuong);
        }
    })
});

//  thêm chuông tự động trong từng dãy
router.post('/day', (req, res) => {
    var chuong = new Chuong({
        tenTrai : req.tenTrai,
        tenDay : req.tenDay,
        tenChuong : req.body.tenChuong,
        moTa : req.body.moTa
    });

    chuong.save( (err, chuong) => {
        if(err){
            return console.log('lỗi khi save ' + JSON.stringify(err, undefined,2));
        }else{
            res.send(chuong);
        }
    })
})

// ====================== ======================== ===================== ===============================

// load data
router.get('/', (req, res) => {
    Chuong.find((err, doc)=> {
        if(err){
            return console.log('lỗi load dữ liệu', + JSON.stringify(err, undefined, 2));
        }else{
            res.send(doc);
        }
    });
});

// create data
router.post('/', (req,res)=>{

    var chuong = new Chuong({

        tenChuong: req.body.tenChuong,
        tenDay: req.body.tenDay,
        moTa: req.body.moTa,
        tenTrai: req.body.tenTrai
    });

    chuong.save(  function(err,result){
        if(!err){
            res.send(result);
        }else{
            return console.log('lỗi khi thêm mới' + JSON.stringify(err, undefined,2));
        }
    });
});

// find data
router.get('/:id', (req,res)=>{
    if(ObjectId.isValid(req.params.id) == true){
        Chuong.findById(req.params.id, (err,result)=>{
            if(!err){
                res.send(result);
            }else{
                return console.log('lỗi tìm dữ liệu' + JSON.stringify(err, undefined, 2));
            }
        })
    }else{
        return console.log('hồ sơ của id không tồn tại');
    }
});

// update data
router.put('/:id', (req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`không tìm thấy id ${req.params.id}`)
    }

        var chuong = {
            tenChuong: req.body.tenChuong,
            moTa: req.body.moTa,
            tenTrai: req.body.tenTrai,
            tenDay: req.body.tenDay
        };

        Chuong.findByIdAndUpdate(req.params.id,{$set: chuong},{new: true}, (err, result)=>{
            if(err){
                return console.log('lỗi khi update' + err);
            }else{
                res.send(result);
            }
        });    
})

// delete data
router.delete('/:id', (req, res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('không tìm thấy id');
    }else{
        Chuong.findByIdAndRemove(req.params.id, (err, result)=>{
            if(err){
                return console.log('lỗi khi xóa', + JSON.stringify(err, undefined,2));
            }else{
                res.send(result);
            }
        })
    }
});

module.exports = router;

