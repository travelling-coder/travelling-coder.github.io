


function baseSvg(){
	var svg1 = document.createElementNS('http://www.w3.org/2000/svg',"svg")
	svg1.setAttribute("width",760)
	svg1.setAttribute("height",505)
	var rect = document.createElementNS('http://www.w3.org/2000/svg',"rect")
	rect.setAttribute("x",0)
	rect.setAttribute("y",0)
	rect.setAttribute("width",100)
	rect.setAttribute("height",505)
	rect.setAttribute("style","fill:#6e7f7e;")
	document.getElementById("background").append(svg1)
}

// var person = {id : 1, name : "jack", working : false, slary : 4000, doingJob : new Function , position : [0,0]}
// var rest = {name : "123", seat : [0,1,2,3,4,5,6], money : 20000}
// var seatlist = [[0,{cost:123}],[1],[2],[3],[4],[5],[6]]
// test info

function creatSeat(p){
	if(!p){
		return
	}
	var svg1 = document.createElementNS('http://www.w3.org/2000/svg',"svg")
	svg1.setAttribute("width",760)
	svg1.setAttribute("height",506)
	for(i = 0; i < p.length; i++){
		var x = 200 + Math.floor(i / 5) * 200;
		var y = 50 + (i % 5)*100;
		var rect =  document.createElementNS('http://www.w3.org/2000/svg',"rect")
		var line =  document.createElementNS('http://www.w3.org/2000/svg',"line")
		var tex =  document.createElementNS('http://www.w3.org/2000/svg',"text")
		rect.setAttribute("x",x-35)
		rect.setAttribute("y",y-25)
		rect.setAttribute("width",70)
		rect.setAttribute("height",50)
		line.setAttribute("y1",y - 25)
		line.setAttribute("y2",y + 25)
		line.setAttribute("x1",x + 70)
		line.setAttribute("x2",x + 70)
		tex.setAttribute("x",x)
		tex.setAttribute("y",y + 5)
		tex.style = "font-size:16;fill:black"
		tex.innerHTML =  i + 1 + "号桌"
		rect.setAttribute("style","fill:#a87b00;stroke:rgb(32, 42, 43);stroke-width:4")
		line.setAttribute("style","stroke:rgb(99, 0, 0);stroke-width:12")
		svg1.append(rect,line,tex)
	}
	svg1.setAttribute("translate",(33,33))
	document.getElementById("chair").innerHTML = "";
	document.getElementById("chair").append(svg1)
}

var client = {seat : 2, position : [700,10]}//dest 250 50  450 50
var waiter1 = {name : "jack", slary: 500, position : [0,0],wokr : "waiter"}
var waiter2 = {name : "jack", slary: 500, position : [150,50]} // dest 150 50//350 50

var p = [{name : "jack", slary: 500, position : [110,110],wokr : "waiter"},{name : "jack", slary: 500, position : [120,120],wokr : "waiter"},{name : "jack", slary: 500, position : [220,30],wokr : "waiter"}]

function creatWorker(arr){
	var w = $("#workerSpace")
	w.empty()
	var svg1 = document.createElementNS('http://www.w3.org/2000/svg',"svg")
	svg1.setAttribute("width",760)
	svg1.setAttribute("height",506)
	for(i = 0; i < arr.length; i++){
		var cir =  document.createElementNS('http://www.w3.org/2000/svg',"circle")
		cir.setAttribute("cx", 80)
		cir.setAttribute("cy", 40 * i + 30)
		cir.setAttribute("r",10)
		var src =  arr[i].position;
		if(arr[i].work == "waiter"){
			cir.setAttribute("fill","rgb(99, 0, 0)")
		}
		else if(arr[i].work == "chef"){
			cir.setAttribute("fill","rgb(255, 0, 0)")
		}
		else{
			cir.setAttribute("fill","rgb(180, 103, 8)")
		}
		var tex = document.createElementNS('http://www.w3.org/2000/svg',"text")
		tex.setAttribute("x",  40)
		tex.setAttribute("y",  40 * i + 35)
		tex.style = "font-size:16;fill:black"
		tex.innerHTML =  arr[i].name
		svg1.append(tex)
		svg1.append(cir)
	}
	svg1.id = "worerSpaceList"
	w.append(svg1)
}

function creatPerson(p){
	var svg1 = document.createElementNS('http://www.w3.org/2000/svg',"svg")
	svg1.setAttribute("width",760)
	svg1.setAttribute("height",506)
	var cir =  document.createElementNS('http://www.w3.org/2000/svg',"circle")
	cir.setAttribute("cx",p.position[0])
	cir.setAttribute("cy",p.position[1])
	cir.setAttribute("r",10)
	var src = p.position;
	if(p.slary){
		console.log(p.work)
		if($("#" + p.name)){
			$("#" + p.name).remove()
		}
		if(p.work == "waiter"){
			cir.setAttribute("fill","rgb(99, 0, 0)")
		}
		else if(p.work == "chef"){
			cir.setAttribute("fill","rgb(255, 0, 0)")
		}
		else{
			cir.setAttribute("fill","rgb(180, 103, 8)")
		}
		var tex = document.createElementNS('http://www.w3.org/2000/svg',"text")
		tex.setAttribute("x", p.position[0] - 35)
		tex.setAttribute("y", p.position[1] + 5)
		tex.style = "font-size:16;fill:black"
		tex.innerHTML = p.name
		svg1.append(tex)
	}
	else{
		cir.setAttribute("fill","rgb(170, 170, 255)")
	}
	svg1.append(cir)
	svg1.id = p.name + p.id || p.seat
	document.getElementById("person").append(svg1)
}



function movein(p){
	if(!p){
		return;
	}
	p.working = true;
	var dest = [];
	var svg1 = document.createElementNS('http://www.w3.org/2000/svg',"svg")
	svg1.setAttribute("width",760)
	svg1.setAttribute("height",506)
	var cir =  document.createElementNS('http://www.w3.org/2000/svg',"circle")
	cir.setAttribute("cx",p.position[0])
	cir.setAttribute("cy",p.position[1])
	cir.setAttribute("r",10)
	var src = p.position;
	cir.setAttribute("fill","rgb(170, 170, 255)")
	dest = [Math.floor(p.seat / 5) * 200 + 250,(p.seat % 5)*100 + 50]
	if(document.getElementById(p.seat)){
		document.getElementById(p.seat).remove();
	}
	if(src[0] > dest[0]){
		src[0] -= 10;
		setTimeout(function(){
			movein(p)
		},20)
	}
	else if(src[0] < dest[0]){
		src[0] += 10;
		setTimeout(function(){
			movein(p)
		},20)
	}
	else if(src[1] > dest[1]){
		src[1] -= 10;
		setTimeout(function(){
			movein(p)
		},20)
	}
	else if(src[1] < dest[1]){
		src[1] += 10;
		setTimeout(function(){
			movein(p)
		},20)
	}
	else{
		p.working = false;
	}
	svg1.append(cir)
	svg1.id = p.name || p.seat
	document.getElementById("person").append(svg1)
	return;
}

// movein(client)
// movein(waiter2,6)

function moveWaiter(p, food, order){
	if(!p){
		return;
	}
	if(p.working == false){
		return;
	}
	var target;
	if(order == true){
		target = food[0][1];
	}
	else{
		target = food[1];
	}
	p.moving = true;
	var dest = [];
	var svg1 = document.createElementNS('http://www.w3.org/2000/svg',"svg")
	svg1.setAttribute("width",760)
	svg1.setAttribute("height",506)
	var cir =  document.createElementNS('http://www.w3.org/2000/svg',"circle")
	cir.setAttribute("cx",p.position[0])
	cir.setAttribute("cy",p.position[1])
	cir.setAttribute("r",10)
	var src = p.position;
	cir.setAttribute("fill","rgb(99, 0, 0)")
	dest = [Math.floor(target / 5) * 200 + 150,(target % 5)*100 + 50]
	if(document.getElementById(p.name)){
		document.getElementById(p.name).remove();
	}
	var tex = document.createElementNS('http://www.w3.org/2000/svg',"text")
	tex.setAttribute("x", p.position[0] - 35)
	tex.setAttribute("y", p.position[1] + 5)
	tex.style = "font-size:16;fill:black"
	tex.innerHTML = p.name
	svg1.append(tex)
	if(src[0] > dest[0]){
		src[0] -= 10;
		setTimeout(function(){
			moveWaiter(p, food, order)
		},20)
	}
	else if(src[0] < dest[0]){
		src[0] += 10;
		setTimeout(function(){
			moveWaiter(p, food, order)
		},20)
	}
	else if(src[1] > dest[1]){
		src[1] -= 10;
		setTimeout(function(){
			moveWaiter(p, food, order)
		},20)
	}
	else if(src[1] < dest[1]){
		src[1] += 10;
		setTimeout(function(){
			moveWaiter(p, food, order)
		},20)
	}
	else{
		if(order == true){
			setTimeout(function waiterFor(){
				var s = [];
				for(i in food){
					foodList.push(food[i])
					s.push(food[i][0].name)
				}
				InfoUpdate(food[0][1] + 1 + " 号桌的客人点了 " + s)
				// console.log(food[0][1] + " 号桌的客人点了 " + s)
				moveout(p)
				return;
			},Math.ceil(Math.random() * 4) * 1000)
		}
		else
		{
			setTimeout(function sentOver(){
				moveout(p)
				return;
			},1000)
			var seatInformation = seatList[food[1]]
			seatInformation[1].wantList.shift()
			seatInformation[1].cost += food[0].price;
			seatInformation[1].tip += Number((food[0].price * (Math.sqrt(food[2]) / 100)).toFixed(0))
			seatInformation[1].foodcost += food[0].cost;
			if(seatInformation[1].wantList.length == 0){
				setTimeout(function(){
					InfoUpdate(food[1] + 1 + " 号桌的客人吃完了,准备付账")
					// console.log(food[1] + " 号桌的客人吃完了,准备付账")
					seatInformation[1].away()
					return;
				},(Math.ceil(Math.random() * 3) + 1) * 5000)
			}
		}
	}
	svg1.append(cir)
	svg1.id = p.name
	document.getElementById("person").append(svg1)
	return;
}
function moveout(p){
	if(!p){
		return;
	}
	if(p.name){
		p.moving = true;
	}
	var src = p.position,
		dest = [];
	var svg1 = document.createElementNS('http://www.w3.org/2000/svg',"svg")
	svg1.setAttribute("width",760)
	svg1.setAttribute("height",506)
	var cir =  document.createElementNS('http://www.w3.org/2000/svg',"circle")
	cir.setAttribute("cx",p.position[0])
	cir.setAttribute("cy",p.position[1])
	cir.setAttribute("r",10)
	if(p.name){
		dest = [80,10]
		cir.setAttribute("fill","rgb(99, 0, 0)")
		if(document.getElementById(p.name)){
			document.getElementById(p.name).remove();
		}
		var tex = document.createElementNS('http://www.w3.org/2000/svg',"text")
		tex.setAttribute("x", p.position[0] - 45)
		tex.setAttribute("y", p.position[1] + 5)
		tex.style = "font-size:16;fill:black"
		tex.innerHTML = p.name
		svg1.append(tex)
	}
	else{
		dest = [770,10]
		cir.setAttribute("fill","rgb(170, 170, 255)")
		if(document.getElementById(p.seat)){
			document.getElementById(p.seat).remove();
		}
	}
	if(src[1] > dest[1]){
		src[1] -= 10;
		setTimeout(function(){
			moveout(p)
		},20)
	}
	else if(src[1] < dest[1]){
		src[1] += 10;
		setTimeout(function(){
			moveout(p)
		},20)
	}
	else if(src[0] > dest[0]){
		src[0] -= 10;
		setTimeout(function(){
			moveout(p)
		},20)
	}
	else if(src[0] < dest[0]){
		src[0] += 10;
		setTimeout(function(){
			moveout(p)
		},20)
	}
	else{
		
		if(!p.slary){
			return;
		}
		else{
			p.working = false;
			p.moving = false;
		}
	}
	svg1.append(cir)
	svg1.id = p.name || p.seat
	document.getElementById("person").append(svg1)
	return;
}

// moveout(client)
// moveout(waiter2)