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
		<title>上天猫，就购了</title>
		<link rel="stylesheet" type="text/css" href="bootstrap-3.3.7-dist/css/bootstrap.min.css"/>
		<script src="js/jquery-3.4.1.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="bootstrap-3.3.7-dist/js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/vue.js" type="text/javascript" charset="utf-8"></script>
		<link rel="stylesheet" type="text/css" href="css/tmall.css"/>
	</head>
	<body>
		<div id="head-nav">
			<header-div :num = "shopping_trolley_list.length"></header-div>
		</div>
		<main style="min-width: 1013px;" id = "main-box">
			<div id="search">
				<div style="position: relative;padding-top: 20px;">
					<a href="newTmall.html"><img src="img/tmall.png" style="position: absolute;top: 0px;left: -8px;width: 190px;"></a>
					<input id = "search-info"type="search"placeholder="请输入搜索内容" x-webkit-speech="" x-webkit-grammar="builtin:search" lang="zh-CN">
					<button id = "search-commit"type="commit">搜索</button>
				</div>
			</div>
		</main>
		<nav id = "nav1">
			<nav-box></nav-box>
			<banner></banner>
		</nav>
		<div id="goods-info">
			<goods-box 
				v-for="goods in goodsList"
				v-bind:goods = "goods"
			></goods-box>
			<div id="" style="width: 100%;text-align: center;">
				<img src="img/site/end.png" style="margin: 40px auto;">
			</div>
		</div>
		<div id="footer">
			<footer-box></footer-box>
		</div>
		<script src="js/data.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/sessionstorage.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/load.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/click.js" type="text/javascript" charset="utf-8"></script>
	</body>
</html>


{% endraw %}