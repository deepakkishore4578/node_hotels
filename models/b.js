const mongoose = require('mongoose');

const xs = new mongoose.Schema({
     name:{
         type:String
     }
})

const x = mongoose.model('x',xs);
module.exports = x;