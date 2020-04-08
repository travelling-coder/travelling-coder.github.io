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
		<link rel="stylesheet" type="text/css" href="css/goods.css"/>
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
		<div id="trolley">
			<!-- <goods-title>
			</goods-title> -->
			<div style="width: 1013px;margin: 3px auto;background-color: #f7f7f7;font-size: 18px;padding: 10px;">{{messages}}</div>
			<goods-totle
			v-for = "goods in trolleyList"
			:goods="goods">
			</goods-totle>
			<goods-over
			:goods="trolleyList">
			</goods-over>
		</div>
		<div id="footer">
			<footer-box></footer-box>
		</div>
		<script src="./js/data.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/sessionstorage.js" type="text/javascript" charset="utf-8"></script>
		<script src="./js/load.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/click.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
			Vue.component('goods-totle',{
				props:["goods"],
				template:`
					<div style = "width: 1013px; margin: 0 auto; text-align: left;" :id = "goods[0].img + goods[0].name">
						<table id = "goods-sell">
							<tr>
								<td style = "width: 100px"><img :src = "goods[0].img + '/1.jpg'" width = "100px" height = "100px"></td>
								<td>{{goods[0].describe}}</td>
								<td style = "width: 150px">单价：￥{{Number(goods[0].price).toFixed(2)}}</td>
								<td style = "width: 100px; position: relative;">数量：<input :value = "goods[1]" style="width: 30px">
										<div style="position: absolute; top: 30px;right: 20px">
											<button id = "up" @click = "add()">+</button>
											<button id = "down" @click = "pop()">-</button>
										</div>
								</td>
								<td style = "width: 150px"><strong style= "color: red;font-size: 16px">总价：￥{{(goods[0].price * goods[1]).toFixed(2)}}</strong></td>
								<td style = "width: 100px"><button id = "out" @click.stop= "removeGoods()">移除</button><input type = "checkbox" :id = 'goods[0].img' checked = true ></td>
							</tr>
						</table>
					</div>
				`,
				methods:{
					removeGoods: function(){
						var id =  this.goods[0].img + this.goods[0].name;
						var ss = sessionStorage.che.split("#")
						var arr = [];
						for(i in ss){
							if(ss[i].split("?")[0] == this.goods[0].img){
								continue;
							}
							arr.push(ss[i]);
						}
						window.sessionStorage.setItem("che",arr.join("#"))
						window.location +=""
						document.getElementById(id).remove()
					},
					add: function(){
						var s = 1 + Number(this.goods[1])
						this.$set(this.goods,1,s)
					},
					pop: function(){
						if(this.goods[1] == 1){
							return;
						}
						var s = -1 + Number(this.goods[1])
						this.$set(this.goods,1,s)
					}
				}
			})
			// Vue.component('goods-title',{
			// 	template:`
			// 		<p>1</p>
			// 	`
			// })
			Vue.component('goods-over',{
				props:["goods"],
				template:`
					<div style = "width: 1013px; margin: 0 auto; height: 50px">
						<button @click = "pay()" style = "float: right; border: none; background-color: #aa0000;color: white;width: 130px;height: 30px;margin-top: 10px">结账</button>
					</div>
				`,
				methods:{
					pay: function(){
						var c = [], p = 0;
						for(i in this.goods){
							if(document.getElementById(this.goods[i][0].img).checked){
								p += this.goods[i][0].price * this.goods[i][1]
							}
						}
						alert("你需要支付" + p + "元");
					}
				}
			})
			var goodsvm = new Vue({
				el:"#trolley",
				data:{
					trolleyList: shopping_trolley_list,
					// checkedList: []
				},
				computed:{
					messages: function(){
						var ss = window.sessionStorage.che
							if(!ss){
								var n = "没有商品，马上去购物吧~"
								return n;
							}
							else{
								return "欢迎来到天猫！";
							}
						}
				}
			})
		</script>
	</body>
</html>


{% endraw %}