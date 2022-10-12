const express = require('express');
const app = express();

app.all('/', (req, res) => {
    res.send(`<h1>Welcome to the home page</h1>`);
});


app.listen(3000);
console.log('listening to port 3000');