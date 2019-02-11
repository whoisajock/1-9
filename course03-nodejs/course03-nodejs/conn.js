let MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url,(err,db)=>{
	if(err){
		throw err;
	}
	console.log("数据库连接成功!");
	var dbase = db.db("mydb");
	//创建集合
	/*dbase.createCollection("users",(err,res)=>{
		if(err){
			throw err;
		}
		console.log("集合创建成功!");
		db.close();
	})*/
	//db.close();
	//插入数据
	/*dbase.collection("users").insertOne({name:"john1",age:21},(err,res)=>{
		if (err) throw err;
        console.log("文档插入成功");
        db.close();
	})*/
	/*let documents = [{name:"john2",age:22},{name:"john3",age:23}];
	dbase.collection("users").insertMany(documents,(err,res)=>{
		if (err) throw err;
        console.log("文档插入成功");
        db.close();
	})*/
	//查找
	/*dbase.collection("users").find({age:{$gt:21}}).toArray((err,res)=>{
		if (err) throw err;
        console.log(res);
	})*/
	
	/*dbase.collection('users').updateMany({age:21},{$set:{name:"miss"}},(err,res)=>{
		
	})*/
	//删除
	/*dbase.collection('users').deleteOne({age:22},(err,res)=>{
		
	})*/
	//排序
	/*dbase.collection("users").find().sort({age:-1}).toArray((err,res)=>{
		console.log(res);
	})*/
	//查询分页
	/*dbase.collection("users").find().skip(2).limit(2).toArray((err,rs)=>{
		console.log(rs);
	})*/
	
	/*dbase.createCollection("orders",(err,res)=>{
		res.insertOne({_id:1,product_id:100,status:1});
	})*/
	/*dbase.createCollection("products",(err,res)=>{
		res.insertMany([{_id:100,name:"笔记本"},{_id:101,name:"手机"}]);
	})*/
	/* dbase.collection('orders').aggregate([
	    { $lookup:
	       {
	         from: 'products',            // 右集合
	         localField: 'product_id',    // 左集合 join 字段
	         foreignField: '_id',         // 右集合 join 字段
	         as: 'orderdetails'           // 新生成字段（类型array）
	       }
	     }
	    ]).toArray(function(err, res) {
	    if (err) throw err;
	    console.log(JSON.stringify(res));
	    db.close();
  });*/
})
