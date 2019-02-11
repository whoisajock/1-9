const http = require("http");
const https = require("https");
http.createServer((req,res)=>{
	res.setHeader("content-type","text/plain;charset=utf-8");
	https.get("https://api.douban.com/v2/movie/top250",(resp)=>{
		let str = "";
		resp.on("data",(chunk)=>{
			str += chunk;
		});
		resp.on("end",()=>{
			//console.log(JSON.parse(str));
			let arrTitle = [];
			let dataObj = JSON.parse(str).subjects;
			dataObj.forEach((item)=>{
				arrTitle.push(item.title);
			});
			res.end(JSON.stringify(arrTitle));
		})
	})
	
	
}).listen(3000);
