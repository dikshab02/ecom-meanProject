const express = require('express');
const router = express.Router();
const mongodb = require('../mongodb');

//myOrdersModule
router.get('/',function(req,res){
    // let userId = req.query.userId;
    // console.log('userId = ', userId);
    mongodb.getDBobject().collection('orders').find({createdBy: req.query.userId}).toArray((err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})

//All orders module
router.get('/getAllOrders',function(req,res){
    mongodb.getDBobject().collection('orders').find().toArray((err,result)=>{
        if(err)
            res.send(err)
            else
            res.send(result)
    })
})

module.exports = router;
