const passport = require('passport');
const localstrategy = require('passport-local').Strategy;
const person = require('./models/person')

passport.use(new localstrategy(async(username,password,done)=>{
    try{
           console.log('received credetials',username,password);
               const user = await person.findOne({username});
               if(!user)
                   return done(null,false,{message:'incorrect username.'});
              const ispasswordmatch = user.password == password ? true:false;
              if(ispasswordmatch){
                  return done(null,user);
              }else{
                  return done(null,false,{message:'incorrect password'});
              }
    }catch(err){
         return done(err);
    }
}));

module.exports = passport;