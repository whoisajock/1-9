const express = require("express");
let router = express.Router();
let app = express();

router.get("/a",(req,res)=>{
	res.send("路由级a");
});
router.get("/b",(req,res)=>{
	res.send("路由级b");
});
app.use("/user",router);

app.get("/user1",(req,res)=>{
	res.send("应用级");
})

app.listen(8000);
