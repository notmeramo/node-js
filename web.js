const http = require('http');
const port =process.env.PORT || 3636;

const server =http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url =='/'){
        res.end('<h1>This is ramo</h1><p>Twinkle twinkle little star...</p>')
    } 
    else if(req.url=='/about'){
        res.end('<h1>This is about ramo</h1><p>Johnny Johnny yes papa...</p>')
    }
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    
})

server.listen(port,()=>{
    console.log('Server is listening on  ',port );
})