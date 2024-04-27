/// ---- Building RESTful API's Using Express --> Section 3 ----

/// Video no: 1 -  Introduction
// Express is a fast and light weight framework for buildung web application.

/// Video no: 2 - RESTful Services
// REST is a short form of --> Representational State Transfer

/// Video no: 3 - Introducing Express
//

/// Video no: 4 - Your first Web Server
//  const express = require('express');

// const app = express();

// app.get();
// app.post();
// app.put();
// app.delete();

// app.get('/', (req,res)=> {
//     res.send("helloworld!!!");
//     res.end();
// })
// app.get('/api/courses', (req,res)=>{
// res.send([1,2,3]);
// res.end();
// })

// const port = process.env.PORT || 3000;
// app.listen(port, ()=>{
//     console.log(`listening on port ${port}...`);
// });

/// Video no: 5 - Nodemon
//installing nodemon

//Video no: 6 - Environment Variables
//An environment variable is basically a variable that is part of the environment in which a process run. its value is set outside this aplication.
//we need to read the value of that port environment variable and to do that we are using the process object. It is a global object called process this object has a property called env short form of environment variable and after that we use PORT. And now we replace static port number which is 3000 to
// port = process.env.PORT || 3000; in the above code.
// to set an environment variable we use -->
// In command Prompt: set PORT=5000
// In Poershell: $env:PORT=5000
// In Bash (Windows): export PORT=5000;

//Video no: 7 - Route Parameters
// Route creation: We are creating a route to get a single course video.
// Query String Parameters ---> we use query string parameters to provide additional data for our backend services. We use route parameter for essential or required values, whereas we use query string parameters for anything that is optional.
//to read query parameters from a route we use --> req.query

// app.get('/', (req,res)=> {
//     res.send("helloworld!!!");
//     res.end();
// })
// app.get('/api/courses', (req,res)=>{
// res.send([1,2,3]);
// res.end();
// })

// app.get('/api/posts/:year/:month', (req,res)=>{
// res.send(req.query);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, ()=>{
//     console.log(`listening on port ${port}...`);
// });

// Video no: 8 - Handling GET Requests
// request.params.id return a string and to compare both we need to parsethis scrren into and integer.

const express = require("express");
const Joi = require("joi");

const app = express();

//
app.use(express.json());

const courses = [
  {
    id: 1,
    name: "course1",
  },
  {
    id: 2,
    name: "course2",
  },
  {
    id: 3,
    name: "course3",
  },
];

console.log(courses);

app.get("/", (req, res) => {
  res.send("helloworld!!!");
  res.end();
});
app.get("/api/courses", (req, res) => {
  res.send(courses);
  res.end();
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
   return res.status(404).send("the course with the givenn id was not found");
  res.send(course);
});

/// Video no: 9 - Handling HTTP POST Request
//in this post method we need to read the course object that should be in the body of the request, use these propertiees to create a new course object, and then add that course object to our coursesa array.

app.post("/api/courses", (req, res) => {
  /// Video no: 10 -  Calling EndPoints Using Postman
  /// Video no: 11 - Input Validation using joi
  //joi returns a class
  //with joi first we need to define schema. a schema is defines the shape of our object. What properties do we have in an object? What is the type of each property, do we have an email, do we have a string? What are the minimum and maximum number of characters? Do we have number? This is the job of schema
  // Defining a schema
  //Joi.validate is not a function because it is removed from Joi version 16 that is why i used schema.validation here and there is a change in writing schema object.
  const { error } = validateCourse(req.body); // result.error
  // If invalid, return 400 - Bad Request
  if (error) 
    return res.status(400).send(result.error);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

///Video no: 12 - Handling HTTP PUT Request
app.put("/api/courses/:id", (req, res) => {
  //   Look up the Course
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  // If not existing, return 404
  if (!course) return res.status(404).send("the course with the givenn id was not found");

  // Validating
  // const result = validateCourse(req.body); //we can use const {error} = validateCourse(req.body) in place of this

  const { error } = validateCourse(req.body); // result.error
  // If invalid, return 400 - Bad Request
  if (error) return res.status(400).send(result.error);

  // Update Course
  course.name = req.body.name;
  // Return the updated course
  res.send(course);
});

/// Video no: 13 - Handling HTTP Delete Request
app.delete("/api/courses/:id", (req, res) => {
  // Look up the course
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  // If not existing, return 404
  if (!course)
   return res.status(404).send("the course with the givenn id was not found");

  // Delete
  const index = courses.indexOf[course];
  courses.splice(index, 1);
  // Return deleted course
  res.send(course);
});
function validateCourse(course) {
  const schema = Joi.object().keys({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(course);
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
