var express = require('express');
var router = express.Router();


var user={};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "This is my app" });
});

router.get('/users', function(req, res, next) {
    res.json({
        users: User
    });
});

// router.get('/user/:userid', function(req, res, next) {
//   if (req.params['userid'] == "jack") {
//       return res.json({
//           status: "fail"
//       });
//   }
//   return next();
// });

router.get('/user/:userid', function(req, res, next) {
   var useid=req.params["userid"];
   if (user[userid]){
       return next();
   }
   else
   {
       return res.json({
          status: "user is not existed"
       });
   }
});
router.get('/user/:userid', function(req, res, next) {
   var user = req.body;
   
    if ( ! user.name || user.name == "") {
       return res.json({
           status: "user create fail"
       });
   }
    User[user.name] = user
    
   return res.json({
     user: User[user.name]    
   });
});

// router.get('/user/:userid', function(req, res, next) {
//   return res.json({
//       user: req.params["userid"]
//   });
// });

module.exports = router;