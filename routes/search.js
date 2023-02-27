const express = require('express');
const router = express.Router();
const mongodb = require('../mongodb');

router.get('/', function(req, res){  
    mongodb.getDBobject().collection('products').find({
        productName: {
            $regex: req.query.searchString,
        }
    }).toArray((err, result)=>{
        if(err)
            res.send(err);
        else{
            
            res.send(result);
        }
    })
})

module.exports = router;
