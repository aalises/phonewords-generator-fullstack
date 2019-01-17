const express = require('express');
const router = express.Router();
const PhoneWordResource = require('./resources/PhoneWordResource');

router.use('/phonewords', PhoneWordResource);

router.all('/', (req,res) => {
    res.json({"phonewords example": `${req.baseUrl}/phonewords/345`});
});

module.exports = router;

