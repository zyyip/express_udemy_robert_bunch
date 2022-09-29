const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    
    if(req.url.includes('css')){
        res.writeHead(200, { 'content-type': 'text/css' })
        const styles = fs.readFileSync(req.url.slice(1));
        res.write(styles);
        res.end();
    }
    else{
        res.writeHead(200, { 'content-type': 'text/html' })
        const homePageHTML = fs.readFileSync('index.html')
        res.write(homePageHTML);
        res.end();
    }
    
})

server.listen(process.env.PORT || 3000)
