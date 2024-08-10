const mongoose = require('mongoose');

// define mongodb connection url
const mongoURL = 'mongodb://localhost:27017/hotels'

// set up mongoDB connection
mongoose.connect(mongoURL,{
    // useNewUrlParser :true,
    // useUnifiedTopology:true
})

// maintain default connection 
const db = mongoose.connection;

// define event listners
db.on('connected',()=>{
    console.log('connected to mongoDB server');
})
db.on('error',()=>{
    console.log(' mongoDB server error');
})
db.on('disconnected',()=>{
    console.log('disconnectedd to mongoDB server');
});
// export database connection
module.exports=db; 