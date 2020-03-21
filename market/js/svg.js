			var s = ["asd3","qw22",12,23,43,23,23,43,23,54,65,43,62,53]
			var d = document.getElementById("svgDiv")
			function creat_pic(arr,svg_id){
				d.style.display = "block";
				for(i = d.childNodes.length - 1; i > 0; i--){
					d.childNodes[i].remove();
				}
				var a = [];
				var m = document.createElementNS('http://www.w3.org/2000/svg',"svg")
				for(i = 2; i < arr.length; i++){
					a.push(arr[i])
				}
				m.setAttribute("width",600)
				m.setAttribute("height",300)
				m.id = svg_id
				d.appendChild(m)
				//创建svg
				var len = a.length;
				var m = document.getElementById(svg_id)
				var n = Math.max.apply(Math,a);
				var w = len*(30 + 10) + 20;
				//变量
				var t = document.createElementNS('http://www.w3.org/2000/svg',"text")
				t.setAttribute("x", 210)
				t.setAttribute("y", 30)
				t.style = "font-size:24"
				t.innerHTML = arr[0] + arr[1] + "销量"
				m.appendChild(t)
				//抬头
				var line = document.createElementNS('http://www.w3.org/2000/svg',"polyline")
				line.setAttribute("points","50,50 50,250 540,250");
				line.setAttribute("style","stroke: black;stroke-width: 2px;fill:white")
				m.appendChild(line)
				//创建框架
				for(i = 1; i < 5; i++){
					var t = document.createElementNS('http://www.w3.org/2000/svg',"text")
					t.setAttribute("x", 0)
					t.setAttribute("y", 255 - i*45)
					t.innerHTML = (n*i/4).toFixed(1);
					m.appendChild(t)
					var l = document.createElementNS('http://www.w3.org/2000/svg',"line")
					l.setAttribute("x1",50);
					l.setAttribute("y1",249 - i*45);
					l.setAttribute("x2",540);
					l.setAttribute("y2",249 - i*45);
					l.style = "stroke:#3427bf;opacity:0.6"
					m.appendChild(l)
				}
				//横向 坐标和数据 以及参考线
				for(i in a){
					var j = document.createElementNS('http://www.w3.org/2000/svg',"g")
					var g = document.createElementNS('http://www.w3.org/2000/svg',"rect")
					g.setAttribute("x", 60 + 40*i)
					g.setAttribute("y", 249 - (a[i]/n)*180)
					g.setAttribute("width", 30)
					g.setAttribute("height", (a[i]/n)*180)
					g.setAttribute("style","fill: #00aaff;")
					var t = document.createElementNS('http://www.w3.org/2000/svg',"text")
					t.setAttribute("x", 60 + 40*i)
					t.setAttribute("y", 270)
					t.innerHTML = Number(i) + 1 + "月"
					
					j.appendChild(g)
					j.appendChild(t)
					
					j.onmouseover = function(){
						this.childNodes[0].setAttribute("style","fill: #0000FF;")
						this.childNodes[1].setAttribute("style","fill: #00ffd5;")
					}
					j.onmouseout = function(){
						this.childNodes[0].setAttribute("style","fill: #00aaff;")
						this.childNodes[1].setAttribute("style","fill: #000000;")
					}
					m.appendChild(j)
				}
				//直方图
			}