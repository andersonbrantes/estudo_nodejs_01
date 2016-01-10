
var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter;
var users = [], chatlog = [];

chat.on('message', function(message){
  chatlog.push(message);
});

chat.on('join', function(nickname){
  users.push(nickname);
});


// Event Emitters
chat.emit('join', 'Anderson');
chat.emit('message', 'Testando mensagem');
