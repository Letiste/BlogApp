const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.json({ message: 'Welcome to Blog App' }));

const directoryPath = path.join(__dirname, 'routes');

// Automatically add routes to the app
fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory : ' + err);
  }
  files.forEach((file) => {
    require(`./routes/${file}`)(app);
  });
});

module.exports = app;
