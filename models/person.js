const mongoose = require('mongoose');

// define preson schema
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    age:{
        type:Number,
        // required:true
    },
    work:{
        type:String,
        enum:["chef","waiter","c"],
        // required:true
    },
    mobile:{
        type:String,
        // required:true
    },
    address:{
        type:String,
        // required:true
    },
    salary:{
        type:Number
    }
})

// create person model
const person = mongoose.model('Person',personSchema);
module.exports = person;