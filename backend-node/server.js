const express = require('express');
const app = express();     
const port = process.env.PORT || 5000;   
const indexRouter = require('./api/index');
const { version, prefix } = require('./config');

app.use(`${prefix}/${version}`, indexRouter); 

app.listen(port);
console.log('The server is listening on port:' + port);
