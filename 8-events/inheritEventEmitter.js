// 1) Create instance of a class that inherits from EventEmitter.
const EventEmitter = require('events');
class Chat extends EventEmitter {
  constructor(topic) {
    super();
    this.topic = topic;
    this.status = 'inactive';
  }
}
const session = new Chat('Event Loop');

// 2a) Register listener for first occurrence of the begin event.
session.once('begin', () => {
  session.status = 'active';
  console.log(`Chat Session topic: ${session.topic}`);
});

// 2b) Register listener for the send event.
session.on('send', (participant, msg) => {
  if (session.status === 'inactive') { 
    session.emit('error', new Error('Chat is not active'));
  } else {
    console.log(`${participant}: ${msg}`);
  }
});

// 2c) Register listener for first occurrence of the end event.
session.once('end', () => {
  session.status = 'inactive';
  console.log(`Chat Session has ended.`);
});

// 2d) Register listener for the error event.
session.on('error', (err) => {
  console.error(err.message);
});

// 3) Emit events
session.emit('begin'); 
session.emit('send', 'Sheena', 'Can you explain the Event Loop?'); 
session.emit('send', 'Joey', 'Yes'); 
session.emit('send', 'Sheena', 'Will you?'); 
session.emit('send', 'Joey', 'No'); 
session.emit('end');
session.emit('send', 'Sheena', 'I have another question.'); 
