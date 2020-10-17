const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.json({ message: 'Welcome to Blog App' }));

require('./routes/post')(app);

module.exports = app;
