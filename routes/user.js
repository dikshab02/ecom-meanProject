const express = require('express');
const router = express.Router();
const mongodb = require('../mongodb');

//logged in user api
router.post('/login',function(req,res){
    // res.send('user api working');
    console.log('req.body = ', req.body)
    mongodb.getDBobject().collection('users').find({
        email: req.body.email,
        password: req.body.password
    }).toArray((err, result)=>
    {
        console.log("pwd->",req.body.password);
        if(err)
            res.send(err);
            else
            res.send(result);
    })
})




module.exports = router;