var express = require('express');
var router = express.Router();
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017";
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//注册接口
router.post("/regist",(req,res)=>{
	var data=req.body ;
	//查询是否重名
	MongoClient.connect(url,(err,db)=>{
		if(err) throw err;
		var dbase=db.db("mydb");
		dbase.Users.insert({name:"nzk"})
	})
	//res.send("1");
})
module.exports = router;
