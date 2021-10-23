

// arbitrary number of arguments can be passed from emitters while
// emitting the event and listener can catch those arguments
const eventEmitter = require("events");
class exampleEventEmitter extends eventEmitter{}

const exampleEmitter = new exampleEventEmitter();
exampleEmitter.on('event',(a,b)=>{
  console.log(`an event occured with arguments : ${a} and ${b}`);
});

exampleEmitter.emit('event',"a","b");
exampleEmitter.emit('event',["a","b"]);

// node passingArgumentsToListeners/eventEmitterPassArguments.js