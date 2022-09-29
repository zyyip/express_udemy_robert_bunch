const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req);
    // apiResponse = ((res, status, message, data) => {
    //     let response = { status: status, message: message, data };
    //     res.status(200).json(response);
    // });

    // apiResponse(200, 'Hello', {'data': 'Hello data'});
    
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>Hello, World!</h1>');
    res.end();
});

server.listen(3000);