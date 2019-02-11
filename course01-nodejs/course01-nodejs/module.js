function foo(){
	console.log("aa");
}
var testVal = 100;
//module.exports = foo; //对外暴露具体的函数
//module.exports.foo = foo;//对外暴露一个对象

module.exports = testVal;
