const express = require('express');
const app = express();

app.all('*', (req, res)=>{
    res.status(200).json({data: 'Hello data'});
})

apiResponse = (res, status, message, data = []) => {
    let response = { status: status, message: message, data };
    res.status(200).json(response);
};

app.listen(3000);
console.log("Server listening on port 3000");