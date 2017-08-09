$(function() {
	var Size;
	/***************************头部和底部******************************************************/
	$("#head").load("index.html .Top,.head,.nav")
	$("#foot").load("index.html #footer_message_bg,.right_menu")
	/*******************************************动态加载商品信息*************************************************************/
	$.get("../json/storesame.json", function(arr) {
		//var obj=[];
		for(var i = 0; i < arr.length; i++) {
			var Top = arr[i].Top
			var Bottom = arr[i].Bottom;
			
			 Top=Top.concat(Bottom)
			for(var j = 0; j < Top.length; j++) {
				if(fnuiu(location.search, "id") == Top[j].id) {
					obj=Top[j]
					var img=obj.img
					for(var k=0;k<img.length;k++){
					var li =$("<li class='jcarousel-item jcarousel-item-horizontal' style='display: inline-block;'><div class='gimg_wrap'><img src='"+img[k]+"' class='cloudzoom-gallery' /><b style='display: none;'></b></div></li>").appendTo("#ulBL")
					}
					var  box=$("<span id='box2'><img src='"+img[0]+"' style='position: absolute; width: 334px;height: 470px;'/><div class='cloudzoom-blank' ><div class='mask' ></div><div class='smallArea'><img class='smallImg' src='"+img[0]+"'/></div></div><div class='bigArea'><img class='bigImg' src='"+img[0]+"' /></div></span>").appendTo(".box")
					var li2=$("<li class='clearfixgd b_bo_xuxian'><div class='gd_text'><p class='gd_title'><a href='#' style='float: left;'>"+obj.ename+"</a><span class='tip'>【海外直购 包邮包税】</span></p><p class='gd_title'><a href='#'>"+obj.cname+"</a></p><p class='ge_desc'><b>"+obj.typ+"</b><br /><b style='color: grey;font-size: 12px;'>"+obj.id+"</b></p></div></li>")
					$(".from_country_icon").after(li2)		
			         var price=obj.price.substring(1)
					var li3=$("<li class='gd_priceCon'><strong class='gd_price'>海外到手价：<span>￥&nbsp;"+price+"</span></strong><img src='../images/oversea_hy.png' id='hy_price' style='left: 295px;'/><div class='mbprice_wrap' style='left: 353px;'><div class='mbprice_title'><a href='#'>如何享受会员价</a></div><div class='mbprice_list_wrap'><ul><li>钻石/皇冠卡：￥&nbsp;"+parseInt(price*0.98)+"</li><li>金/银卡会员：￥&nbsp;"+parseInt(price*0.99)+"</li><li>红卡会员："+obj.price+"</li></ul></div></div></li>")
						$(li2).after(li3)	
					var li4=$("<li style='position:relative;'><span class='home_price'>国内参考价："+obj.hprice+"</span></li>")
						$("#hehehe").after(li4)
					if(obj.size!=""){
						var li5=$("<li class='clearfixgd mtop15'><div class='gd_dt'> <span>大小：</span></div><div class='gd_dd'></div></li>")
						var siz=obj.size
						for(var u=0;u<siz.length;u++){
							var did=$("<div class='dd_item'><a href='#' class='color_attr' name='8470'>"+siz[u]+"</a><b></b></div>").appendTo(li5.find(".gd_dd"))
						}
						$(".opo").after(li5)
					}
					if(obj.color!=""){
					 var li6=$("<li class='clearfixgd mtop15'><div class='gd_dt'><span>颜色：</span></div><div class='gd_dd'><div class='dd_item color_size_cur'><a href='javascript:;' class='color_attr'>"+obj.color+"</a><b></b></div></div></li>")
					$("#coc").before(li6)
					}
				}
			
			}
//			
		}
		bigMi();				

	})

	function fnuiu(params, id) {

		params = params.substring(1);
		var arr = params.split("&");
		for(var i = 0; i < arr.length; i++) {
			var str = arr[i];
			var arr2 = str.split("=");
			if(arr2[0] == id) {
				return arr2[1];
			}
		}
	}
	
	function bigMi(){
	/*******************************放大镜************************************************************/
	/*******************************放大镜轮播效果***************************************************************/
	$(".cloudzoom-gallery").click(function() {
		$("#box2>img").attr("src", $(this).attr("src"))
		$(".smallImg").attr("src", $(this).attr("src"))
		$(".bigImg").attr("src", $(this).attr("src"))
	})
	//计算小区域的宽高
	$(".smallArea").css({
		width: 334 * 334 / $(".bigImg")[0].width,
		height: 470 * 470 / $(".bigImg")[0].height
	})
	//放大系数（放大倍数）//4
	scale = 470 / parseInt($(".smallArea").css("width"))
	$("#box2").on({
		"mouseenter": function() {
			var zoom = 1

			//轮滚事件
			var scrollFunc = function(e) {
				console.log(1)
				e = e || event;
				if(e.preventDefault) {
					e.preventDefault(); //非IE
				} else {
					e.returnValue = false; // IE
				}
				//滚动过程中改变小区域的位置, 宽度每增加2px, left减少1px， 高度同理
				zoom = parseInt(e.wheelDelta / 120) || parseInt(e.detail / 3)
				if(zoom > 0) {
					//滚动过程中改变小区域的位置, 宽度每增加2px, left减少1px， 高度同理
					var x = e.pageX - $("#box2").offset().left - $(".smallArea")[0].offsetWidth* 1.05 / 2 
					var y = e.pageY - $("#box2").offset().top - $(".smallArea")[0].offsetHeight* 1.05 / 2

					//滚动过程中改变小区域的大小
					var w = $(".smallArea")[0].offsetWidth * 1.1;
					var h = $(".smallArea")[0].offsetHeight * 1.1;
				} else {
					var x = e.pageX - $("#box2").offset().left - $(".smallArea")[0].offsetWidth* 0.95 / 2 
					var y = e.pageY - $("#box2").offset().top - $(".smallArea")[0].offsetHeight* 0.95 / 2 
					var w = $(".smallArea")[0].offsetWidth * 0.9;
					var h = $(".smallArea")[0].offsetHeight * 0.9;
				}
				if(w > 334) w = 334;
				if(h > 470) h = 470;
				$(".smallArea")[0].style.width = w + "px";
				$(".smallArea")[0].style.height = h + "px";
				//重新计算放大系数（放大倍数）
				scale = 334 / parseInt($(".smallArea").css("width"));
				//重新确定大图的大小
				//大图/小图 = 大区域/小区域
				//					$(".bigImg").animate({width:334*334/parseInt($(".smallArea").css("width"))+ "px",height:})
				$(".bigImg")[0].style.width = 334 * 334 / $(".smallArea")[0].offsetWidth + "px"
				$(".bigImg")[0].style.height = 470 * 470 / parseInt($(".smallArea").css("height")) + "px"
				//根据小图位置，移动小区域和大图
				move(x, y);
			}

			if(document.addEventListener) {
				document.addEventListener('DOMMouseScroll', scrollFunc, false);
			} //W3C
			window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome/Safari
		},
		"mouseleave": function() {
			scrollFunc = null
			if(document.removeEventListener) {
				document.removeEventListener('DOMMouseScroll', scrollFunc, false);
			} //W3C
			window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome/Safari
		},
		"mousemove": function(e) {
			var evt = e || event;
			//smallArea.style.cursor = "move";
			var x = evt.pageX - $("#box2").offset().left - ($(".smallArea")[0].offsetWidth / 2) ;
			var y = evt.pageY - $("#box2").offset().top - ($(".smallArea")[0].offsetHeight / 2) ;
			move(x, y);
		}
	})

	//根据小图的位置， 控制边界，移动小区域和大图
	function move(x, y) {
		if(x < -3) x = -3;
		else if(x > $("#box2")[0].offsetWidth - $(".smallArea")[0].offsetWidth - 3) {
			x = $("#box2")[0].offsetWidth - $(".smallArea")[0].offsetWidth - 3;
		}
		if(y < -3) y = -3;
		else if(y > $("#box2")[0].offsetHeight - $(".smallArea")[0].offsetHeight - 3) {
			y = $("#box2")[0].offsetHeight - $(".smallArea")[0].offsetHeight - 3;
		}
		//移动小区域
		$(".smallArea")[0].style.left = x -3 + "px";
		$(".smallArea")[0].style.top = y-3 + "px";
		//移动小图
		$(".smallImg")[0].style.left = -x + "px";
		$(".smallImg")[0].style.top = -y + "px";
		//移动大图
		$(".bigImg")[0].style.left = (3-x) * scale + "px";
		$(".bigImg")[0].style.top = (3-y) * scale + "px";
	}

	//会员价 动画
	$("#hy_price").mouseenter(function() {
		$(".mbprice_wrap").show()
	})
	//扫码动画
	$(".qr-code").on({
		"mouseenter": function() {
			$(this).find("img").show()
		},
		"mouseleave": function() {
			$(this).find("img").hide()
		}
	})
	//大小选择
	$(".dd_item").click(function(e) {
		e = e || event
		if(e.preventDefault) {
			e.preventDefault(); //非IE
		} else {
			e.returnValue = false; // IE
		}
		$(this).addClass("color_size_cur").siblings().removeClass("color_size_cur")
		Size=$(this).find("a").html()
	})
	
	//数量加减
	$("#addnum").click(function() {
		$("#number")[0].value = 1 + parseInt($("#number")[0].value)
	})
	$("#reducenum").click(function() {
		if($("#number")[0].value <= 1) {
			$("#number")[0].value = 1
		} else
			$("#number")[0].value -= 1
	})
}
	//加入购物车动画
	
	$(".add_car_btn").click(function(e){
	var dix=document.documentElement.clientWidth||document.body.clientWidth
	var diy=document.documentElement.clientHeight||document.body.clientHeight
               e=e||event
		var  flyer=$("<img src='"+$(".smallImg").attr("src")+"'style='width:100px;height:100px;border-radius: 50%;'>")
		flyer.fly({
			start:{
				left:e.screenX-50,
				top:e.screenY-50			
			},
			end:{
				left:dix-35,
				top:(0.3*diy),
				width:0,
				height:0
			}
		})
	//同时存cookie
	//将当前的商品对象加入cookie购物车
					var goodsArr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
					var isExist = false; //默认cookie中不存在和我当前点击的相同商品
					nnu=$("#number")[0].value-0
					for (var i=0; i<goodsArr.length; i++) {
						if (goodsArr[i].id == obj.id) {
							
							goodsArr[i].num+=nnu; //数量加1
							isExist = true; //说明存在相同的
						}
					}
					if (isExist == false){
						obj.num = nnu; 
						if(Size){obj.Size=Size;//选中的大小
						}else{
							obj.Size=""
						}
						obj.checked = true; //默认是选中的
						goodsArr.push(obj);
					}
					
					$.cookie("cart", JSON.stringify(goodsArr), {expires:30, path:"/"});
	
				shopcart();
	})
	

	//吸顶效果
	var surTop = $(".tab_Round_text_ul1").offset().top
	$(window).scroll(function() {
		if($(window).scrollTop() >= surTop) {
			$(".tab_Round_text_ul1").css({
				position: "fixed",
				top: "0"
			})
		} else {
			$(".tab_Round_text_ul1").css({
				position: "relative",
				top: "0",
				marginLeft: "0"
			})
		}
	})
	//目录跳转
	$(".tab_Round_text_ul1").on({
		"click": function() {
			$(this).addClass("rand_red").siblings().removeClass("rand_red")
		}
	}, "li")
})