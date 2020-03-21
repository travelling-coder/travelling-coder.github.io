var cellsnum, cellvalue, checkedArr = [], checkedNum;
function tdOn_click(){
	

	console.log(cellsnum, cellvalue)
	var arr = [] , s = this.parentElement.rowIndex;
	// if(!s){
	// 	s = this.parentElement.parentElement.rowIndex
	// }
	// console.log(this.)
		// console.log(this.parentElement)
	for(l = 0; l < this.parentElement.cells.length; l++){
		if(this.parentElement.cells[l].innerText == "NY"){
			console.log(cellvalue)
			arr.push(cellvalue)
		}
		else{
			arr.push(this.parentElement.cells[l].innerText)
		}
	}
	// console.log(this)
	console.log(arr)
	creat_pic(arr)
	// console.log(arr)
	// console.log(clickarr,"进入的")
	// console.log(s == clicknum[l-1])
	for(l = 1; l < clickarr.length; l++){
		if(s == clicknum[l-1]){
			// console.log(clickarr,"有相等的 进入判断")
			// clickarr.splice(l,1)
			// clickarr.push(arr)
			// drawLine()
			return;
		}
	}
	if(this.innerText == "NY"||this.parentElement.innerText == "NY"){
		// console.log(this.parentElement)
		return
	}
	// console.log(s)
	if(clicknum.length == 4){
		clicknum.splice(0,1)
		clickarr.splice(0,1)
	}
	// console.log(clicknum.length)
	clicknum.push(s)
	clickarr.push(arr)
	// console.log(this.parentElement.rowIndex)
	// console.log(clickarr,"出来的")
	// console.log(clickarr)
	
	// console.log("qqqq")
	// console.log("click",clicknum)
	drawLine()
}
//点击事件  但有问题    没能实现功能
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
		if(l[i].innerText == "NY"){
			imarr.push(cellvalue)
		}
		else{
			imarr.push(l[i].innerText)
		}
	}
	// if(this.innerText != "NY"){
		// console.log(clickarr[clickarr.length - 1].toString())
		// if(clickarr[clickarr.length - 1].toString() != imarr.toString()){
			clickarr.unshift(imarr);
		// }
	// }
	// console.log(clickarr)
	// console.log(this.parentElement.rowIndex)
	// console.log("in",clicknum)
	drawLine()
	if(this.innerText == "NY"){
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
	// console.log(clickarr)
	for(i = 1; i < table.rows.length; i++)
	{
		table.rows[i].cells[s].className = "";
	}
	this.parentElement.className = "";
	this.className = ""
	if(this.innerText == "NY"){
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
	// console.log(e)
	// console.log(e)
	clickarr.shift()
	cellvalue = e.innerText
	cellsnum = e.cellIndex
	console.log(cellvalue)
	// console.log(e)
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

	// d.appendChild(i)
	// e.innerHTML = "";
	// console.log(e.childNodes[1])
	e.childNodes[1].remove();
	// console.log(e.childNodes[1])
	e.appendChild(i)
	e.appendChild(no)
	e.appendChild(yes)
	e.childNodes[0].remove();
	e.cancelBubble = true;
	i.focus()
	i.onblur = function(){
		i.focus()
	}
	// console.log(document.getElementById("yes"))
	document.getElementById("inputNum").onkeyup = function(x){
		var e = event.keyCode
		var bo = /^\d+$/.exec(document.getElementById("inputNum").value)
		if(e == 13){
			// if(bo){
			// 	this.parentElement.innerHTML = document.getElementById("inputNum").value}
			// else{
			// 	alert("输入有误,已返回!")
			// 	this.parentElement.innerHTML = cellvalue;
			// }
			yes.onclick()
		}
		if(e == 27){
			// this.parentElement.innerHTML = cellvalue;
			no.onclick()
		}
		return
	}
}
document.addEventListener("click",function(){
	var t = event.target
	// console.log(t)
	// console.log(document.getElementById("yes"))
	if(document.getElementById("yes")&&t.parentElement){
		var y = document.getElementById("yes")
		if(t.parentElement != y.parentElement && t != y.parentElement){
			console.log(t.parentElement)
			y.parentElement.innerHTML = cellvalue;
			// clickarr.shift();
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
		// console.log(checkedArr)
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

//td中的set事件

// table.addEventListener("mouseover",tdOnfocus,true)
// table.addEventListener("mouseout",tdOnblur,true)