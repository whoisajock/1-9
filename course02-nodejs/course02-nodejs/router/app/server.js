//post请求获取数据
const http = require("http");
const url = require("url");
const router = require("./router");
function start(){

	http.createServer((req,res)=>{
		//想获取url路径
		if(req.url!="/favicon.ico"){
			res.writeHead(200,{
				"content-type":"text/html;charset=utf-8"
			});
			let pathname = url.parse(req.url).pathname;
			//路由处理
			router.route(pathname,res);
		}
		
	}).listen(8000);

	
}

module.exports.start = start;
