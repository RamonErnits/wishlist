const express = require('express');
const date = require('../getDate.js');
const router = express.Router();








router.get('/',(request,response)=>{
    response.send('Hello, world!')
});

router.get('/getdate',(req,res)=>{//req - request , res-response
    let today = date.getDate();
    res.send(today);
})

router.get('/weekday',(req,res)=>{
    let weekday = date.getWeekDay();
    res.send(weekday);
})

router.get('*',(req,res)=>{
    res.sendFile(__dirname+"/404.html")
});

module.express = router;