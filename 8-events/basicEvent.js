// Import the EventEmitter class from the events module.
const EventEmitter = require('events');

// Create an instance of the EventEmitter class.
const emitter = new EventEmitter();

// Listen for the event, then execute a callback function.
emitter.on('logIt', () => {
  console.log('LogIt event occurred');
});

// Emit the logIt event
emitter.emit('logIt');
