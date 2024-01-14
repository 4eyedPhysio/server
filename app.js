const http = require(`http`);
const serv = http.createServer((Req,Res)=>{
    Res.end(`hollo Michael, i'm from the server`);
    console.log("michael");
})
serv.listen(8000,`127.0.0.1`, ()=>{
    console.log("server started");
})
