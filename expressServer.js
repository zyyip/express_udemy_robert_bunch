const express = require('express');
const app = express();
const path = require('path');

//Server up static files using only 1 line
app.use(express.static('public'));


function validateUser(req,res,next) {
    res.locals.validated = true;
    console.log("User has been validated");
    next();
}

app.use(validateUser);

app.all('/', (req, res) => {
    // res.send(`<h1>Welcome to the home page</h1>`);
    console.log(path.join(__dirname + "/index.html"));
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.all('*', (req,res) => {
    res.send("<h1>Sorry, the page does not exists!</h1>")
})
// app.all('*', (req, res)=>{
//     res.status(200).json({data: 'Hello data'});
// })

// apiResponse = (res, status, message, data = []) => {
//     let response = { status: status, message: message, data };
//     res.status(200).json(response);
// };

app.listen(3000);
console.log("Server listening on port 3000");