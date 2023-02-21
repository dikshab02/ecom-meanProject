const express = require('express');
const router = express.Router();
const mongodb = require('../mongodb');


router.post('/', function(req,res){
    mongodb.getDBobject().collection('orders').insertOne(req.body,(err,res1)=>{
        if(err)
            res.send(err)
        else
            res.send({
                message: 'Added successfully'
            });
    })
    console.log('req.body = ', req.body)
})

router.get('/',function(req,res){
    let userId = req.query.userId;
    console.log('userId = ', userId);
    mongodb.getDBobject().collection('orders').find({createdBy: req.query.userId}).toArray((err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})

module.exports = router;
