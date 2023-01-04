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

//api to fetch product details
router.get('/',function(req, res){
    mongodb.getDBobject().collection('products').find().toArray((err,result)=>{
        console.log("result->",result);
        if(err)
            res.send(err)
            else
            res.send(result)
    })

})

//api to update product details based on product id
router.put('/', function(req, res){
    mongodb.getDBobject().collection('products').find((p)=>{
        res.send({message: 'Put is working'})
    })
})

module.exports = router;
