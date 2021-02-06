const express = require('express');

const playerRoutes = require('./routes/get-player');

const app = express();

app.use('/player', playerRoutes);

app.listen(8080);