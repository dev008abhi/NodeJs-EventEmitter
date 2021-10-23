const eventEmitter = require("events");
class exampleEventEmitter extends eventEmitter{}

const exampleEmitter = new exampleEventEmitter();
exampleEmitter.on('event',()=>{
  console.log('an event occured');
});

exampleEmitter.emit('event');


// node eventEmitter.js