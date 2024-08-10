const express = require('express')
const app = express();
const db =require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const xc = require('./models/b');

// import the router filers
const personrouter =require('./router/personrouter');
 //use router
 app.use('/person',personrouter);

// app.post('/ds',)


app.listen(3000,()=>{
       console.log('listening to 3000')
});
   
   
// app.listen(3000) // port number

