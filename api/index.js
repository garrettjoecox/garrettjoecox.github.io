
const express = require('express');
const path = require('path').join;

const app = express();

app.use(express.static(path(__dirname, '../app')));

app.listen(9000);
