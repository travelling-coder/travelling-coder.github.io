
Vue.component('login-box',{
	template: `
		<div class = "login">
			<table id = "login-tab">
				<tr>
					<td colspan = "2" style="text-align: center;padding: 0px;">
						<strong>登陆</strong>
					</td>
				</tr>
				<tr>
					<td>
						账号名
					</td>
					<td>
						<input type = "input" placeholder = "请输入账户名" id = "username">
					</td>
				</tr>
				<tr>
					<td>
						密码
					</td>
					<td>
						<input type = "password" placeholder = "请输入密码" id = "pass">
					</td>
				</tr>
				<tr>
					<td colspan = "2">
						<button @click= "login_b">登陆</button>
						<button @click= "resetinf()">重置</button>
						<a href = "register.html"><button>去注册</button></a>
					</td>
				</tr>
			</table>
			<table id = "logout-tab" style="margin-top: 100px">
				<tr>
					<td style="text-align: center;padding: 0px;">
						<strong>欢迎回来</strong>
					</td>
				</tr>
				<tr>
					<td style="text-align: center;padding: 0px">
						<button style= "margin: 0 auto;" @click="logout()">注销</button>
					</td>
				</tr>
			</table>
		</div>
		`,
		methods:{
			resetinf: function(){
				var i = document.getElementsByTagName("input");
				for(s in i){
					if(i[s].id == "search-info"){
						continue;
					}
					else{
						i[s].value = "";
					}
				}
			},
			login_b: function(){
				// window.localStorage.clear()
				var name = document.getElementById("username").value;
				var pas = document.getElementById("pass").value;
				var ls = window.localStorage;
				if(!name){
					alert("请输入账号！");
					return;
				}
				if(!pas){
					alert("请输入密码！");
					return;
				}
				if(!ls.user){
					alert("登陆失败，请检查账号密码！")
					return;
				}
				var u = JSON.parse(ls.user);
				console.log(u)
				for(i in u){
					if(u[i][0] == name && u[i][1] == pas){
						alert("登陆成功！")
						// console.log(sessionStorage)
						sessionStorage.setItem("user",name)
						// console.log(sessionStorage)
						location = "newTmall.html"
						return;
					}
				}
				alert("登陆失败，请检查账号密码！")
			},
			logout: function(){
				alert("已注销！")
				window.sessionStorage.clear();
				window.location += "";
			}
		}
})
Vue.component('register-box',{
	template: `
		<div class = "login">
			<table>
				<tr>
					<td colspan = "2" style="text-align: center;padding: 0px;">
						<strong>注册账号</strong>
					</td>
				</tr>
				<tr>
					<td>
						输入账号
					</td>
					<td>
						<input type = "input" placeholder = "请输入账户名" id = "username">
					</td>
				</tr>
				<tr>
					<td>
						输入密码
					</td>
					<td>
						<input type = "password" placeholder = "请输入密码" id = "pass">
					</td>
				</tr>
				<tr>
					<td>
						重复密码
					</td>
					<td>
						<input type = "password" placeholder = "再次输入密码" id = "repass">
					</td>
				</tr>
				<tr>
					<td colspan = "2">
						<button @click = "reg_b()">注册</button>
						<button @click= "resetinf()">重置</button>
						<a href= "login.html"><button>去登陆</button></a>
					</td>
				</tr>
			</table>
		</div>
		`,
		methods:{
			resetinf: function(){
				var i = document.getElementsByTagName("input");
				for(s in i){
					if(i[s].id == "search-info"){
						continue;
					}
					else{
						i[s].value = "";
					}
				}
			},
			reg_b: function(){
				// window.localStorage.clear()
				// console.log(localStorage)
				var name = document.getElementById("username").value;
				var pas = document.getElementById("pass").value;
				var repas = document.getElementById("repass").value;
				var ls = window.localStorage,
					u = [];
				console.log(ls.user)
				if(!name){
					alert("请输入账号！");
					return;
				}
				if(!pas){
					alert("请输入密码！");
					return;
				}
				if(!repas || repas != pas){
					alert("请再次输入密码或两次输入不一致！");
					return;
				}
				if(ls.user){
					u = JSON.parse(ls.user);
					
				}
				for(i = 0; i < u.length; i++){
					if(u[i][0] == name){
						alert("已有该账号名，请另注册账号！");
						return;
					}
				}
				u.push([name,pas])
				u = JSON.stringify(u)
				// console.log(u)
				localStorage.setItem("user",u)
				// console.log(localStorage)
				alert("注册成功！马上跳转到登陆页面！")
				window.location = "login.html"
			}
		}
})
var uservm = new Vue({
	el: "#user-box",
})
function loginLoad(){
	// console.log(sessionStorage.user)
	$("#logout-tab").hide()
	if(sessionStorage.user){
		$("#login-tab").hide()
		$("#logout-tab").show()
	}
}