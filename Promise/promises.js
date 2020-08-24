var devide = function(x,y){
	return new Promise((resolve,reject)=>{
		var div = x/y;
		if(div){
			resolve(div);
		}
		else{
			reject(Error("Could not divide these two values"));
		}
	});
	
};

devide(6,2)
.then((result)=>{
	console.log(result);
})
.catch((err) =>{
	console.log(err);
})

