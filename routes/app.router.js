// const express = require ('express');
// const router = express.Router();
// const app = require('../start');
// const user = require('../api/user/user.router')

// app.use('/users', user)
//   // console.log("working user.router");


// // export this route then my start.js will able to import it..
// module.exports = router;

const express = require ('express');
const router = express.Router();
const User= require('../Schema/user');

// get a list of ninjas from the db
router.get('/aditya', function(req, res, next){
    /* Ninja.find({}).then(function(ninjas){
        res.send(ninjas);
    }); */
    User.geoNear(
        {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical: true}
    ).then(function(dataa){
        res.send(dataa);
    }).catch(next);
})

router.post('/aditya', function(req, res ,next){
   var user =new User(req.body);
   user.save().then(function(data){
   	 res.send(data);
   }).catch(next);
});

// delete a ninja from the db
router.delete('/aditya/:id', function(req, res, next){
    User.findByIdAndRemove({_id: req.params.id}).then(function(data){
        res.send(data);
    }).catch(next);
});

// update a ninja in the db
router.put('/aditya/:id', function(req, res, next){
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    	  // get updated user value
        User.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    }).catch(next);
});

// export this route then my start.js will able to import it..
module.exports = router;