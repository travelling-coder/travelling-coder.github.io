			var ctx = document.getElementById("canvasLine").getContext("2d")
			var ctx2 = document.getElementById("mouseOnLine").getContext("2d")
			var lineColor = ["black","#ff0000","#00ff00","#00aaff","#aa0000"]
			var clickarr = [],clicknum = [];
			var maxNum = 0;
			function creatCanvas(){
				ctx.beginPath()
				ctx.strokeStyle = "black"
				ctx.lineWidth = 2
				ctx.moveTo(50,50)
				ctx.lineTo(50,255)
				ctx.moveTo(40,250)
				ctx.lineTo(510,250)
				ctx.stroke()
				ctx.globalAlpha = 0.2
				ctx.lineWidth = 1
				ctx.textAlign = "center"
				ctx.font = "18px Arial"
				for(i in [1,2,3,4]){
					ctx.moveTo(50,70+45*i)
					ctx.lineTo(510,70+45*i)
				}
				for(i = 0; i < 12; i++){
					ctx.moveTo(60+40*i,250)
					ctx.lineTo(60+40*i,50)
					ctx.globalAlpha = 0.7
					ctx.fillText( i + 1 +"月", 60 + 40 * i, 270)
					ctx.globalAlpha = 0.2
				}
				ctx.stroke()
			}
			
			function clearButton(){
				ctx2.clearRect(0,0,600,300)
				// console.log("lineClearUp")
			}
			
			function max_num(){
				var maxnumber = []
				for(i in clickarr){
					var newArr = []
					for(j = 2; j < clickarr[i].length; j++){
						newArr.push(clickarr[i][j])
					}
					maxnumber.push(Math.max.apply(null,newArr))
				}
				maxNum = Math.max.apply(null,maxnumber)
			}
			//找出已点击的数组的最大值
			function click(){
				// ctx2.save()
				ctx2.beginPath()
				var x,y,imArr = [];
				for(i in clickarr){
					var newArr = []
					for(j = 2; j < clickarr[i].length; j++){
						newArr.push(clickarr[i][j])
					}
					imArr.push(newArr)
				}
				ctx2.globalAlpha = 0.5
				for(i in [1,2,3,4]){
					x = 45;
					y = 70 + 45 * i;
					ctx2.fillStyle = "black"
					ctx2.textAlign = "right"
					ctx2.textBaseline = "middle"
					ctx2.font = "18px Arial"
					ctx2.fillText((maxNum*(4-i)/4).toFixed(0),x,y)
				}
				for(i in imArr){
					ctx2.beginPath()
					if(i == 0){
						ctx2.globalAlpha = 1
					}
					else{
						ctx2.globalAlpha = .5
					}
					ctx2.strokeStyle = lineColor[i]
					ctx2.fillStyle = lineColor[i]
					for(j in imArr[i]){
						x = 60 + 40*j;
						y = 250 - imArr[i][j]*180/maxNum;
						if(j == 0){
							ctx2.moveTo(x,y)
						}
						else{
							ctx2.lineTo(x,y)
						}
						ctx2.stroke()
						ctx2.beginPath()
						ctx2.arc(x,y,2,0,2*Math.PI)
						ctx2.fill()
						ctx2.moveTo(x,y)
					}
					x = 560
					y = 60 + 25 * i;
					ctx2.globalAlpha = 1
					ctx2.beginPath()
					ctx2.moveTo(x,y)
					ctx2.lineTo(600,y)
					ctx2.stroke()
					ctx2.beginPath()
					ctx2.arc(x + 20,y,2,0,2*Math.PI)
					ctx2.fill()
					ctx2.textAlign = "right"
					ctx2.textBaseline = "top"
					ctx2.font = "14px Arial"
					ctx2.fillText(clickarr[i][0]+"/"+clickarr[i][1],600,y+5)
				}
			}
			
			
			function drawLine(){
				clearButton()
				max_num()
				click()
			}