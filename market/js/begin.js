
function load(){
	loadDate()
	checkboxAll_arr = check_arr();
	//checkArr => 多选框的数组   
	creatCheckbox(checkArr_A.concat(checkArr_B),checkdiv);
	//在 checkdiv 中按照  checkArr 生成多选按钮 => id为对应的名字 中文! 会多生成一个全选按钮
	creatTable(findArr(sourceData))
	checkboxOn()
	document.getElementById("all").onclick = checkAll;
	creatCanvas()
	window.onpopstate()
}
function reset(){
		clearButton();
		document.getElementById("svgDiv").style.display = "none";
		clickarr = [];
		clicknum = [];
	}