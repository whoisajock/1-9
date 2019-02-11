var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', p:"<p>aabb</p>" });
});
router.get("/login",(req,res)=>{
	res.render("login");
});

module.exports = router;
