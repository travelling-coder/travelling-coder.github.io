function free(arr){
	var free = [];
	for(i = 0; i < arr.length; i++){
		if(arr[0].moving){
			if(arr[i].working == false && arr[i].moving == false){
				// console.log(arr[i])
				free.push(arr[i])
			}
		}
		else if(arr[i].working == false){
			free.push(arr[i])
		}
	}
	return free;
}
//获得arr的空闲元素构成的数组


//rest 为餐厅

var runOrnot;
function restaurantRun(rest){
	
	runOrnot = setInterval(function(){
		addClient(rest)
	},(Math.ceil(Math.random()) + 1) * 1000)
	
	// addClient(rest)
	// addClient(rest)
	// addClient(rest)
	// test info
	
	cooking()
	sentFood()
}
//整体封装↑
function restaurantStop(){
	clearInterval(runOrnot);
}


function findWaiter(houmanyTimes,client){
	var w = free(waiterList)
	if(w.length == 0){
		if(houmanyTimes < Math.ceil(Math.random() * 5)){
			houmanyTimes += 1
			setTimeout(function(){
				findWaiter(houmanyTimes,client)
				return;
			},500);
		}
		else{
			// console.log(client.seat + " 号桌的客人呼叫了 " + houmanyTimes + " 次服务员都无人应答,所以离开了...")
			InfoUpdate(client.seat + 1 + " 号桌的客人呼叫了 " + houmanyTimes + " 次服务员都无人应答,所以离开了...")
			moveout(client)
			client.away();
			return;
		}
	}
	else{
		var waiterForClient = w[Math.floor(Math.random() * w.length)]
		var seat_num = client.seat + 1
		InfoUpdate("服务员 " + waiterForClient.name + "为" + seat_num + " 号桌的客人服务 ")
		// console.log("服务员 " + waiterForClient.name + "为" + client.seat + " 号桌的客人服务 ")
		waiterForClient.doingJob(client.wantList)
		// console.log(foodList)
		return ;
	}
}
//寻找空闲的服务员,如果循环随机次数无果,则删除顾客数据

function doSomething(times, client){
	if(client.working == true){
		setTimeout(function(){
			doSomething(times, client)
			return;
		},500)
	}
	else{
		findWaiter(times,client)
	}
}
function addClient(rest){
	var client = new Client(rest);
	var times = 0;
	//用于计算循环次数
	if(client.seat == -1){
		console.log("来了新的客人,但是因为没有位置,已经离开了.")
		moveout(client)
		return;
	}
	else{
		clientList.push(client)
		var seat_num = client.seat + 1
		InfoUpdate("来了新的客人,选择了 " + seat_num + " 号桌")
		// console.log("来了新的客人,选择了 " + client.seat + " 号桌")
		doSomething(times, client)
	}
}
//增加一个新的顾客↑

function findechef(){
	var c = free(chefList)
	if(c.length == 0){
		setTimeout(findechef,1000)
	}
	else{
		var chefForClient = c[Math.floor(Math.random() * c.length)]
		chefForClient.doingJob();
	}
}
//寻找空闲厨师,并实现厨师的功能;

function cooking(){
	setInterval(function(){
		if(foodList.length == 0){
			return;
		}
		else{
			findechef()
		}
	},1000)
}
//当cooklist不为空,执行findchef

function findWaiterSent(){
	var c = free(waiterList)
	if(c.length == 0){
		setTimeout(findWaiterSent,1000)
	}
	else{
		var waiterForClient = c[Math.floor(Math.random() * c.length)]
		waiterForClient.doingJob();
		sentFoodOver(waiterForClient)
	}
}
function sentFoodOver(p){
	if(p.working == false){
		moveout(p)
	}
	else{
		setTimeout(function(){
			sentFoodOver(p)
			return;
		},500)
	}
}
//寻找空闲服务员,并实现传菜功能

function sentFood(){
	setInterval(function(){
		if(okCook.length == 0){
			return;
		}
		else{
			findWaiterSent()
		}
	},1000)
}
//当okcook为空时,返回,不然执行上一个函数.