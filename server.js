const express = require('express');
const bodyParser = require('body-parser');
const path =  require('path');
const cors=  require('cors');
const passport = require('passport'); 

var app = express() ;

const users = require('./routes/users');

//port no
var port = 3000 ;

//use cors for requesting from another port  here
app.use(cors());

//body parser middleware
app.use(bodyParser.json());

//set static folder 
app.use( express.static(path.join(__dirname  , 'public')) );

//passport middleware
app.use(passport.initialize());
app.use(passport.session()) ;
require('./config/passportConfig')(passport);

//implementing router for path
app.use('/users' , users);

app.get('/' , function(req,  res){
    res.send("Invalid endpoint");
});

app.get('*' , (req,res) => {
    res.sendFile(path.join(__dirname , 'public/index.html'));
});

app.listen(port , () => {
    console.log("Server is running at port " +  port);
});
