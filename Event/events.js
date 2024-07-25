const { EventEmitter } = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('event', (msg='none') => {
  console.log(`Event triggered: ${msg}`);
});
customEmitter.on('event', () => {
    console.log(`Event triggered end`);
  });

customEmitter.emit('event', 'This is an event');