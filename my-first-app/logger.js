/// Video no: 4 Loading a Module
/// Video no: 11 Extending EventEmitter
// const EventEmitter = require('events');

// const emitter = new EventEmitter(); // it is no longer in use because we are extending EventEmitter class from Logger class
// var url = 'http://mylogger.io/log';


// When we define a function inside a class we don't need this function keyword. Because it become the method of the class
// class Logger extends EventEmitter{
//     log(message) {
//         // Send an HTTP request
//         console.log(message);
    
//         // Raise an event
//         // Because this class extends all the properties of EventEmitter class so there is no need to create object of EventEmitter class we can directly use this.emit()
//         this.emit('messageLogged',{id: 1, url: 'http://'});

//     }
// }
// exporting log function 
// Sometime instead of exporting an object from a module, we can export only a single function, for exapmle in our logger module, we don't necessarily need an object because we have a single method. An object would be useful if we have multiple methods or properties here. But in this case, Instead of exporting an object, we can export a single function. So we can change this exports to the log function.

// module.exports.log = log;

// Changing it to export only log function not an object
// module.exports = log;

// Exporting the Logger class
// module.exports = Logger;