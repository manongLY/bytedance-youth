const http = require('http')
http.createServer((req,res)=>{
    console.log('cookie:',req.headers.cookie)
    res.setHeader('Set-Cookie',`abc=123;`)
    res.end('Hello')
}).listen(3003)