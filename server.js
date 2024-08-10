const express = require('express')
const app = express();
const db =require('./db');
require('dotenv').config(); 

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const xc = require('./models/b');

// import the router filers
const personrouter =require('./router/personrouter');
 //use router
 app.use('/person',personrouter);

// app.post('/ds',)

app.listen(PORT,()=>{
       console.log('listening to 3000')
});
   
   
// app.listen(3000) // port number

