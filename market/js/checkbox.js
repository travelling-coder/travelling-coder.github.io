var table = document.getElementById("saleInformation")
var checkdiv =document.getElementById("checkboxDiv")
var checkArr_A = [], checkArr_B = [], checkBox_on_A = [], checkBox_on_B = [];
var table_title = [];//一月二月的title
var checkTable = [];//获取所选的对应数组  用来创建table
var checkboxAll_arr = [];//所有的checkbox的汇总
var baseArr = [];
function findArr(arr, indexOfimword){
	indexOfimword = indexOfimword||0;
	var newarr = [];
	table_title = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
	table_title.unshift("地区");
	if(indexOfimword == 1){
		table_title.splice(1,0,"货品")
	}
	else{
		table_title.unshift("货品");
	}
	//获取关键字
	
	var interimArr = [];
	for(i in arr){
		interimArr.push([]);
		var ss = Object.values(arr[i]);
		for(s in ss[2]){
			interimArr[i].push(ss[2][s])
		}
		interimArr[i].unshift(ss[1 - indexOfimword]);
		interimArr[i].unshift(ss[indexOfimword]);
		var mathOront = -1;
		for(l in newarr){
			if(interimArr[i][0] == newarr[l][0]){
				newarr.splice(l,0,interimArr[i])
				mathOront = 1;
				break;
			}
			mathOront = -1;
		}
		if(mathOront == -1){
			newarr.push(interimArr[i]);
		}
	}
	//数组 按关键字 排序  已获得分好类的数组
	return newarr;
}
function creatLable(name){
	s = document.createElement("label");
	s.innerHTML = name;
	s.setAttribute("for", name);
	return s;
}
function creatChecked(name){
	s = document.createElement("input");
	s.id = name;
	s.type = "checkbox";
	s.checked = true;
	return s;
}

function creatCheckbox(arr, parent){
	for(i in arr){
		parent.appendChild(creatLable(arr[i]));
		var s = creatChecked(arr[i]);
		s.onclick = checkChange;
		parent.appendChild(s);
	}
	parent.appendChild(creatLable("全选"));
	parent.appendChild(creatChecked("all"));
}

function cleanTable(){
	for(i=table.childNodes.length - 1; i >= 0; i--){
		table.childNodes[i].remove();
	}
	console.log("Table cleanup")
}

function creatTable(arr){
	cleanTable();
	var new_tr = document.createElement("tr");
	for(i in table_title){
		var new_td = document.createElement("td");
		new_td.innerText = table_title[i];
		new_tr.appendChild(new_td);
		new_tr.id = "table-title";
	}
	table.appendChild(new_tr);
	for(i = 0; i < arr.length; i++){
		new_tr = document.createElement("tr");
		for(j = 0; j < arr[i].length; j++){
			var new_td = document.createElement("td");
			new_td.innerText = arr[i][j];
			// if( j > 1){
			// 	// new_td.addEventListener("mouseenter",tdOnfocus,false)
			// 	new_td.addEventListener("mouseenter",function(){
			// 		var e = event.target;
			// 		var s = event.target.cellIndex;
			// 		// console.log(e)
			// 		if(e == table||s < 2||e.parentElement == document.getElementById("table-title")){
			// 			// console.log(e)
			// 			return;
			// 		}
			// 		if(!s){
			// 			e = e.parentElement;
			// 			s = e.cellIndex;
			// 			if(s < 2){
			// 				return
			// 			}
			// 		}
			// 		// console.log(e)
			// 		for(i = 1; i < table.rows.length; i++)
			// 		{
			// 			table.rows[i].cells[s].className = "hover"
			// 			// console.log(table.rows[i].cells[s])
			// 		}
			// 		// console.log(s)
			// 		// console.log(table.rows)
			// 		e.parentElement.className = "hover";
			// 		e.className = "td-hover"
			// 		// e.parentElement.childNodes[0].className = "color-off"
			// 		// e.parentElement.childNodes[1].className = "color-off"
					
			// 		var l = e.parentElement.childNodes,imarr = [];
			// 		for(i = 0; i < l.length; i++){
			// 			imarr.push(l[i].innerText)
			// 		}
			// 		// console.log(imarr)
			// 		clickarr.unshift(imarr);
			// 		// console.log( "unshift" + clickarr.length)
			// 		// console.log(clickarr)
			// 		drawLine()
			// 		tdOnfocus()
			// 		event.stopPropagation();
			// 		console.log(222)
			// 	},false)
				
			// 	// new_td.addEventListener("mouseleave",tdOnblur,false)
				
			// 	new_td.addEventListener("mouseleave",function(){
			// 		var e = event.target;
			// 		var s = event.target.cellIndex;
			// 		if(e == table||s < 2||e.parentElement == document.getElementById("table-title")){
			// 			// console.log(e)
			// 			return;
			// 		}
			// 		if(!s){
			// 			e = e.parentElement;
			// 			s = e.cellIndex;
			// 			if(s < 2){
			// 				return
			// 			}
			// 		}
			// 		clickarr.shift();
			// 		for(i = 1; i < table.rows.length; i++)
			// 		{
			// 			table.rows[i].cells[s].className = "";
			// 		}
			// 		e.parentElement.className = "";
			// 		e.className = ""
			// 		// e.parentElement.childNodes[0].className = "color-off"
					
			// 		// console.log( "shift" + clickarr.length)
			// 		tdOnblur()
			// 		event.target.stopPropagation;
			// 		// console.log(event.target)
			// 	},false)
			// }
			if(j<2){
				new_td.className = "color-off"
			}
			new_tr.appendChild(new_td);
		}
		table.appendChild(new_tr);
	}
	tableClass()
	for(i = 1; i < table.rows.length; i++){
		for(j = 2; j < table.rows[i].cells.length; j++){
			table.rows[i].cells[j].onclick = tdOn_click
			table.rows[i].cells[j].onmouseenter = mousein
			table.rows[i].cells[j].onmouseleave = mouseoff
		}
	}
	
}

function check_arr(){
	var s = [], l = [],
		a, b, c, d;
	for(i in sourceData){
		a = sourceData[i].product;
		b = sourceData[i].region;
		c = 1;
		d = 1;
		for(ia = 0; ia < s.length; ia++){
			if(a == s[ia]){
				c = -1;
				break;
			}
		}
		for(ib in l){
			if(b == l[ib]){
				d = -1;
				break;
			}
		}
		if(c == 1)s.push(a);
		if(d == 1)l.push(b);
	}
	checkArr_A = s;//货品的选择框
	checkArr_B = l;//地区的选择框
	return s.concat(l)
}

function checkboxOn(x){
	checkBox_on_A = [];
	checkBox_on_B = [];
	var p = [], r = [];
	var c = document.getElementsByTagName("input");
	for(i = 0; i < checkArr_A.length; i++){
		if(c[i].checked == true){
			checkBox_on_A.push(c[i].id)
			p.push(i)
		}
	}
	for(i = checkArr_A.length; i < c.length - 1; i++){
		if(c[i].checked == true){
			checkBox_on_B.push(c[i].id)
			r.push(i)
		}
	}
	// console.log(12)
	// window.location.hash = "#" + ["/"].concat(p,["/"],r).join("")
	//哈希赋值
	// console.log(x)
	if((x&&!x.parentElement)||!x){
		return
	}
	// console.log(2)
	var h = window.location.href.split("?")
	window.history.pushState({},null,h[0]+"?"+p.join("")+"?"+r.join(""))
	//history
	// console.log("#"+["/"].concat(checkBox_on_A,["/"],checkBox_on_B).join(""))
	// console.log(window.location.hash)
	// console.log(checkBox_on_A)
	// console.log(checkBox_on_B)
}

// window.onhashchange = function(){
// 	var s = window.location.hash
// 	var p = s.split("/")[1], r = s.split("/")[2];
// 	// console.log("asd".split(""))
// 	p = p.split("");
// 	r = r.split("");
// 	var c = document.getElementsByTagName("input");//此处完善需要加一个p和r为空的处理办法,以及同为空时为p赋一个初始值
// 	// console.log(c)
// 	for(i = 0; i < c.length - 1; i++){
// 		c[i].checked = false
// 	}
// 	checkBox_on_A = [];
// 	checkBox_on_B = [];
// 	for(i in p){
// 		checkBox_on_A.push(c[p[i]].id)
// 		c[p[i]].checked = true;
// 	}
// 	for(i in r){
// 		checkBox_on_A.push(c[r[i]].id)
// 		c[r[i]].checked = true;
// 	}
// 	checkChange()
// }

window.onpopstate = function(){
	// console.log(1)
	// console.log(window.location.href.split("?")[1])
	if(!window.location.href.split("?")[1]){
		return
	}
	var h = window.location.href.split("?")
	var p = h[1].split(""),r = h[2].split("")
	if(!p&&!r){
		p = [0];
	}
	var c = document.getElementsByTagName("input")
	for(i = 0; i < c.length - 1; i++){
		c[i].checked = false
	}
	checkBox_on_A = [];
	checkBox_on_B = [];
	for(i in p){
		checkBox_on_A.push(c[p[i]].id)
		c[p[i]].checked = true;
	}
	for(i in r){
		checkBox_on_A.push(c[r[i]].id)
		c[r[i]].checked = true;
	}
	checkChange()
}



function checkChange(){
	checkTable = [];
	var s = [];
	
	checkboxOn(event.target);
	// console.log(checkBox_on_A,checkBox_on_B)
	if(!checkBox_on_A[0] && !checkBox_on_B[0]){
		event.target.checked = true;
		// console.log(" 全空 ")
		// console.log(checkTable)
		document.getElementById("all").checked = false;
		return;
	}
	if(!checkBox_on_A[0]){
		for(i in checkBox_on_B){
			for(j in sourceData){
				if(checkBox_on_B[i] == sourceData[j].region){
					checkTable.push(sourceData[j]);
				}
			}
		}
		// console.log(" 货品空 ")
		creatTable(findArr(checkTable,1))
		document.getElementById("all").checked = false;
		// console.log(checkTable)
		return;
	}
	if(!checkBox_on_B[0]){
		for(i in checkBox_on_A){
			for(j in sourceData){
					// console.log(checkTable)
				if(checkBox_on_A[i] == sourceData[j].product){
					checkTable.push(sourceData[j]);
					// console.log(checkTable)
					// console.log(sourceData[j].sale)
				} 
			}
		}
		// console.log(" 产地空 ")
		// console.log(checkTable)
		creatTable(findArr(checkTable));
		document.getElementById("all").checked = false;
		// console.log(checkTable)
		return;
	}
	if(checkBox_on_A.length == 3 && checkBox_on_B.length == 3){
		document.getElementById("all").checked = true;
		creatTable(findArr(sourceData));
	}
	else{
		for(i in checkBox_on_A){
			for(j in checkBox_on_B){
				for(l in sourceData){
					if(checkBox_on_B[j] == sourceData[l].region && checkBox_on_A[i] == sourceData[l].product){
						checkTable.push(sourceData[l]);
					}
				}
			}
		}
		creatTable(findArr(checkTable))
		document.getElementById("all").checked = false;
		// console.log(checkTable)
	}
}

function checkAll(){
	// console.log(checkboxAll_arr)
	if(this.checked == true){
		for(i in checkboxAll_arr){
			document.getElementById(checkboxAll_arr[i]).checked = true;
			checkChange()
		}
	}
	else{
		for(i = 1; i < checkboxAll_arr.length; i++){
			document.getElementById(checkboxAll_arr[i]).checked = false;
		}
		document.getElementById(checkboxAll_arr[0]).checked = true;
		checkChange()
	}
}

function tableClass(){
	var s = null, len = table.rows, n;
	for(i = 1; i < len.length; i++){
		if(s != len[i].cells[0].innerHTML){
			s = len[i].cells[0].innerHTML;
			n = 1;
			for(j = i; j < len.length - 1; j++){
				if(s != len[j + 1].cells[0].innerHTML){
					break;
				}
				len[j + 1].cells[0].style.display = "none";
				// console.log(len[j + 1].cells[0])
				n++;
			}
			// console.log(n)
			len[i].cells[0].rowSpan = n;
		}
	}
}
