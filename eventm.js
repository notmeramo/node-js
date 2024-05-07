const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('turn of the motor!');
  setTimeout(()=>{
    console.log('turn of the motor! reminder');
  },3000);
});

console.log("water is runnimg");
myEmitter.emit('waterfull');
console.log("water is still runnimg");
