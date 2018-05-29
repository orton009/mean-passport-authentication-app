const express = require('express') ;
const router = express.Router();
const passport = require('passport');
const jwt = require("jsonwebtoken");

const config = require("../config/key");
const User = require('../models/user');

router.get('/' , function(req, res){
    res.send("Router is working fine");
});

//authenticate user
router.post('/authenticate' , function(req,res,next){
    const username = req.body.username ;
    const password = req.body.password ; 

    if( username === User.username){
        if(password === User.password){
            //password matched then send a token to client
            const token = jwt.sign(User , config.secret , {
                expiresIn : 1000 //1000 seconds
            }) ;
            res.json({success : true , 
                token : "JWT " + token ,
                user : {
                    id : User.id , 
                    username : User.username ,
                    name : User.name
                } 
        
            });
        }
        else {
            //if password does not match
            res.json({success : false , msg : "Wrong Password"});
        }
    }
    else {
        //if username does not matches
        res.json({success : false , msg : "User Not Found"});
    }
});

router.get('/profile' , passport.authenticate('jwt',{session : false}) ,function(req,  res, next){
    res.json({user : req.user});
});

module.exports = router ;