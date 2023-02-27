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
       // console.log("result->",result);
        if(err)
            res.send(err)
            else
            res.send(result)
    })
})

//api to update product details based on product id
router.put('/', function(req, res){
        var filterParams = { productId: req.body.productId };
        delete req.body._id;
        console.log('data = ', req.body)
        var setData = {$set: req.body};
        mongodb.getDBobject().collection('products').updateOne(filterParams, setData, (err,res1)=>{
            console.log('err = ', err)
            console.log('res1 = ', res1)
            if(err)
                res.json({error:err})
            if(res1)
                res.json("Updated successfully");
        })
})

module.exports = router;
