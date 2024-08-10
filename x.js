
const express = require('express')
const app = express()

app.get('/', function (req, res) {  // '/' is endpoint
  res.send('Hello World')
})

app.get('/menu', function (req, res) {  // '/' is endpoint
  res.send('give menu')
})
app.get('/menu2', function (req, res) {  // '/' is endpoint
  res.send('give menu card 2')
})

app.listen(3000,()=>{
       console.log('listening to 3000')
})
   
   
// app.listen(3000) // port number

