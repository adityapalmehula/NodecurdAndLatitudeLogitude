const express = require ('express');
const router = express.Router();
// import user schema here to use save data into database
const User= require('../../Schema/user');


router.post('/aditya', function(req, res){
  console.log("working user.router");
	// to get data here sending by user into body is ( req.body ).
	// 1- create object of user user schema and and pass our into that schema
	// 2- save it into data base -
   var user =new User(req.body);
   user.save().then(function(data){
   	 res.send(data);
   });

	console.log("request data"+JSON.stringify(req.body));

});

// export this route then my start.js will able to import it..
module.exports = router;