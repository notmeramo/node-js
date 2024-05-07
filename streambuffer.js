const fs=require("fs");

let readstream =fs.createReadStream("./databuffer.txt")
readstream.on("data",function(buffer){
console.log(buffer);
});