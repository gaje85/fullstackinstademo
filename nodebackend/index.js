const express = require('express');
const {initialize} = require('./routes/index');

const port = 3000;
const server = express();

server.use(express.json());
initialize(server);

server.listen(port, function () {
  console.log(`Listening on port ${port}`);
});



module.exports = server;
