---
layout: false
title: tmall
date: 2020-04-09 01:28:02
---
{% raw %}

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<link rel="stylesheet" type="text/css" href="./bootstrap-3.3.7-dist/css/bootstrap.min.css"/>
		<script src="./js/jquery-3.4.1.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="./bootstrap-3.3.7-dist/js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="./js/vue.js" type="text/javascript" charset="utf-8"></script>
		<link rel="stylesheet" type="text/css" href="./css/tmall.css"/>
	</head>
	<body>
		<div id="head-nav">
			<header-div :num = "shopping_trolley_list.length"></header-div>
		</div>
		<main style="min-width: 1013px;" id = "main-box">
			<div id="search">
				<div style="position: relative;padding-top: 20px;">
					<a href="newTmall.html"><img src="./img/tmall.png" style="position: absolute;top: 0px;left: -8px;width: 190px;"></a>
					<input id = "search-info"type="search"placeholder="请输入搜索内容" x-webkit-speech="" x-webkit-grammar="builtin:search" lang="zh-CN">
					<button id = "search-commit"type="commit">搜索</button>
				</div>
			</div>
		</main>
		<div id="goods-inf" style="position: relative;">
			<div id="choice" style="position: absolute;top: 10px;left: 20px;">
				<button type="button" onclick="by_sellnum()">按销量</button>
				<button type="button" onclick="by_talknum()">按评价</button>
				<button type="button" onclick="by_price()">按价格</button>
			</div>
			<new-goods-box
			v-for="goods in goodsList"
			:goods="goods"
			></new-goods-box>
		</div>
		<div id="footer">
			<footer-box></footer-box>
		</div>
		<script src="./js/data.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/sessionstorage.js" type="text/javascript" charset="utf-8"></script>
		<script src="./js/load.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/click.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
			var newarr = [];
			for(i in goodsList){
				if(goodsList[i].name == "other"){
					newarr.push(goodsList[i])
				}
			}
			function by_sellnum(){
				newarr = newarr.sort(function(x,y){
					return Number(y.sellnum) - Number(x.sellnum)
				})
			}
			function by_talknum(){
				newarr = newarr.sort(function(x,y){
					return Number(y.talknum) - Number(x.talknum)
				})
			}
			function by_price(){
				newarr = newarr.sort(function(x,y){
					return Number(x.price) - Number(y.price)
				})
			}
		</script>
		<script type="text/javascript">
			Vue.component('new-goods-box', {
							props: ['goods'],
							template: `
								<div v-bind:id="goods.name" class="goods-cell">
									<table><tr><td height = "187px" width = "187px" ><a :href=newurl(goods.img)><img v-bind:src="goods.img + '/1.jpg'"></a></td></tr></table>
									<a :href=newurl(goods.img)><span>{{goods.price}}</span></a>
									<div class="goods-cell-p">
										<a :href=newurl(goods.img)>{{goods.describe}}</a>
									</div>
									<div class = "sell-info">
										<div style= "width : 100px; border-left: none">
											月成交<strong>{{goods.sellnum}}</strong>笔
										</div>
										<div style= "width : 60px">
											评价<strong>{{goods.talknum}}</strong>
										</div>
										<div style= "width : 29px;border-right: none">
											<a href = "nothing"><img src="img/site/wangwang.png"></a>
										</div>
									</div>
								</div>
								`,
							computed: {
								newurl(){
									return function(x){
										var str = "good.html";
										var x = x.split("/")
										x.shift();
										x.shift();
										x = x.join("/")
										str = str.concat("?",x);
										return str;
									}
								}
							},
						})
			var vm1 = new Vue({
							el: "#goods-inf",
							data:{
								goodsList: newarr
							},
						})
			$("a[href=nothing]").click(function(){
				alert("nothing");
				return false;
			});
		</script>
	</body>
</html>


{% endraw %}