function loaded(name,money,seat){
	name = name || "食为天";
	money = money || 200000;
	seat = seat || 2;
	var rest = new restaurant(name,money,seat)
	gameTime(rest)
	setInterval(function(){
		gameTime(rest)
	},1000)
	$("#hire").click(function(){
		rest.hire()
		dayCost(rest)
		gameTime(rest)
	})
	$("#fire").click(function(){
		rest.fire()
		dayCost(rest)
		gameTime(rest)
	})
	$("#addSeat").click(function(){
		if(rest.seat.length == rest.square){
			InfoUpdate("已经不能增加桌椅了,请扩大店面!")
			// console.log("已经不能增加桌椅了,请扩大店面!")
		}
		else if(rest.money <= 10000){
			console.log("现金不足,无法增加桌椅!")
		}
		else{
			expend += 10000;
			rest.money -= 10000;
			seatList.push([rest.seat.length])
			emptySeat.push([rest.seat.length])
			rest.seat.push(rest.seat.length)
			InfoUpdate("增加了一个位置,现在有 " + rest.seat.length + " 个桌位!")
			// console.log("增加了一个位置,现在有 " + rest.seat.length + " 个桌位!")
			creatSeat(seatList)
			gameTime(rest)
		}
	})
	$("#upRes").click(function(){
		if(rest.square > 10){
			InfoUpdate("店面面积已达上限")
			// console.log("店面面积已达上限")
		}
		else if(rest.money <= 1000000 ){
			InfoUpdate("现金不足,无法增加餐厅面积!")
			// console.log("现金不足,无法增加餐厅面积!")
		}
		else{
			expend += 1000000;
			rest.money -= 1000000;
			rest.square += 5;
			gameTime(rest)
			InfoUpdate("扩大了店面,现在可以容纳 " + rest.square + " 个桌位!")
			// console.log("扩大了店面,现在可以容纳 " + rest.square + " 个桌位!")
		}
	})
	window.addEventListener("click",function(){
		if(event.target != document.getElementById("grey") && 
		event.target.parentNode != document.getElementById("grey") &&
		event.target != document.getElementById("hire")){
			$("#grey").hide();
			if(choiceId != -1 && event.target != document.getElementById("fire")){
				document.getElementById(choiceId).className = "none";
				choiceId = -1;
			}
		} 
		if(event.target.parentNode == document.getElementById("grey")){
			for(var i in rest.worker){
				if(rest.worker[i].id == choiceId){
					break;
				}
			}
		}
		if(event.target == document.getElementById("setcook") ||
		event.target == document.getElementById("setsever")){
			var s = 0;
			if(event.target == document.getElementById("setcook")){
				for(k = 0; k < chefList.length; k++){
					if(chefList[k].id == choiceId){
						return;
					}
				}
				for(j = 0; j < waiterList.length; j++){
					if(waiterList[j].id == choiceId){
						s = 1;
						break;
					}
				}
				waiterList.splice(j,s);
				var newJob = new chef(
					rest.worker[i].id,
					rest.worker[i].name,
					rest.worker[i].slary,
					rest.worker[i].skill,
					rest.worker[i].position)
				chefList.push(newJob)
				rest.worker[i].work = "chef";
			}
			if(event.target == document.getElementById("setsever")){
				for(k = 0; k < waiterList.length; k++){
					if(waiterList[k].id == choiceId){
						return;
					}
				}
				for(j = 0; j < chefList.length; j++){
					if(chefList[j].id == choiceId){
						s = 1;
						break;
					}
				}
				chefList.splice(j,s);
				var newJob = new waiter(
					rest.worker[i].id,
					rest.worker[i].name,
					rest.worker[i].slary,
					rest.worker[i].skill,
					rest.worker[i].position)
				waiterList.push(newJob)
				rest.worker[i].work = "waiter";
			}
			event.target.parentNode.childNodes[5].textContent = "职务:" + event.target.textContent;
			console.log(rest.worker)
			creatWorker(rest.worker)
			empUpdate()
			return;
		}
		if(event.target == document.getElementById("setoff")){
			var p = 0, q = 0;
			for(j = 0; j < waiterList.length; j++){
				if(waiterList[j].id == choiceId){
					p = 1;
					break;
				}
			}
			waiterList.splice(j,p);
			for(l = 0; l < chefList.length; l++){
				if(chefList[l].id == choiceId){
					q = 1;
					break;
				}
			}
			chefList.splice(l,q);
			rest.worker[i].work = "未分配工作";
			event.target.parentNode.childNodes[5].textContent = "职务:" + "未分配工作";
			empUpdate()
			creatWorker(rest.worker)
			return;
		}
	},true)
	
	document.getElementById("stop").disabled = true;
	$("#begin").click(function(){
		document.getElementById("begin").disabled = true;
		document.getElementById("stop").disabled = false;
		InfoUpdate("开始营业")
		// console.log("开始营业")
		restaurantRun(rest)
	})
	$("#stop").click(function(){
		document.getElementById("begin").disabled = false;
		document.getElementById("stop").disabled = true;
		InfoUpdate("暂停营业,不会有新的客人关顾了…")
		// console.log("暂停营业,不会有新的客人关顾了…")
		restaurantStop()
	})
}

//all in one

$("#creatRestaruant").click(function(){
	$("#InfoList").show()
	$("#dailyList").show()
	creatRestaurant()
	baseSvg()
	creatSeat(seatList)
})
$("#InfoList").hide()
$("#dailyList").hide()
function creatRestaurant(){
	var name = $("#restaurantName").val();
	var money = $("#restaurantMoney").val();
	$("#greyForAll").hide()
	loaded(name,money)
}