const path = require('path');
const express = require('express');
var enforce = require('express-sslify');
const app = express();

app.use(enforce.HTTPS());

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8000);
