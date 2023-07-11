// Import the EventEmitter class from the events module.
const EventEmitter = require('events');

// Create an instance of the EventEmitter class.
const emitter = new EventEmitter();

// Listen for the event, then execute a callback function.
emitter.on('logIt', (msg) => {
  console.log(msg);
});

// Emit event, passing in a message as the second argument.
emitter.emit('logIt', 'Log message 1');
emitter.emit('logIt', 'Log message 2');
