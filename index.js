const express = require('express');
const cors = require('cors');
const app = express();
const mongo = require('./mongodb');
app.use(cors());

//to connect mongodb database
mongo.connectToServer(err=>{
    if(err)
    console.log('DB connection error = ', err);
    else
    console.log('DB connection is successful');
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',function(req,res){
    res.send('ecom-mean api working..')
})

app.use('/user', require('./routes/user')); //to connect user child route
app.use('/prod', require('./routes/product'));// to connect product child route
app.use('/cart', require('./routes/cart')); //to connect cart child route


var server = app.listen(1411,function(){
    console.log('app started');
})