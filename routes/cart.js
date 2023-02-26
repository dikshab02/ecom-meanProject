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


module.exports = router;
