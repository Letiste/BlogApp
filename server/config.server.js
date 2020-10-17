const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000', 'http://172.30.136.227:3000'],
};

app.use(cors(corsOptions));

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
