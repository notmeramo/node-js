const { response } = require("express");
const http =require("http");
let server=http.createServer(function(request,response){
    if (request.url =="/"){
        response.write("This is home page");
        console.log("the user is in homepage")
    }
    else if(request.url=="/about"){
        response.write("this is about page");
        console.log("the user is in about page")
    }
    else if(request.url=="/contact"){
        response.write("<h1>this is contact page</h1><hr>");
        console.log("the user is in contact page")
    }
    else{
        response.write("404 error not found")
    }
    response.end();
});
server.on("connection",function(){
    console.log("New connection");
});
server.listen(3001,function(){
    console.log("server is running")
});