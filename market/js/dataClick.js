var cellsnum, cellvalue, checkedArr = [], checkedNum;
function tdOn_click(){
	var arr = [] , s = this.parentElement.rowIndex;
	for(l = 0; l < this.parentElement.cells.length; l++){
		if(this.parentElement.cells[l].innerText.charAt(0) == "N"){
			arr.push(cellvalue)
		}
		else{
			arr.push(this.parentElement.cells[l].innerText)
		}
	}
	creat_pic(arr)
	for(l = 1; l < clickarr.length; l++){
		if(s == clicknum[l-1]){
			return;
		}
	}
	if(this.innerText.charAt(0) == "N"||this.parentElement.innerText.charAt(0) == "N"){
		// console.log(this.parentElement)
		return
	}
	if(clicknum.length == 4){
		clicknum.splice(0,1)
		clickarr.splice(0,1)
	}
	clicknum.push(s)
	clickarr.push(arr)
	drawLine()
}

function mousein(){
	var s = this.cellIndex;
	var e = this;
	for(i = 1; i < table.rows.length; i++)
	{
		table.rows[i].cells[s].className = "hover"
	}
	this.parentElement.className = "hover";
	this.className = "td-hover" 
	var l = this.parentElement.childNodes, imarr = [];
	for(i = 0; i < l.length; i++){
		if(l[i].innerText.charAt(0) == "N"){
			imarr.push(cellvalue)
		}
		else{
			imarr.push(l[i].innerText)
		}
	}
	clickarr.unshift(imarr);
	drawLine()
	if(this.innerText.charAt(0) == "N"){
		return
	}
	var b = document.createElement("img");
	b.style.float = "right"
	b.style.margin = "5px"
	b.src = "./img/other.png"
	b.onclick = function(){
		setOnclick(e);
	};
	this.appendChild(b)
}
//鼠标进入事件


function mouseoff(){
	var s = this.cellIndex;
	clickarr.shift();
	for(i = 1; i < table.rows.length; i++)
	{
		table.rows[i].cells[s].className = "";
	}
	this.parentElement.className = "";
	this.className = ""
	if(this.innerText.charAt(0) == "N"){
		return
	}
	this.childNodes[this.childNodes.length - 1].remove();
}
//鼠标离开事件	


function setOnclick(e){
	var sarr = []
	for(p1 = 0; p1 < checkArr_A.length; p1++){
		if(checkArr_A[p1] == e.parentElement.cells[0].innerText){
			sarr.push(e.parentElement.cells[0].innerText)
			sarr.push(e.parentElement.cells[1].innerText)
		}
		if(checkArr_B[p1] == e.parentElement.cells[0].innerText){
			sarr.push(e.parentElement.cells[1].innerText)
			sarr.push(e.parentElement.cells[0].innerText)
		}
	}
	console.log(sarr)
	checkedNum = sarr.join("")
	console.log(checkedNum)
	clickarr.shift()
	cellvalue = e.innerText
	cellsnum = e.cellIndex
	var d = document.createElement("div")
	var i = document.createElement("input")
	var yes = document.createElement("button")
	var no = document.createElement("button")
	d.id = "inputDiv"
	i.id = "inputNum"
	i.value = cellvalue
	yes.innerText = "Y"
	no.innerText = "N"
	yes.onclick = yesB
	yes.id = "yes"
	no.onclick = noB
	no.id = "no"
	e.childNodes[1].remove();
	e.appendChild(i)
	e.appendChild(no)
	e.appendChild(yes)
	e.childNodes[0].remove();
	e.cancelBubble = true;
	i.focus()
	i.onblur = function(){
		i.focus()
	}
	document.getElementById("inputNum").onkeyup = function(x){
		var e = event.keyCode
		var bo = /^\d+$/.exec(document.getElementById("inputNum").value)
		if(e == 13){
			yes.onclick()
		}
		if(e == 27){
			no.onclick()
		}
		return
	}
}

document.addEventListener("click",function(){
	var t = event.target
	if(document.getElementById("yes")&&t.parentElement){
		var y = document.getElementById("yes")
		if(t.parentElement != y.parentElement && t != y.parentElement){
			console.log(t.parentElement)
			y.parentElement.innerHTML = cellvalue;
		}
	}
	else{
		return;
	}
})
function yesB(){
	checkedArr = []
	var ssarr = this.parentElement.parentElement.cells
	var bo = /^\d+$/.exec(document.getElementById("inputNum").value)
	if(bo){
		this.parentElement.innerHTML = document.getElementById("inputNum").value
		for(len = 2; len < ssarr.length; len++){
			checkedArr.push(ssarr[len].innerText)
		}
		upDate()
		clickarr.shift();
		clickarr.pop()
		clicknum.pop()
	}
	else{
		alert("输入有误,已返回!")
		this.parentElement.innerHTML = cellvalue;
		clickarr.shift();
		clickarr.pop()
		clicknum.pop()
	}
}
function noB(){
	this.parentElement.innerHTML = cellvalue;
	clickarr.shift();
	clickarr.pop()
	clicknum.pop()
}
