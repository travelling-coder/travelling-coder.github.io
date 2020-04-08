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
		<link rel="stylesheet" type="text/css" href="./css/goods.css"/>
	</head>
	<body onload = "loaded()">
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
		<div id="goodsShow">
			<goods-sell :goods = "goods"></goods-sell>
		</div>
		<div id="footer">
			<footer-box></footer-box>
		</div>
		<script src="./js/data.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/sessionstorage.js" type="text/javascript" charset="utf-8"></script>
		<script src="./js/load.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/click.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
			if(window.location.href.split("?")[1]){
				var goodsifo = window.location.href.split("?")[1].split("/");
			}
			else{
				var goodsifo = ["shose","1"];
			}
				var goods = [];
			// goodsifo = ["other",2]
			for(i in goodsList){
				if(goodsList[i].name == goodsifo[0] && goodsList[i].img.split("/")[3] == goodsifo[1]){
					goods = goodsList[i];
				}
			}
			Vue.component('goods-sell',{
				props: ["goods"],
				data: function(){
					 return {
					    value1: 1
					  }
				},
				template:`
						<div id = "mineBox">
							<div class = "goodsTitle">
								<img src = "img/timg.jpg" width = 1013px >
							</div>
							<div id = "pictureShow">
								<table><tr><td width = "428px" height = "428px">
									<img :src = 'goods.img + "/1.jpg"' id = "1p">
									<img :src = 'goods.img + "/2.jpg"' id = "2p">
									<img :src = 'goods.img + "/3.jpg"' id = "3p">
									<img :src = 'goods.img + "/4.jpg"' id = "4p">
								</td></tr></table>
								<div id = "minGoods">
									<img :src = 'goods.img + "/1.jpg"' id = "1" @click = "showPic()">
									<img :src = 'goods.img + "/2.jpg"' id = "2" @click = "showPic()">
									<img :src = 'goods.img + "/3.jpg"' id = "3" @click = "showPic()">
									<img :src = 'goods.img + "/4.jpg"' id = "4" @click = "showPic()">
								</div>
							</div>
							<div class = "goodsSellInfo">
								<div id = "describe">
									{{goods.describe}}
								</div>
								<div id = "goodsPrice">
									<table>
										<tr><td>价格：</td><td><b>￥{{goods.price * 1.3}}</b></td></tr>
										<tr><td>促销价：</td><td><strong>￥{{goods.price}}</strong></td></tr>
									</table>
								</div>
								<table id = "sellingGoods">
									<tr><td>月销量：{{goods.sellnum}}</td><td>评价：{{goods.talknum}}</td><td>送天猫积分：{{goods.price / 2}}</td></tr>
									<tr><td>品类：</td><td>{{goods.name}}</b></td></tr>
									<tr><td>运费</td><td>运至<select><option>成都</option><option>重庆</option></select>需要 <span style="color: #0056B3; text-decoration: underline ">￥0.00</span> 元</td></tr>
									<tr><td>数量：<input v-model = "value1" id = "howmany"></input><button id = "up" @click = "addnum()">+</button><button id = "down" @click = "popnum()">-</button></td><td>库存：111</td></tr>
									<tr><td></td><td><button id = "go"  @click = "buy()">立即购买</button></td><td><button id = "che" @click = "che()">加入购物车</button></td></tr>
								</table>
							</div>
							<div id = "show_talk">
								<div id = "button_show"><button id = "show_b" @click = "buttonClick()">产品详情</button><button id = "talk_b" @click = "buttonClick()">所有评论</button></div>
								<div id = "show">产品描述。。。</div>
								<div id = "talk">产品评论。。。</div>
							</div>
						</div>
				`,
				computed:{
					picShow : function(){
							var arr = []
							for(i = 0; i < 4; i ++){
								var imgifo = goods.img + "/" + (i + 1)
								arr.push(imgifo)
							}
							console.log(arr)
							return arr;
					}
				},
				methods:{
					showPic: function(){
						for(i = 0; i < 4; i++){
							$("#" + (i + 1) + "p").hide()
						}
						$("#" + event.target.id + "p").show()
					},
					buttonClick: function(){
						if(event.target.id == "show_b"){
							$("#show").hide()
							$("#talk").show()
							$("#show_b").addClass("clicked")
							$("#talk_b").removeClass("clicked")
						}
						else{
							$("#show").show()
							$("#talk").hide()
							$("#show_b").removeClass("clicked")
							$("#talk_b").addClass("clicked")
						}
					},
					addnum: function(){
						var l = document.getElementById("howmany").value;
						document.getElementById("howmany").value = Number(l) + 1;
					},
					popnum: function(){
						var l = document.getElementById("howmany").value;
						if(l == 1){
							return;
						}
						document.getElementById("howmany").value = l - 1;
					},
					buy: function(){
						var ss;
						console.log(window.sessionStorage)
						if(!window.sessionStorage.buy){
							ss = this.goods.img + "?" + document.getElementById("howmany").value;
						}
						else{
							ss = window.sessionStorage.buy;
							ss += "#" + this.goods.img + "?" +  document.getElementById("howmany").value;
						}
						window.sessionStorage.setItem("buy",ss)
						var str = `你将买${document.getElementById("howmany").value}个${this.goods.name}，将花费${document.getElementById("howmany").value * this.goods.price}`
						alert(str)
					},
					che: function(){
						var ss;
						if(!window.sessionStorage.che){
							ss = this.goods.img + "?" + document.getElementById("howmany").value;
						}
						else{
							ss = window.sessionStorage.che;
							if(ss.match(this.goods.img)){
								var l = ss.split("#"), arr = [];
								for(i in l){
									var s = l[i].split("?");
									if(s[0] == this.goods.img){
										s[1] = (Number(s[1]) + Number(document.getElementById("howmany").value))
									}
									arr.push(s.join("?"))
								}
								ss = arr.join("#")
							}
							else{
								ss += "#" + this.goods.img + "?" +  document.getElementById("howmany").value;
							}
						}
						window.sessionStorage.setItem("che",ss)
						window.location += ""
						alert("已加入购物车！")
					}
				}
			})
			var goodsSell = new Vue({
				el: "#goodsShow",
				data:{
					goods : goods
				}
			})
		</script>
		<script src="js/goods.js" type="text/javascript" charset="utf-8"></script>
	</body>
</html>

{% endraw %}