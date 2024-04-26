/// ---- Building RESTful API's Using Express --> Section 3 ----

/// Video no: 1 -  Introduction
// Express is a fast and light weight framework for buildung web application.


/// Video no: 2 - RESTful Services
// REST is a short form of --> Representational State Transfer


/// Video no: 3 - Introducing Express
//

/// Video no: 4 - Your first Web Server
 const express = require('express');

const app = express();

// app.get();
// app.post();
// app.put();
// app.delete();

app.get('/', (req,res)=> {
    res.send("helloworld!!!");
    res.end();
})
app.get('/api/courses', (req,res)=>{
res.send([1,2,3]);
res.end();
})

app.listen(3000, ()=>{
    console.log('listening on port 3000...');
})


/// Video no: 5 - Nodemon
//installing nodemon

//Video no: 6 - Environment Variables

