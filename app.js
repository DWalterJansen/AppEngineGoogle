'use strict';

// [START gae_flex_quickstart]
const express = require('express');
const path = require('path');
const app = express();
var DetectRTC = require('detectrtc');

// Config path
app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
});


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});

// [END gae_flex_quickstart]

module.exports = app;
