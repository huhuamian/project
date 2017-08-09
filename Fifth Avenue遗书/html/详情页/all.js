$(function(){
/*******************************Top动画***************************************************/																		
	$(".lu5").on({
		"mouseenter":function(){
			$(".lu5 dd").slideDown("fast")
		},
		"mouseleave":function(){
			$(".lu5 dd").slideUp("fast")
		}
	})																		
	$(".moblie").on({
		"mouseenter":function(){
			$(".moblie dd").slideDown("fast")
		},
		"mouseleave":function(){
			$(".moblie dd").slideUp("fast")
		}
	})																			
/**************************************head动画********************************************/
		$(".cartbox").on({
			"mouseenter":function(){
				$(".shopping_cart_count").slideDown("fast")
			},
			"mouseleave":function(){
				$(".shopping_cart_count").slideUp("fast")
			}
		})			
/****************************Nav menu*************************************************************/
	$.get("../json/menu.json", function(arr) {
	for(var k=0;k<arr.length;k++) {
		var li = $("<li><div class='group " + arr[k].clas + "' style='opacity: 0.85;'><a href='#'><span style='color: #c69c6d;'>" + arr[k].list + "</span><i style='display: none;'></i></a></div><div class='menu_show' style='display:none;top:-" + (k + 1) * 32 + "px;'><div class='showindex'><a href='#'>进入箱包频道</a><a href='#'>快速发货区</a></div></div>").appendTo($(".menuleft ul"))
		var obj = arr[k]; 
		var titles = obj.title;
		var contents = obj.content;
		
		for (var j=0; j<titles.length; j++) {
			var title = titles[j];
			var contentObj = contents[j];
			
			var showshop = $("<div class='showshop'><h2><a href='#'>" + title + "</a></h2><div class='showbag'></div></div>");
			li.find(".menu_show").prepend(showshop);
			
			for (var p in contentObj){
				var a = $("<a href='" + contentObj[p] + "'>" + p + "</a>");
				showshop.find(".showbag").append(a);
			}
		}
	}

	xxxi();
	
	
	})
	
		function xxxi(){
		$(".cart_list").on({
			"mouseenter":function(){
				$(".menuleft").css("display","block")
			},
			"mouseleave":function(){
				$(".menuleft").css("display","none")
			}
		})		

$(".menuleft li").on({
			"mouseenter":function(){
				$(this).find(".group").css("opacity","1")
				$(this).find(".menu_show").css("display","block")
				$(this).find(".group i").css("display","inline")
			},
			"mouseleave":function(){
				$(this).find(".group").css("opacity","0.85")
				$(this).find(".menu_show").css("display","none")
				$(this).find(".group i").css("display","none")
			}
		})		
		$(".icon_wrap li").on({
			"mouseenter":function(){
				$(this).stop().animate({width:"140px"},"200").siblings().stop().animate({width:"30px"},"200")
			},
			"mouseleave":function(){
			$(this).stop().animate({width:"30px"},"200")
			$(this).siblings.stop().animate({width:"30px"},"200")
			}
		})		
		}

/********************************Banner 轮播图*****************************************************/
var bannertimer;
		var size,iwidth;
		 $.get("../json/lunbo.json",function(data){
		 	$(data).each(function(a,b){
		 		$("#bannerbox").append( $("<img src="+data[a]+" class='oim'>"))
		 	})
		 	$("#bannerbox").append($(".oim").eq(0).clone(true))
		 		size=$(".oim").size()
		 		var i=size-1;
			$(".oim").on("load", function(){
			$(".banner_navi_li").eq(0).addClass("active")	
			iwidth=$(".oim").eq(0).width()
			$("#bannerbox").width(iwidth*size)
			})
			bannertimer=setInterval(function(){
					i++
					move();
				},4000)
	function move(){
				if(i<0){
					$("#bannerbox").css("left",-(size-1)*iwidth+"px" )
					i=size-2
				}
				if(i>=size){
					$("#bannerbox").css("left","0")
					i=1
				}
				$("#bannerbox").stop().animate({left:-iwidth*i+"px"},400)
				
					if(i==size-1){
					$(".banner_navi li").eq(0).addClass("active").siblings().removeClass("active")
					}else{ 
						$(".banner_navi li").eq(i).addClass("active").siblings().removeClass("active")
					}
			
			}
					$(".next").click(function(){
						i++
						move();
					})
					$(".prve").click(function(){
						i--
						move();
					})
				$(".banner_navi_li").click(function(a,b){
					     i=$(this).index()
						move();
				})
				$("#banner").on({
					"mouseenter":function(){
						clearInterval(bannertimer)
						},
					"mouseleave":function(){
						clearInterval(bannertimer)
						bannertimer=setInterval(function(){
							i++
							move();
						},4000)
					}
				})
			
		})
/*****************************品牌旗舰**************************************************/
					$(".brand_hide").on({
						"mouseenter":function(){
							$(this).stop().animate({top:"0"},"fast","linear").siblings().stop()
						},
						"mouseleave":function(){
						$(this).animate({top:"100px"},"fast","linear")
						}
					})
/*****************************热卖旗舰**************************************************/
           var t=0;
           function hotmove(){
           	if(t<0)t=0
           	else if(t>=2){t=2}
           	console.log(t)
           	$(".hotflagbox").animate({left:-1210*t+"px"},"normal","linear")
           }
            $(".hot_pre").click(function(){
           	t-- 
           	
           	hotmove();
           })
            $(".hot_next").click(function(){
           	t++ 
           	hotmove();
           })

					$(".hotflagson").on({
						"mouseenter":function(){
							$(this).find(".hotcont").animate({opacity:"1"},"fast","linear")
							$(this).find(".topline,.bottomline").animate({width:"166px"},"fast","linear")
							$(this).find(".rightline,.leftline").animate({height:"85px"},"fast","linear")
						},
						"mouseleave":function(){
							$(this).find(".hotcont").animate({opacity:"0"},"fast","linear")
							$(this).find(".topline,.bottomline").animate({width:"0"},"fast","linear")
							$(this).find(".rightline,.leftline").animate({height:"0"},"fast","linear")
						}
					})
/****************************************商场同款**************************************************/
		$(".storesame_link li").on(
			"mouseenter",function(){
				$(this).css("background-color","rgb(0,0,0)").siblings().css("background-color","rgb(153,153,153)")
				$(".storesamebox").animate({left:$(this).index(".storesame_link li")*(-1210)+"px"},"fast","linear")
			}
		)
		$(".storesamebox").on({"mouseenter":function(){
			$(this).find(".storesametoptxt").animate({left:"-20px"},"fast","linear")
			$(this).find(".storesametoppic").animate({left:"20px"},"fast","linear")
			$(this).find(".storesametoppic,.storesametoppic2").animate({left:"20px"},"fast","linear")
		},"mouseleave":function(){
			$(this).find(".storesametoptxt").animate({left:"0px"},"fast","linear")
			$(this).find(".storesametoppic,.storesametoppic2").animate({left:"0px"},"fast","linear")
			$(this).find(".storesametoppic").animate({left:"0px"},"fast","linear")
		}}
		,".storesame_top2,.storesame_top1,.storesamebottom1")
	$.get("../json/storesame.json", function(arr) {
		for( var i=0;i<arr.length;i++){
			var li=$("<li><div class='storesame_left'><a href='#'><img src='"+arr[i].leftimg+"' width='368'/></a></div><div class='storesame_right'><div class='storesame_top'></div><div class='storesame_bottom'></div></div></li>").prependTo($(".storesamebox"))
			var Top=arr[i].Top
			var Bottom=arr[i].Bottom
			
			for(var j=0;j<Top.length;j++){
				if(j==0){
					var storesametop=$("<div class='"+Top[j].clas+"' style='margin-right:8px'><div class='storesametoptxt';><p class='enbrand'>"+Top[j].ename+"</p><p>"+Top[j].cname+"</p><p>"+Top[j].price+"</p></div><div class='storesametoppic';><a href='#'><img src='"+Top[j].src+"' width='150'></a></div></div>")
			li.find(".storesame_top").append(storesametop)
				}
				else if(Top[j].clas=="storesame_top2"){
					var storesametop=$("<div class='"+Top[j].clas+"'><div class='storesametoptxt';><p class='enbrand'>"+Top[j].ename+"</p><p>"+Top[j].cname+"</p><p>"+Top[j].price+"</p></div><div class='storesametoppic storesametoppic2';><a href='#'><img src='"+Top[j].src+"' width='150'></a></div></div>")
			li.find(".storesame_top").append(storesametop)
				}
				else{
					var storesametop=$("<div class='"+Top[j].clas+"'><div class='storesametoptxt';><p class='enbrand'>"+Top[j].ename+"</p><p>"+Top[j].cname+"</p><p>"+Top[j].price+"</p></div><div class='storesametoppic';><a href='#'><img src='"+Top[j].src+"' width='150'></a></div></div>")
			li.find(".storesame_top").append(storesametop)
				}
			}
			for(var l=0;l<Bottom.length;l++){
				var Botobj=Bottom[l]
			var storesamebottom1=$("<div class='"+Botobj.clas+"'><div class='storesametoptxt';><p class='enbrand'>"+Botobj.ename+"</p><p>"+Botobj.cname+"</p><p>"+Botobj.price+"</p></div><div class='storesametoppic';><a href='#'><img src='"+Botobj.src+"' width='150'></a></div></div>")
			li.find(".storesame_bottom").append(storesamebottom1)
			}
}
		})

/****************************************购物中心**********************************************/

			
				$(".shopcenter li").on({
						"mouseenter":function(){
							$(this).find(".shopcenterbox").stop().animate({top:"-50px"},"fast","linear")
						},
						"mouseleave":function(){
							$(this).find(".shopcenterbox").stop().animate({top:"0"},"fast","linear")
						},
						"click":function(){
							var top=2240+$(this).index()*430
							$("html,body").stop().animate({scrollTop:top},200)			
						}
				})
				var count=0
				var ttp=0
				$(".bx-prev").on("click",function(e){
					e=e||event
					if (e.preventDefault) {
					e.preventDefault(); //非IE
					}
					else {
					e.returnValue = false; // IE
					}
				var v00=$(this).parents(".bx-wrapper").find(".sliderbox,.bxslider")
					count--
					if(count<0){
					count=2
					v00.css("left", "-672px")
					v00.stop().animate({left:count*(-224)+"px"},"fast","linear")
				}else{
					v00.stop().animate({left:count*(-224)+"px"},"fast","linear")
					}
                  ttp--
					if(ttp<0)
					ttp=2
                  $(this).parents(".bx-has-controls-direction").find(".bx-pager-link").eq(ttp).addClass("activex").parents(".bx-pager-item").siblings().find(".bx-pager-link").removeClass("activex")
				})
				$(".bx-next").on("click",function(e){
					e=e||event
					if (e.preventDefault) {
					e.preventDefault(); //非IE
					}
					else {
					e.returnValue = false; // IE
					}
					count++
					var v00=$(this).parents(".bx-wrapper").find(".sliderbox,.bxslider")
					if(count>3){
						count=1
					v00.css("left","0")
					v00.stop().animate({left:count*(-224)+"px"},"fast","linear")
					}else{
					v00.stop().animate({left:count*(-224)+"px"},"fast","linear")
					}
					ttp++
					if(ttp>2)
					ttp=0
                  $(this).parents(".bx-has-controls-direction").find(".bx-pager-link").eq(ttp).addClass("activex").parents(".bx-pager-item").siblings().find(".bx-pager-link").removeClass("activex")
				})
				$(".bx-pager-link").click(function(e){
					e=e||event
					if (e.preventDefault) {
					e.preventDefault(); //非IE
					}
					else {
					e.returnValue = false; // IE
					}
					$(this).addClass("activex").parents(".bx-pager-item").siblings().find(".bx-pager-link").removeClass("activex")
					$(this).parents(".bx-wrapper").find(".sliderbox,.bxslider").stop().animate({left:$(this).parents(".bx-pager-item").index()*(-224)+"px"},"fast","linear")
				})
/*********************************主题活动***************************************************/		
					$(".proleftpic").on({
						"mouseenter":function(){
							$(this).find(".topline,.bottomline").animate({width:"194px"},"fast","linear");
							$(this).find(".rightline,.leftline").animate({height:"65px"},"fast","linear");
							$(".proright img").attr("src","../images/"+(1+$(this).index(".proleft .proleftpic"))+"bank.jpg");
						},
						"mouseleave":function(){
							$(this).find(".topline,.bottomline").animate({width:"0"},"fast","linear")
							$(this).find(".rightline,.leftline").animate({height:"0"},"fast","linear")
						}
					})



/************************************右边浮动菜单*********************************************************/
								$(".right_menu").on({
									"mouseenter":function(){
									$(this).find(".tab-tip").css("display","block")
								},
									"mouseleave":function(){
									$(this).find(".tab-tip").css("display","none")
									}
								},"dt li")

							$(".tab-logo_top").click(function(){
								$(window).scrollTop(0)
							})
})