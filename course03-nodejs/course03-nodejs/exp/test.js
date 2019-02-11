const express = require("express");
let app = express();

app.listen("8000",()=>{
	console.log("服务器开启");
});
//无论请求路径是什么，回调函数都会执行
/*app.use((req,res)=>{
	res.send("响应数据");
})*/
//接受get请求，第一个参数表示路径
/*app.get("/",(req,res)=>{
	res.send("服务器响应的数据");
});*/
/*app.get("/login",(req,res)=>{
	//console.log(__dirname);
	//res.send("login");
	res.sendFile(__dirname+"/login.html");
})*/
//get请求的参数问题
/*app.get("/login",(req,res)=>{
	//req.query获取get请求中参数
	//console.log(req.query);
	var username = req.query.username;
	var psw = req.query.password;
	console.log(username,psw);
	res.sendFile(__dirname+"/login.html");
});*/

//post请求
/*app.post("/user",(req,res)=>{
	res.send("服务器针对post请求响应的数据");
})*/
//post请求中参数获取 req.body获取post请求中附加数据
/*app.use(express.urlencoded({ extended: true }))
app.post("/user",(req,res)=>{
	console.log(req.body);
	res.send("服务器针对post请求响应的数据");
});*/
