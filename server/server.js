const express = require('express');
const request = require('request');
const app = express();

let counter = 0;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/ping', (req, res) => {
    counter++;
    request('http://client:3000/ping', (error, response, body) => {
        res.send(body);
    });
});

app.get('/counter', (req, res) => {
    res.send('Counter: ' + counter);
});

app.listen(9000, () => {
    console.log('Example app listening on port 9000!');
});


