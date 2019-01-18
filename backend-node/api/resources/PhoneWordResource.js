const express = require('express');
const router = express.Router();
const { json, validate, errorMessages } = require('../models/PhoneWordModel');
const { compute_phonewords } = require('../functions/compute_phonewords');

router.all('/:number',(req,res) => {
    let responseData = {};

    if(validate(req.params.number)){
        phonewords = compute_phonewords(req.params.number);
        responseData = json(true, phonewords, '');
    }else{
        responseData = json(false, [], errorMessages.notValid);
    }

    res.statusCode = 200;
    res.set('Access-Control-Allow-Origin', '*')
    res.json(responseData)
});

module.exports = router;

