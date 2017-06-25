/*var http=require('http');
var fs=require('fs');

fs.readFile('./index.html',function(err,html)
{
  if(err)
    throw err ;


  http.createServer(function(req,res){
    res.writeHeader(200,{"Content-Type":"text/html"});
    res.write(html);
    res.end();
  }).listen(8000);
});*/
var connect=require('connect');
var serveStatic=require('serve-static');
connect().use(serveStatic(__dirname)).listen(8000,function(){
  console.log('Server running on 8000...');
});
