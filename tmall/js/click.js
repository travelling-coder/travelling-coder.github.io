$("#search-commit").click(function(){
	var searchfor = document.getElementById("search-info").value;
	if(!searchfor){
		console.log("!")
		document.getElementById("search-info").placeholder = "请输入内容！"
		return false;
	}
	var arr = [];
	for(i in goodsList){
		var s = JSON.stringify(goodsList[i])
		if(s.match(searchfor)){
			arr.push(JSON.parse(s))
		}
	}
	if(arr.length == 0){
		document.getElementById("search-info").value = "";
		document.getElementById("search-info").placeholder = "查无此内容！请重新输入！"
		return false;
	}
	window.location = "./search.html" + "?" + searchfor;
})