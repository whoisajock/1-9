const http = require("http");
const qs = require("querystring");
const url = require("url");

http.createServer((req,res)=>{
	//console.log(req.url);
	if(req.url != "/favicon.ico"){
		/*console.log(url.parse(req.url).query);
		console.log("aa");*/
		
		/*res.writeHead(200,{
			"content-type":"text/html;charset=utf-8"
		})
		res.write("响应数据");
		res.end();*/
		
		let resData = "aaa";
		req.on("data",function(data){
			resData += data;
		})
		res.writeHead(200,{
			"content-type":"text/html;charset=utf-8"
		})
		req.on("end",function(){
			req.emit("data","bbb");
			res.end(resData);
		})
		
		
	}
	
}).listen(3000,"127.0.0.1",function(){
	console.log("服务器启动成功");
})


