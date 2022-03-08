const express = require('express');
const app = express();
app.use(express.static(__dirname + '/frontend'));

app.get('/', async (req, res) => {
    res.sendfile('./frontend/index.html');
});

app.listen(3333, async () => {
    console.log('Started!');
});