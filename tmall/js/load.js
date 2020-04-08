
Vue.component('header-div',{
	props:["num"],
	template: `
		<div class = head-nav >
			<div class = "head-nav-left">
				<a href = "newTmall.html">
					<span style="color:#C40000;margin:0px" class=" glyphicon glyphicon-home"></span>
					天猫首页
				</a>
				喵！欢迎来天猫
				<a href = "login.html">{{vister}}</a>
				<a href = "register.html">免费注册</a>
			</div>
			<div class = "head-nav-right">
				<a href = "nothing">我的订单</a>
				<a href = "shopping_trolley.html">
					<span style="color:#C40000;margin:0px" class=" glyphicon glyphicon-shopping-cart"></span>
					购物车{{num}}件
				</a>
			</div>
		</div>
		`,
	computed:{
		vister: function(){
			if(!window.sessionStorage.user){
				return "请登录";
			}
			else{
				return window.sessionStorage.user
			}
		}
	}
})
if(document.getElementById("head-nav")){
	var header = new Vue({
					el: "#head-nav",
					data:{
						shopping_trolley_list: shopping_trolley_list,
					},
				})
}
//抬头，登陆header
			
Vue.component('nav-box',{
	template: `
			<nav id = "page-top">
				<div id = "head-left">
					<span style="margin-left:10px" class="glyphicon glyphicon-th-list">
					</span><span style="margin-left: 10px;">商品分类</span>
				</div>
				<div class = "head-right">
					<span><a href="nothing">天猫超市</a></span>
					<span><a href="nothing">天猫国际</a></span>
					<span><a href="nothing">服饰箱包</a></span>
					<span><a href="nothing">家用电器</a></span>
				</div>
				<ul id = "goods-class-nav" class="list-unstyled">
					<li><a href="shose.html"><span class="glyphicon glyphicon-link"></span>女鞋/男鞋</a></li>
					<li><a href="wine.html"><span class="glyphicon glyphicon-link"></span>酒类</a></li>
					<li><a href="other.html"><span class="glyphicon glyphicon-link"></span>其他</a></li>
					<li><a href="nothing"><span class="glyphicon glyphicon-link"></span>测试用例</a></li>
					<li><a href="nothing"><span class="glyphicon glyphicon-link"></span>测试用例</a></li>
					<li><a href="nothing"><span class="glyphicon glyphicon-link"></span>测试用例</a></li>
					<li><a href="nothing"><span class="glyphicon glyphicon-link"></span>测试用例</a></li>
					<li><a href="nothing"><span class="glyphicon glyphicon-link"></span>测试用例</a></li>
					<li><a href="nothing"><span class="glyphicon glyphicon-link"></span>测试用例</a></li>
					<li><a href="nothing"><span class="glyphicon glyphicon-link"></span>测试用例</a></li>
					<li><a href="nothing"><span class="glyphicon glyphicon-link"></span>测试用例</a></li>
					<li><a href="nothing"><span class="glyphicon glyphicon-link"></span>测试用例</a></li>
					<li><a href="nothing"><span class="glyphicon glyphicon-link"></span>测试用例</a></li>
				</ul>
			</nav>
		`
})
if($("#nav1").length != 0){
Vue.component('banner',{
	template:`
			<div id = "banner">
				<div>
					<div class="loge img-responsive">
						<a href="nothing"><img src="img/lunbo/1.jpg" ></a>
					</div>
					<div class="loge img-responsive hidden">
						<a href="nothing"><img src="img/lunbo/2.jpg" ></a>
					</div>
					<div class="loge img-responsive hidden">
						<a href="nothing"><img src="img/lunbo/3.jpg" ></a>
					</div>
					<div class="loge img-responsive hidden">
						<a href="nothing"><img src="img/lunbo/4.jpg" ></a>
					</div>
				</div>
			</div>
		`
})
var nav = new Vue({
	el: "#nav1"
})	
}

//nav菜单和banner

var banner_list;
var bannerNum = 0;
if(document.getElementById("banner")){
	banner_list = document.getElementById("banner").childNodes[0].childNodes;
	(function change_banner(){
		banner_list[2 * bannerNum].className = "hidden";
		bannerNum++;
		if(bannerNum == 4){
			bannerNum = 0;
		}
		banner_list[2 * bannerNum].className = "none";
		setTimeout(function(){
			change_banner()
		},4000)
	})()
}
//banner滚屏	

var newarr = goodsList;
Vue.component('goods-box', {
				props: ['goods'],
				template: `
					<div v-bind:id="goods.name" class="goods-cell">
						<table><tr><td height = "187px" width = "187px"><a :href=newurl(goods.img)><img v-bind:src="goods.img + '/1.jpg'"></a></td></tr></table>
						
						<div class="goods-cell-p">
							<a :href=newurl(goods.img)>{{goods.describe}} {{goods.name}}</a>
						</div>
						<a :href=newurl(goods.img)><span>{{goods.price}}</span></a>
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
				}
			})
if(document.getElementById("goods-info")){
	var vm1 = new Vue({
					el: "#goods-info",
					data:{
						goodsList: newarr
					},
				})
}


Vue.component('footer-box', {
				template: `
					<div style="width: 100%;min-width: 1013px;position: relative;">
								<div class="grey-line1">
								</div>
								<div class="grey-line2">
								</div>
								<div class="red-line">
								</div>
								<div style="margin: 10px auto;width: 982px;">
									<a href="nothing"><img src="./img/ensure.png" ></a>
									<div class="foot-nav">
										<div>
											<strong>购物指南</strong>
											<a href="nothing">免费注册</a>
											<a href="nothing">开通支付宝</a>
											<a href="nothing">支付宝充值</a>
										</div>
										<div>
											<strong>天猫保障</strong>
											<a href="nothing">发票保障</a>
											<a href="nothing">售后规则</a>
											<a href="nothing">缺货赔付</a>
										</div>
										<div>
											<strong>支付方式</strong>
											<a href="nothing">快捷支付</a>
											<a href="nothing">信用卡</a>
											<a href="nothing">蚂蚁花呗</a>
											<a href="nothing">货到付款</a>
										</div>
										<div>
											<strong>商家服务</strong>
											<a href="nothing">商家中心</a>
											<a href="nothing">商家入驻</a>
											<a href="nothing">天猫规则</a>
											<a href="nothing">天猫智库</a>
											<a href="nothing">运营服务</a>
										</div>
										<div>
											<strong>手机天猫</strong>
											<a href="nothing"><img src="./img/site/canvas.png"></a>
										</div>
									</div>
									<div class="foot-bottom">
										<img src="./img/site/cateye.png" >
									</div>
								</div>
								<div class="foot-last">
									<div class="foot-last-about-tmall">
										<a href="nothing" style="padding-left: 0px;">关于天猫</a>
										<a href="nothing">帮助中心</a>
										<a href="nothing">开放平台</a>
										<a href="nothing">诚聘英才</a>
										<a href="nothing">联系我们</a>
										<a href="nothing">网站合作</a>
										<a href="nothing">法律声明</a>
										<a href="nothing">知识产权</a>
										<a href="nothing">廉政举报</a>
										<div class="foot-last-other">
											<a href="nothing" style="padding-left: 0px;">阿里巴巴集团</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">淘宝网</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">天猫</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">聚划算</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">全球速卖</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">阿里国际交易市场</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">1688</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">阿里妈妈</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">阿里旅行</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">阿里云</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">阿里通信</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">YunOS</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">万网</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">高德</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">优视</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">友盟</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">虾米</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">天天动听</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">来往</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">钉钉</a>
											<span style="padding-left: 8px;">|</span>
											<a href="nothing">支付宝</a>
											<span style="padding-left: 8px;">|</span>
											<a href="https://www.programape.top"><strong>博客</strong></a>
											<p>增值电信业务经营许可证： 浙B2-20110446 网络文化经营许可证：浙网文[2015]0295-065号 互联网医疗保健信息服务 审核同意书 浙卫网审【2014】6号 互联网药品信息服务资质证书编号：浙-（经营性）-2012-0005</p>
											<p style="color: #717171;">© 2003-2016 TMALL.COM 版权所有</p>
											<img src="./img/site/copyRight1.jpg" >
											<img src="./img/site/copyRight2.jpg" >
										</div>
									</div>
								</div>
							</div>
					`
			})
var footer = new Vue({
				el: "#footer",
			})
//页脚责任声明等等
$("a[href=nothing]").click(function(){
	alert("nothing");
	return false;
});
//nothing链接设置不跳转