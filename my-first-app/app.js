/// ----- Section 1 -> Node Modular System ----

///  Video no: 1- Introduction
// function hello(name) {
//     console.log("hello " + name);
// }
// hello('Pinki');
// console.log(window);

/// video no: 2 -  Global Object
// Global Object- All the variable and functions that define globally become the properties of window object and window object is a global object in a browser environment and In node we do not have window object that's why if we do window.console.log() we face an error saying 'window is not defined' in node we have global object not window object. and we can access it via global object. the javascript engine prefix this statement with window because that's where the object is defined.
// window.console.log();
// window.setTimeout();
// setInterval();
// clearTimeout();
// clearInterval();

// var message = "";
// console.log(global.message); // output is undefined

/// Video no: 3 - Modules
// In the client side javascript that we run inside browsers when we declare a variable or a function that is added to the global scope. for example i create a function name sayHello() and that function is added to the global scope and its available via the window object. Now there is a problem with this behaviour. In real world application, we often split our js code into multiple files. So it is possible that we have two files and in both those files we define same function called sayHello with exact same name. Because this function is added to the global scope, when we define this function in another file, that new definition is going to override the previous definition. So this is the problem with the global scope. So, in order to build reliable and maintainable application we should avoid defining variables and functions in the global scope. Instead we need modularity we need to create small building blocks or modules  where we define our variables and functions. So two variables and functions with the same name don't override a variable or functions defined somewhere else. They are encapsulated inside of that module.
// Now At the core of Node, we have this concept called Module. So every file in a Node application is considered a module. The variable and functions defined in that file or module are a scope to that file. In OOPS, terms we say they are private, they are not available outside that module. If we want to use a variable or function define in a modeule, outside that module, you need to explicitly export it and make it public. Module object is not a global object it appears to be global but its not global.
// var sayHello = function() {

// }

// console.log(module);

///Video no: 4 - Creating a Module
// I created a new module called logger.js in which i wrote a simple log function and make that function to available to other modules such as we can export that log function in app.js module in the next video.

/// Video no: 5 - Loading a Module
// ./ is used to indicate the current folder.
//  then we add the name of our module which is logger.
// IF the logger was in the sub folder, but had that sub folder here, or if it was in the parent folder we could use ../ so here we are using the relative path to the target module.
// Now this require function returns the object that is exported from the target module.

// jshint is a javascript tool. we can scan all our js code error.
// Sometime instead of exporting an object from a module, we can export only a single function,

// Here logger is an object that's why we are defining it like this:
// const logger = require("./logger").default;

// // console.log(logger);
// logger.log("message");

// Here we only export log function so we can define it like this:
// const log = require("./logger");
// log("message");

/// Video no: 5 - Module Wrapper Function
// Node does not execute our code directly. It always wraps, the code inside each module, in something inside of a function which is called Module Wrapper function.

/// Video no: 6 - Path Module
// Path module is a built-in module in node
// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

/// Video no: 7 - Operating System Module
// there are  OS module through which we can know about operating system.
// const os = require('os');
// console.log(os.platform());
// console.log(os.machine());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.release());
// console.log(os.userInfo());
// console.log(os.totalmem()); // total memory
// console.log(os.freemem()); // free memory

/// Video no: 8- File System Module
// With the use of File System Module we can work with files in Node. Every operation defined here come in two forms, synchronous or blocking and asynchronous or non-blocking

// const fileSystem = require('fs');
// Sunchronous
// const filesSync = fileSystem.readdirSync('./');
// console.log(filesSync);

// Asynchronous
//  fileSystem.readdir('./', function(err,files){
//     if (err) console.log(err);
//     else console.log('Result', files);

// });

// Video no: 9 - Event Module
// An event is basically a signal that indicates that something has happened in our application.
// There is a class in Event Module called EventEmitter

// A listener is a function that will be called when that event is raised. and using emit() we just raise an event but there is no  listener that is interested in that event.

// We can not register listener after calling emit method, nothig would have Because when we call emit() method, this emitter iterates over all the registered listeners and calls them synchronous.
// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// // Register a listener
// emitter.on('messageLogged', function(){
// console.log('Listener called');
// });
// // Raise an event
// emitter.emit('messageLogged'); // emit() method is used to raise an event.

/// Video no: 11 - Extending EventEmitter
//We can pass arguments to the emit() method
// const Logger = require('./logger');
// const logger = new Logger();
// // Register a listener
// logger.on('messageLogged', (arg) => console.log(arg)
// );
// logger.log('message');

///Video no: 12 - HTTP Module
// const http = require('http');
// const server = http.createServer((req,res) => {
// if (req.url === '/') {
//     res.write('HelloWorld');
//     res.end();
// }
// if (req.url === '/api/courses') {
//     res.write(JSON.stringify([1,2,3,4,5]));
//     res.end();
// }
// }); // http.createServer()  has all the functions of EventEmitter

// server.listen(3000);
// console.log('listening on port 3000...');


/// ---- Section 2 -> NODE PACKAGE MANAGER ----

 


