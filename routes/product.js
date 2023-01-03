const express = require('express');
const router = express.Router();
const mongodb = require('../mongodb');

//save product api
router.post('/', function(req, res){
    mongodb.getDBobject().collection('products').insertOne(req.body, (err, res1)=>{
        if(err)
         res.send(err);
         else
         res.send({
            message: 'Added Successfully'
         });
    })
})

module.exports = router;
