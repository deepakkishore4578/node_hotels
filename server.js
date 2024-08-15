const express = require('express')
const app = express();
const db =require('./db');
require('dotenv').config(); 
// const person = require('./models/person')
const passport = require('./auth');
// const localstrategy = require('passport-local').Strategy;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// const xc = require('./models/b');

const logrequest = (req,res,next)=>{
       console.log(`${new Date().toLocaleString()} request made to : ${req.originalUrl}`);
       next();
} 
// app.use(logrequest);

 app.use(passport.initialize());
 const localauth = passport.authenticate('local',{session:false});
 app.get('/',function(req,res){
       res.send('welcome to hotel');
 })
// import the router filers
const personrouter =require('./router/personrouter'); 
 //use router
app.use('/person',localauth,personrouter);

app.listen(PORT,()=>{
       console.log('listening to 3000')
});
   
   
// app.listen(3000) // port number

