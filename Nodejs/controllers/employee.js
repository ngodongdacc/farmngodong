const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

var Employee = require('../models/employee');

// load data
router.get('/', (req, res) => {
    Employee.find((err, doc)=> {
        if(err){
            return console.log('lỗi load dữ liệu', + JSON.stringify(err, undefined, 2));
        }else{
            res.send(doc);
        }
    });
});

// create data
router.post('/', (req,res)=>{

    var emp = new Employee( {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        saraly: req.body.saraly
    });

    emp.save(  function(err,result){
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
        Employee.findById(req.params.id, (err,result)=>{
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

        var emp = {
            name: req.body.name,
            position: req.body.position,
            office: req.body.office,
            saraly: req.body.saraly,
        };

        Employee.findByIdAndUpdate(req.params.id,{$set: emp},{new: true}, (err, result)=>{
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
        Employee.findByIdAndRemove(req.params.id, (err, result)=>{
            if(err){
                return console.log('lỗi khi xóa', + JSON.stringify(err, undefined,2));
            }else{
                res.send(result);
            }
        })
    }
});

module.exports = router;

