

//********************Set up of Express *****************************
const express = require('express');
// i have to use body parser at upper level
const bodyParser = require('body-parser');
// set up express app
//*******************import mongoose *****************************
const mongoose = require('mongoose');
const app = express();
// i have to use if bodyparser at upper side
//*********************Body parser install *****************************
app.use(bodyParser.json());
//*********************clse parser install *****************************
//********************mongo create database ****************************
/*connect is the method of mongoose which connect nodejs to mongodb it take two parameters 
1- portwith database name here database name i have given (userDetails) if it will not exists
this command will autmatically created there*/
mongoose.connect('mongodb://localhost/userDetails');
// 2- set mongoose promise equal to global promise of node because mongosee equal is now 
// depricated
mongoose.Promise=global.Promise;


//set up static files
// when user give any static file after localhost then express not go to run post put....
// request bcz it is a static file request . so it will go into given directory - and if there will be 
// get static file node will run that file
// like localhost:3000/api/index.html; node will search it into public folder
app.use(express.static('public'));

//**********************************************************************
/*Creating object of express is app
add class have one method linten to specify port of where to linten*/  
// listen for requests
app.listen(process.env.port || 3000, function(){
    console.log('______________Server Is Running___________________');
});

/*calling method of http like get / post / delete provided by express 
so no need to http just call that method via app obejct */ 
app.get('/api', function(req, res){
	// send response to browser
  res.send({ name: 'Aditya' });
});
// test it on browser localhost:3000/api

//********************Close up of Express *****************************

//******************** Express Route SetUp *****************************
// app.get('/api', function(req, res){
// 	// send response to browser
//   res.send({ name: 'Aditya' });
// })  // i want to make this methods into septate folder 
// so i will define route so all other methods will be in seprated files will called from 
// here 
  console.log("working user.router");

// import api.js here by using this line --
// const routes = require('./routes/api')
// const routes = require('./routes/app.router')
//***********************************************
// for /api route i am send it to route ./routes/api
app.use('/api', require('./routes/app.router'));  //i will create api.js into routes foder
//for error handlor -
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});
//******************** Express Route SetUp *****************************
module.exports = app;



