const mongoose = require('mongoose');
require('dotenv').config();
// define mongodb connection url
// const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;
// set up mongoDB connection
mongoose.connect(mongoURL,{
    // useNewUrlParser :true,
    // useUnifiedTopology:true
})   

// maintain default connection deepak 
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