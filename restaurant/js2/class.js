function food(name,price,cost,cooktime){
	this.name = name;
	this.price = price;
	this.cost = cost;
	this.cooktime = cooktime;
}
var cookmeun = [new food("鱼香肉丝",80,50,5,5),
				new food("宫保鸡丁",100,60,10,5),
				new food("土豆丝",50,10,5,5),
				new food("青椒肉丝",100,65,8,5),
				new food("佛跳墙",1000,500,20,10)];
function worker(id,name,slary,skill,position){
	this.id = id;
	this.name = name;
	this.slary = slary;
	this.skill = skill;
	this.work = "未分配工作";
	this.position = position;
}
function restaurant(name,money,seatnum,worker,square){
	this.name = name;
	this.money = money;
	seatnum = seatnum || 2;
	this.seat = [];
	this.id = 1000;
	this.square = square || 5;
	for(i = 0; i < seatnum; i++){
		// console.log(this.seat)
		this.seat.push(i)
		seatList.push([i])
		emptySeat.push([i])
	}
	console.log("您的餐厅的桌位有" + this.seat.length + "个")
	// console.log(seatList)
	this.worker = [];
}
restaurant.prototype.hire = function(){
	var arr = this.worker, name ,id = this.id;
	if(arr.length == employeename.length){
		console.log("人才市场已经没有新的应聘人员了!");
		return;
	}
	var slary = 3000 + Math.floor(Math.random() * 7000);
	function getname(){
		name = employeename[Math.floor(Math.random() * employeename.length)];
		for(i = 0; i < arr.length; i++){
			if(name == arr[i].name){
				getname();
			}
		}
	}
	var pos = [80, 10]
	getname()
	var skill = Math.floor(Math.random() * 100)
	var newWorker = new worker(id,name,slary,skill,pos)
	if(this.money < slary){
		console.log("您发现了" + newWorker.name + ",厨艺为" + newWorker.skill + ",工资为" + newWorker.slary + ".但是由于您资金不足,所以对方离开了...")
		return;
	}
	expend += slary;
	this.money -= slary;
	console.log("恭喜您招聘到了" + newWorker.name + ",厨艺为" + newWorker.skill + ",工资为" + newWorker.slary)
	this.worker.push(newWorker)
	creatWorker(this.worker)
	var p = document.createElement("li");
	p.id = id;
	p.innerHTML = newWorker.name;
	p.onclick = function(){
		if(choiceId == id){
			return;
		}
		else if(choiceId == -1){
			choiceId = id;
			document.getElementById(choiceId).className = "employee_click";
		}
		else{
			document.getElementById(choiceId).className = "none";
			choiceId = id;
			document.getElementById(choiceId).className = "employee_click";
		}
		var s;
		var value = Object.values(newWorker);
		s = "<p>员工信息</p>" + "<p>编号:" + id + "</p>" + "<p>名字:" + name + "</p>" + "<p>工资:" + slary + "</p>" + "<p>厨艺:" + skill + "</p>" + "<p>职务:" + newWorker.work + "</p>"
		var setcook = document.createElement("button");
		setcook.textContent = "厨师";
		setcook.id = "setcook";
		var setsever = document.createElement("button");
		setsever.textContent = "服务员";
		setsever.id = "setsever";
		var setoff = document.createElement("button");
		setoff.textContent = "去除职务";
		setoff.id = "setoff";
		$("#grey").empty().show().html(s).append(setcook,setsever,setoff);
	}
	this.id ++;
	$("#employeeBox").append(p)
}
restaurant.prototype.fire = function(){
	var arr = this.worker
	for(i = 0; i < arr.length; i++){
		if(arr[i].id == choiceId){
			for(l in chefList){
				if(chefList[l].name == arr[i].name){
					chefList.splice(l,1)
				}
			}
			for(l in waiterList){
				if(waiterList[l].name == arr[i].name){
					waiterList.splice(l,1)
				}
			}
			$("#" + arr[i].name + arr[i].id).remove()
			document.getElementById(choiceId).remove();
			this.worker.splice(i,1);
			choiceId = -1;
			// console.log(this.worker)
			creatWorker(this.worker)
			empUpdate()
			console.log(chefList,waiterList)
			return;
		}
	}
}
function waiter(id,name,slary,skill,position){
	worker.call(this,id,name,slary,skill)
	this.position = position;
	this.work = "waiter";
	this.working = false;
	this.moving = false;
	this.doingJob = function(food){
		if(this.working == true){
			return;
		}

		var food = food || null;
		var x = this;
		var order = false;
		if(food != null){
			//传入的是菜单,则是点菜,不然则是通过okcook获得传菜菜品
			//点菜
			this.working = true;
			order = true;
			moveWaiter(x, food, order)
		}
		else{
			//送菜
			food = okCook[0]
			if(!food) {
				return;
			}
			x.working = true;
			var seat_num = food[1] + 1
			InfoUpdate("服务员 " + x.name + " 开始为 " + seat_num  + " 号桌的客人送 " + food[0].name)
			// console.log("服务员 " + x.name + " 开始为 " + food[1] + " 号桌的客人送 " + food[0].name)
			okCook.shift()
			moveWaiter(x, food, order)
			// console.log(x)
		}
	}
}
waiter.constructor = waiter;
function chef(id,name,slary,skill,position){
	worker.call(this,id,name,slary,skill)
	this.work = "chef";
	this.position = position;
	this.working = false;
	this.doingJob = function(){
		if(foodList.length == 0){
			return;
		}
		var x = this;
		this.working = true;
		var cook = foodList[0];
		var seat_num = cook[1] + 1
		InfoUpdate("厨师" + this.name + "开始做" + seat_num + " 号桌的 " + cook[0].name + "……")
		// console.log("厨师" + this.name + "开始做" + cook[1] + " 号桌的 " + cook[0].name + "……")
		foodList.shift();
		setTimeout(function(){
			cook.push(x.skill)
			okCook.push(cook)
			x.working = false;
			InfoUpdate(seat_num + " 号桌的 " + cook[0].name + " 做好了,等待服务员上菜!")
			// console.log(cook[1] + " 号桌的 " + cook[0].name + " 做好了,等待服务员上菜!")
			return;
		},cook[0].cooktime * 1000)
	}
}
chef.constructor = chef;
function Client(rest,position){
	this.rest = rest;
	this.working = false;
	this.position = [720,10]
	var x = this;
	this.cost = 0;
	this.tip = 0;
	this.foodcost = 0;
	function getseat(){
		if(emptySeat.length == 0){
			return -1
		}
		else{
			var s =  Math.floor(Math.random() * emptySeat.length);
			var q = emptySeat[s]
			emptySeat.splice(s,1);
			seatList[q].push(x)
			return q[0]
		}
	}
	this.wantToGet = []
	this.seat = getseat();
	if(this.seat != -1){
		movein(this)
	}
	function wantList(){
		var n = Math.ceil(Math.random() * cookmeun.length);
		var wantmeun = [];
		for(i = 0; i < n; i++){
			var r = cookmeun[Math.floor(Math.random() * cookmeun.length)];
			wantmeun.push([r,x.seat])
			x.wantToGet.push(r.name)
		}
		return wantmeun;
	}
	this.wantList = wantList();
	this.away = function(){
		if(this.cost != 0){
			this.rest.money += this.cost + this.tip - this.foodcost;
			expend += this.foodcost;
			receipts += this.cost + this.tip;
			InfoUpdate(this.seat + 1 + " 号桌的顾客用餐完毕,支付了用餐费用 " + this.cost + " 额外给了 " + this.tip + " 元.食材成本花费 " + this.foodcost, this.cost)
			// console.log(this.seat + " 的顾客用餐完毕,支付了用餐费用 " + this.cost + " 额外给了 " + this.tip + " 元.食材成本花费 " + this.foodcost)
		}
		moveout(this)
		seatList[this.seat] = [this.seat]
		emptySeat.push([this.seat])
	}
}