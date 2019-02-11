//post请求获取数据
const http = require("http");
const qs = require("querystring");
http.createServer((req,res)=>{
	res.writeHead(200,{
		"access-control-allow-origin":"*"
	})
	let str = "";
	//客户端向服务端传递数据
	req.on("data",(chunk)=>{
		//chunk.toString()
		str+=chunk;
	});
	//客户端请求结束
	req.on("end",()=>{
		console.log(qs.parse(str));
		res.end("1111");
	})
	
}).listen(8000);
