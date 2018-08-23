const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

var Day = require('../models/day');
//var ChuongSev = require('../services/chuongService');

//const assert = require('assert');
//load data Day 
router.get('/', (req, res)=>{
    Day.find((err, result) => {
        if(err){
           return console.log('lỗi load dữ liệu'+ JSON.stringify(err,undefined, 2));
        }else{
            res.send(result);
        }
    });
})

// load dư liệu dãy trong từng trại
router.get('/trais/:id', (req,res) =>{
    Day.find({tenTrai: req.params.id}, (err,result)=>{
        if(err){
            return console.log('lỗi khi tìm dãy trong trại id: ' + JSON.stringify(err, undefined, 2));
        }else{
            res.send(result);
        }
    })
});
// find data Day
router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return console.log('không tìm thấy id: ' + req.params.id);
    }else{
        Day.findById(req.params.id, (err, result)=> {
            if(err){
                return console.log('lỗi khi tìm ' + JSON.stringify(err,undefined, 2));
            }else{
                res.send(result);
            }
        });
    }
} )

// create dãy vào trong trại
router.post('/trais/:id', (req,res) =>{
    
})

// create Day
router.post('/:id', (req,res) => {

    var day = new Day({
        tenDay: req.body.tenDay,
        tenTrai: req.params.id,
        moTa: req.body.moTa,
        ghiChu: req.body.ghiChu
    });

    day.save( (err, result) =>{
        if(err){
            return console.log('lỗi save' + JSON.stringify(err, undefined, 2));

        }else{
            res.send(result);
        }
    })

})

// update data day
router.put('/:id', (req,res)=>{
    if(!ObjectId.isValid){
        return res.status(400).send('không tìm thấy id: '+ req.params.id);
    }else {
        var day = {
            tenDay: req.body.tenDay,
            ghiChu: req.body.ghiChu,
            moTa: req.body.moTa
        };
    
        if(day.tenDay ==""){         
            res.json({message: "Tên dãy không được trống", success: false});        
       }else{
           Day.findByIdAndUpdate(req.params.id,{$set: day}, {new: true}, (err,result)=>{
               if(err){
                   return console.log('lỗi khi Update dãy' + JSON.stringify(err, undefined, 2));
               }else{
                   res.send(result);
               }
           });
       }
    }
    
});

// delete data Day
router.delete('/:id', (req, res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('không tìm thấy id');
    }else{
        Day.findByIdAndRemove(req.params.id, (err, result)=>{
            if(err){
              return  console.log('lỗi khi xóa dãy' + err+ JSON.stringify(err, undefined, 2));
            }else{
                res.send(result);
            }
        });
    }
});


module.exports = router;

