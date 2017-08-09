$(function(){
/***************************头部和底部******************************************************/
			$("#head").load("index.html .Top,.head,.nav")
			$("#foot").load("index.html #footer_message_bg,.right_menu")	
/*******************************放大镜************************************************************/
		//计算小区域的宽高
		$(".smallArea").css({width:334*334/$(".bigImg")[0].width,
		height:470*470/$(".bigImg")[0].height})
		//放大系数（放大倍数）//4
		console.log(470*470/$(".bigImg")[0].height)
		scale = 470 / parseInt($(".smallArea").css("width"))
		$("#box2").on({"mouseenter":function(){
			var zoom=1
		
		//轮滚事件
             var scrollFunc=function(e){
					e = e || event;
					if (e.preventDefault) {
					e.preventDefault(); //非IE
					}
					else {
					e.returnValue = false; // IE
					}
					
					if(e.wheelDelta){//IE/Opera/Chrome
					//滚动过程中改变小区域的位置, 宽度每增加2px, left减少1px， 高度同理
							zoom=parseInt(e.wheelDelta / 120)
					var x = e.pageX - $("#box2").offset().left - ($(".smallArea")[0].offsetWidth / 2)-3- zoom*4;
					var y = e.pageY - $("#box2").offset().top - ($(".smallArea")[0].offsetHeight / 2)-3- zoom*4;
//					$(".smallArea").animate({left:x - parseInt(e.wheelDelta / 120)*4 + "px",top:y - parseInt(e.wheelDelta/ 120)*4  + "px"})
//					$(".smallImg").animate({left:-(x - parseInt(e.wheelDelta / 120)*4)+3 + "px",top:-(y - parseInt(e.wheelDelta/ 120)*4)+3+ "px"})


					//滚动过程中改变小区域的大小

				 	var w = $(".smallArea")[0].offsetWidth + zoom * 8;
					var h = $(".smallArea")[0].offsetHeight+ zoom * 8;
					console.log($(".smallArea")[0].offsetWidth)
					}
					else if(e.detail){//Firefox 
					//滚动过程中改变小区域的位置, 宽度每增加2px, left减少1px， 高度同理
					$(".smallArea").animate({left:x - parseInt(e.detail/ 3)*4 + "px",top:y - parseInt(e.detail/ 3)*4  + "px"})
					//滚动过程中改变小区域的大小
					var w = $(".smallArea")[0].offsetWidth + parseInt(e.detail / 3) * 8;
					var h = $(".smallArea")[0].offsetHeight + parseInt(e.detail / 3) * 8;
					} 
					if(w > 334) w = 334;
					if(h > 470) h = 470; 
					console.log(w,h)
					console.log($(".smallArea"))
					$(".smallArea").animate({width:w+"px",height:h+"px"},"fast")
//						$(".smallArea")[0].style.width = w + "px";
//						$(".smallArea")[0].style.height = h	+ "px";
					//重新计算放大系数（放大倍数）
					scale = 334/ parseInt($(".smallArea").css("width"));
					console.log(scale)
					//重新确定大图的大小
					//大图/小图 = 大区域/小区域
//					$(".bigImg").animate({width:334*334/parseInt($(".smallArea").css("width"))+ "px",height:})
					$(".bigImg")[0].style.width = 334*334/$(".smallArea")[0].offsetWidth+"px"
					$(".bigImg")[0].style.height = 470*470 / parseInt($(".smallArea").css("width")) + "px"
					//根据小图位置，移动小区域和大图
					move(x,y);
			}
          
			if(document.addEventListener){ 
				document.addEventListener('DOMMouseScroll',scrollFunc,false); 
					}//W3C 
				window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari 
		},
		"mousemove":function(e){
		var evt = e || event;
			//smallArea.style.cursor = "move";
			var x = evt.pageX - $("#box2").offset().left- ($(".smallArea")[0].offsetWidth / 2)-3;
			var y = evt.pageY - $("#box2").offset().top- ($(".smallArea")[0].offsetHeight / 2)-3;
			move(x, y);
		}
		})
		
		
		//根据小图的位置， 控制边界，移动小区域和大图
				function move(x, y) {

					if(x < -3) x = -3;
					else if(x > $("#box2")[0].offsetWidth - $(".smallArea")[0].offsetWidth-3) {
						x = $("#box2")[0].offsetWidth - $(".smallArea")[0].offsetWidth-3;
					}
					if(y < -3) y = -3;
					else if(y > $("#box2")[0].offsetHeight - $(".smallArea")[0].offsetHeight-3) {
						y = $("#box2")[0].offsetHeight - $(".smallArea")[0].offsetHeight-3;
					}
//				console.log(x,y)
					//移动小区域
					$(".smallArea")[0].style.left = x + "px";
					$(".smallArea")[0].style.top = y + "px";
					//移动小图
					$(".smallImg")[0].style.left = -x +3+ "px";
					$(".smallImg")[0].style.top = -y +3+ "px";
					//移动大图
					$(".bigImg")[0].style.left = -x * scale + "px";
					$(".bigImg")[0].style.top = -y * scale + "px";
				}

			
})