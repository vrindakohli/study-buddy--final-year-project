const express = require('express')
const app = express()
const PORT=7000
const path = require('path');
app.use(express.static(__dirname + '/assets'))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.listen(PORT, () => console.log(` Started and listening on port ${PORT}!`));
