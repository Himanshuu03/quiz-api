const express = require('express');
const history = require('./history');
const geography = require('./geography');
const scienceQuestions = require('./scienceQuestions');
const app = express();
const port = 8080;

app.get('/history', (req, res) => {
    res.send(history);
});

app.get('/geography', (req, res) => {
    res.send(geography);
});

app.get('/scienceQuestions', (req, res) => {
    res.send(scienceQuestions);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})