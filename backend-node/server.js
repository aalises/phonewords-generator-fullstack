const express = require('express');
const app = express();     
const indexRouter = require('./api/index');
const { version, prefix, port } = require('./config');
const portApp = process.env.PORT || port;   


app.use(`${prefix}/${version}`, indexRouter); 

app.listen(portApp);
console.log('The server is listening on port:' + portApp);

module.exports = app