// shopping_trolley_list
// window.sessionStorage.clear()
var s = window.sessionStorage
if(!s.che){
	shopping_trolley_list = [];
}
else{
	var arr1 = s.che.split("#");
	var arr2 = [];
	for(j in arr1){
		var l = arr1[j].split("?")[0];
		for(i in goodsList){
			if(goodsList[i].img == l){
				arr2.push([goodsList[i],arr1[j].split("?")[1]])
			}
		}
	}
	shopping_trolley_list = arr2;
}
// console.log(s)
// console.log(shopping_trolley_list)