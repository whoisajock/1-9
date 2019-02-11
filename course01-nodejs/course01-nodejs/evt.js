const EventEmitter = require('events');
const myEmitter = new EventEmitter();
let foo = (data)=>{
	console.log(data);
}
myEmitter.on("data",foo);
//myEmitter.removeListener("data",foo);
myEmitter.emit("data","bbb");
myEmitter.emit("data","bbb");
