const { request, response } = require('express');
const date = require('../getDate.js');

exports.getMainPage = (request, response)=>{
    response.send('Hello, World!');
}

exports.getData = 

exports.getWeekday