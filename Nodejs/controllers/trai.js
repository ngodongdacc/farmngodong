const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

var Trai = require('../models/trai');
//var ChuongSev = require('../services/chuongService');

//const assert = require('assert');
//load data Trai 
router.get('/', (req, res)=>{
    Trai.find((err, result) => {
        if(err){
           return console.log('lỗi load dữ liệu'+ JSON.stringify(err,undefined, 2));
        }else{
            res.send(result);
        }
    });
})


// find data Trai
router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return console.log('không tìm thấy id: ' + req.params.id);
    }else{
        Trai.findById(req.params.id, (err, result)=> {
            if(err){
                return console.log('lỗi khi tìm ' + JSON.stringify(err,undefined, 2));
            }else{
                res.send(result);
            }
        });
    }
} )

// create Trai
router.post('/', (req,res) => {

    var trai = new Trai({
        tenTrai: req.body.tenTrai,
        moTa: req.body.moTa,
        ghiChu: req.body.ghiChu
    });

    trai.save( (err, result) =>{
        if(err){
            return console.log('lỗi save' + JSON.stringify(err, undefined, 2));

        }else{
            res.send(result);
        }
    })

})

// update data Trai
router.put('/:id', (req,res)=>{
    if(!ObjectId.isValid){
        return res.status(400).send('không tìm thấy id: '+ req.params.id);
    }else {
        var trai = {
            tenTrai: req.body.tenTrai,
            chuong_ids: req.body.chuong_ids,
            ghiChu: req.body.ghiChu,
            moTa: req.body.moTa
        };
    
        if(trai.tenTrai ==""){         
            res.json({message: "Tên trại không được trống", success: false});        
       }else if(trai.chuong_ids =="") {
           res.json({message: "chuồng id không được trống", success: false});      
       }else{
           Trai.findByIdAndUpdate(req.params.id,{$set: trai}, {new: true}, (err,result)=>{
               if(err){
                   return console.log('lỗi khi Update' + JSON.stringify(err, undefined, 2));
               }else{
                   res.send(result);
               }
           });
       }
    }
    
});

// delete data Trai
router.delete('/:id', (req, res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('không tìm thấy id');
    }else{
        Trai.findByIdAndRemove(req.params.id, (err, result)=>{
            if(err){
              return  console.log('lỗi khi xóa ' + err+ JSON.stringify(err, undefined, 2));
            }else{
                res.send(result);
            }
        });
    }
});

//-------------------------------------------------------------./// =======================================================

// // post data chuong
// router.post('/days/:id', (req,res) => {
//      var day = {
//         tenDay: "day5",
//         chuong: [],
//         moTa: "day bo sinh san",
//         ghiChu: ""
//     }

//     Trai.findById({_id: req.params.id}, (err,record) =>{
//         record.day.lenght
//         record.day.push(day);
//         record.save((err, result) => {
//             if(err){
//                 return console.log(`loi them day vao trai ${JSON.stringify(err, undefined,2)}`);
//             }else{
//                 res.send(result);
//             }
//         });
        
//     });
// });

// // delete day
// router.delete('/days/:id', (req,res) => {
   
//     Trai.findById({_id: req.params.id}, (err,record) =>{  
        
//        record.day.remove({_id: ObjectId("5b61fafd244ad91fbc7f7ae4")});
//         record.save((err, result) => {
//             if(err){
//                 return console.log(`loi xoa day trong trai ${JSON.stringify(err, undefined,2)}`);
//             }else{
//                 res.send(result);
//             }
//         });
        
//     });
// });

// // tai du lieu day
// router.get('/days/:id', (req,res) => {
   
//     Trai.findById({_id: req.params.id}, (err,record) =>{
//         console.log(record.day.lenght);
//         if(err){
//             return console.log(`loi: ${err}`)
//         }else{
//             res.send(record.day);
//         }
        
//     });
// });

// // update days
// router.get('/day/:id', (req, res) => {
//     Trai.findById(req.params.id, (err, record) =>{
//         var day = {
//            // _id: ObjectId('5b61f82b35798d1ea496014e'),
//             "chuong": [],
//             "_id": "5b61f82b35798d1ea496014e",
//             "tenDay": "day5",
//             "moTa": "day bo ",
//             "ghiChu": ""
//         }
        
//         DD = record.day;

//         // DD.findByIdAndUpdate({_id: ObjectId('5b61f82b35798d1ea496014e')}, {$set: day}, (err, doc) =>{
//         //     res.send(record);
//         // })
//         DD.find( (err, doc) =>{
//             res.send(doc);
//         })

        //res.send(DD[0]);
              
  //  })
//})

module.exports = router;

