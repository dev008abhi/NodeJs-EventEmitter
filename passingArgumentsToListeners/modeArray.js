// arbitrary number of arguments can be passed from emitters while
// emitting the event and listener can catch those arguments
const eventEmitter = require("events");
class exampleEventEmitter extends eventEmitter{}

const exampleEmitter = new exampleEventEmitter();
exampleEmitter.on('event',(args)=>{
  console.log(`an event occured with arguments : ${JSON.stringify(args)}`);
});

exampleEmitter.emit('event',["a","b"]);

// node passingArgumentsToListeners/modeArray.js