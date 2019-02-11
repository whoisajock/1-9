const fs = require("fs");
function route(pathname,res){
	switch(pathname){
		case "/":
		case "/index":
			res.end(fs.readFileSync("./view/index.html"));
			break;
		case "/login":
			res.end(fs.readFileSync("./view/login.html"));
			break;
		case "/regist":
			res.end(fs.readFileSync("./view/regist.html"));
			break;
		default:
			res.end(fs.readFileSync("./view/404.html"));
	}
}
module.exports.route = route;

