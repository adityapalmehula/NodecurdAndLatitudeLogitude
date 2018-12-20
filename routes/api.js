const express = require ('express');
const router = express.Router();
// import user schema here to use save data into database
const User= require('../Schema/user');

// get a list of ninjas from the db
router.get('/ninjas', function(req, res){
    res.send({type: 'GET'});
});

// add a new ninja to the db
// get data from body into response ( if user gives data into body how to catch it into node 
// we can done this via bnody parser )

//Body Parser -->
/*{ when request commint user body parser look to request body and its take to body data 
it parse it and attacend it to request object }*/
// after usrl what ever you will pass after / it will be a object of body data 
// like localhost:3000/ninjas/value         here value will be object or json data or bodydata
// install bodyparser it into doc file
router.post('/ninjas', function(req, res){

	// to get data here sending by user into body is ( req.body ).
	// 1- create object of user user schema and and pass our into that schema
	// 2- save it into data base -
   var user =new User(req.body);
   user.save().then(function(data){
   	 res.send(data);
   });

	console.log("request data"+JSON.stringify(req.body));

});

// update a ninja in the db
router.put('/ninjas/:id', function(req, res){
    res.send({type: 'PUT'});
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(req, res){
    res.send({type: 'DELETE'});
});

// export this route then my start.js will able to import it..
module.exports = router;