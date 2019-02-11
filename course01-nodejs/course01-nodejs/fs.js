const fs = require("fs");
//错误优先 ？
/*fs.stat("index.html",(err,stats)=>{
	if(!err){
		console.log(stats.isFile());
	}else{
		console.log(err);
	}
});*/

/*fs.mkdir("test",(err)=>{
	if(!err){
		console.log("创建成功");
	}
})*/
/*fs.writeFile("test/1.txt","testtest",(err)=>{
	if(!err){
		
	}else{
		console.log(err);
	}
})
*/
/*fs.writeFile("test/2.txt","test2test2",(err)=>{
	if(!err){
		
	}else{
		console.log(err);
	}
})*/
/*fs.appendFile("test/2.txt","cccc",(err)=>{
	if(!err){
		
	}else{
		console.log(err);
	}
})*/
/*fs.readFile("test/2.txt",(err,con)=>{
	if(!err){
		console.log(con.toString());
	}else{
		console.log(err);
	}
})*/
/*fs.readdir("test",(err,con)=>{
	if(!err){
		console.log(con);
	}else{
		console.log(err);
	}
})*/
/*fs.rmdir("test1",(err)=>{
	
})*/
fs.rmdir("test",(err)=>{
	if(err){
		console.log(err);
	}
})
