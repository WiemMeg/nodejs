const http=require('http')
const fs=require('fs')

fs.writeFile('welcome.txt','hello node2',(err)=>{
if (err) {console.log(err)}
else {  console.log('file was write')}
})


const server=http.createServer(function(req,res){
    res.setHeader('content-type','text/plain')
    res.end('test',(err,data)=>{
    if (err) {
      res.end(err.message);
    } else {
      res.end(data);
    }})


})

server.listen(4000,()=>{
    console.log("listening on port 4000")
})
