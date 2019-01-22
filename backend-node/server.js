const express = require('express');
const app = express();     
const indexRouter = require('./api/index');
const { version, prefix, port } = require('./config');
const port = process.env.PORT || port;   


app.use(`${prefix}/${version}`, indexRouter); 

app.listen(port);
console.log('The server is listening on port:' + port);

module.exports = app