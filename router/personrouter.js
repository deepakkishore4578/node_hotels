const express = require('express');
const router = express.Router();
const person = require('./../models/person');
router.get('/signup', async(req, res)=> {  // '/' is endpoint
    try{
      const data = await person.find();
       console.log('data saved');
          res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal serverr error'});
    }
})
  
router.get('/:worktype',async(req,res)=>{
        try{
               const worktype = req.params.worktype;
               if(worktype == 'chef' || worktype == 'waiter' || worktype == 'a'){
                    const response = await person.find({work:worktype});
                    console.log('response fetched');
                    res.status(200).json(response);
               }else{
                    res.status(404).json({error: 'invalid work_type'})
               }
        }catch(err){
             console.log(err);
             res.status(500).json({error:'internal server error'});
        }
})

router.post('/',async(req,res)=>{
     try{
       const data = req.body;
       const newPerson = new person(data);
 
          const respone = await newPerson.save();
          console.log('data saved');
          res.status(200).json(respone);
     }
     catch(err){
            console.log(err);
            res.status(500).json({error:'internal server error'});
     }        
});
router.post('/x',async(req,res)=>{
     try{
       const data = req.body;
       const newPerson = new xc(data);
 
          const respone = await newPerson.save();
          console.log('data saved');
          res.status(200).json(respone);
     }
     catch(err){
            console.log(err);
            res.status(500).json({error:'internal server error'});
     }        
});

router.put('/:id',async(req,res)=>{
     try{
          const personid = req.params.id;
          const updatedpersondata = req.body;

          const response = await person.findByIdAndUpdate(personid,updatedpersondata,{
               new : true,
               runValidators :true,
          })
          if(!response){  // if id is invalid
               return res.status(404),json({error : 'person with this' +'$updatedpersondata$'+ 'not found'});
          }
          console.log('data updated');
          res.status(200).json(response);
     }catch(err){
            console.log(err);
            res.status(500).json({error:'internal server error'});
     }
});
 
router.delete('/:id',async(req,res)=>{
     try{
          const personid =req.params.id;
          const response =await person.findByIdAndDelete(personid);
          if(!response){
               return res.status(404).json({error:'person not found'});
          }
          console.log('data delete');
          res.status(200).json({message:'person deleted succ....'});

     }catch(err){
          console.log(err);
          res.status(500).json({error:'internal server error'});
   
     }
})



module.exports =router;