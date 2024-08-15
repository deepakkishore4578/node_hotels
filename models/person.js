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
    email:{
        type:String,
        unique:true
    },
    mobile:{
        type:String,
        unique:true
        
        // required:true
    },
    address:{
        type:String,
        // required:true
    },
    salary:{
        type:Number
    },
    username:{
        unique:true,
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }
})

// create person model
const person = mongoose.model('Person',personSchema);
module.exports = person;