function hello(name){
	return new Promise((resolve,reject) => {
		setTimeout(() =>{
			resolve('Hello!I am '+ name + '.');
		}, 2000);
	});
}
async function async_msg(name){
	try{
		console.log('In async method');
		const msg = await hello(name);
		console.log(msg);
	}catch(err){
		console.log('Error:', err.message);
	}
}

async_msg('Snehal');