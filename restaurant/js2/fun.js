function setMoney(s){
	var s = s.toString()
	var arr = s.split("");
	var brr = arr.slice(0)
	for(i = arr.length - 3; i > 0; i = i - 3){
		brr.splice(i,0,",")
	}
	return brr.join("");
}
var nowDate = 0;
var newday = 1, days = 1;
var totleSlary = 0;
function dayCost(x){
	totleSlary = 0;
	for(i = 0; i < x.worker.length; i++){
		totleSlary += x.worker[i].slary
	}
	console.log(totleSlary)
}

function gameTime(x){
	var nowHour = Math.floor(nowDate / 60) % 24
	if(nowHour == 0 && newday == 0){
		newday = 1;
		days++;
		expend += totleSlary;
		x.money -= totleSlary;
		InfoUpdate("今天支出了 " + totleSlary + " 工资");
		// console.log("今天支出了 " + totleSlary + " 工资")
		receipts = 0;
		expend = 0;
	}
	if(nowHour == 1 && newday == 1){
		newday = 0;
	}
	var s = "现在时间是" + nowHour + "时" + nowDate % 60 + "分";
	dailyUpdate()
	$("#timer").html("<p><b>餐厅名:</b>" + x.name + "<b>  资金:</b>" + setMoney(x.money) + "元<b> 桌椅数:</b>" + x.seat.length + "套<b> 建筑面积:</b>" + x.square + "单位<b> 每日工资:</b>" + totleSlary + "<b> 已经营:</b> " + days + "天.</p>" + s)
	nowDate++;
}
function chefmeun(){
	var s = [];
	for(i in chefList){
		s.push("<p>");
		s.push(chefList[i].name);
		s.push("(");
		s.push(chefList[i].skill);
		s.push(")");
		s.push("</p>");
	}
	$("#cookerMeun").empty().html("<p>厨师名单</p>" + s.join(""))
}
function waitermeun(){
	var s = [];
	for(i in waiterList){
		s.push("<p>");
		s.push(waiterList[i].name);
		s.push("</p>");
	}
	$("#severMeun").empty().html("<p>服务员名单</p>" + s.join(""))
}
function empUpdate(){
	chefmeun();
	waitermeun();
}
function InfoUpdate(str,checkOut){
	checkOut = checkOut || null;
	var info = document.getElementById("InfoList")
	if(info.childNodes.length > 20){
		info.childNodes[19].remove()
	}
	var li = document.createElement("li")
	if(checkOut){
		li.innerHTML = "<strong>" + str + "</strong>"
	}
	else{
		li.innerHTML = str
	}
	info.insertBefore(li,info.childNodes[0])
}
function dailyUpdate(){
	$("#dailyList").empty().append("<p>第 <strong>" + days + "</strong> 天经营状况</p><p>总收入: <strong>" + receipts + "</strong> 元</p><p>总支出: <strong>" + expend + "</strong> 元</p>")
}