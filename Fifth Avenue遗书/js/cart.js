$(function(){
	
		refresh();
				function refresh() {
					
					//获取cookie中的购物车数据
					var arr = $.cookie("cart"); 
					if (arr) {
						arr = JSON.parse(arr);
					
						//先清空旧节点
						$("tr:first").siblings().remove(); 
						
						//如果购物车中有商品
						if (arr.length > 0) {
														
							//再添加新节点
							//遍历arr
							var total = 0; //总价
							var numbb = 0; //总数 
							for (var i=0; i<arr.length; i++) {
								var obj = arr[i];
							
								//创建节点
								var tr = $("<tr></tr>")
									$("tbody").append(tr)
								
								if (obj.checked) {
									$("<td class='border_v tr_lineleft' width='40'><input type='checkbox' class='check' checked='checked' /></td>").appendTo(tr);
								}
								else {
									$("<td class='border_v tr_lineleft' width='40'><input type='checkbox' class='check'  /></td>").appendTo(tr);
								}
								
								$("<td class='border_v' height='100'><a href='#'><img src='"+obj.src+"' width='75' /></a></td>").appendTo(tr);
								$("<td class='border_v' style='width: 200px;'><a href='#'>"+obj.ename+"</a></td>").appendTo(tr);
								$("<td class='border_v'>"+obj.color+","+obj.Size+"</td>").appendTo(tr)
								$("<td class='border_v'>"+obj.price+"</td>").appendTo(tr);
								$("<td class='border_v'><p class='cart_goods_num'><a href='javascript:;' id='reduce' class='cart-reduce'>-</a><input readonly type='text' value='"+obj.num+"' /><a href='javascript:;' id='increase' class='cart-increase'>+</a></p></td>").appendTo(tr);
								var price=obj.price.substring(1)
								$("<td class='border_v'></td><td class='border_v tr_price'>￥"+(price*obj.num)+"</td><td class='border_v border_r cart_goods_ope tr_operate'><a href='javascript:;' id='remove' class='cart-remove'>删除</a><a href='javascript:;' class='cart_dz_btn' style='display: block;' id='addpack'><b></b>定制包装</a><a href='javascript:;' id='cancelpack' class='cart_qx_btn' style='display: none;'><b></b>取消包装</a></td>").appendTo(tr)
								//如果是选中的，则计算总价
								if (obj.checked) {
									total += price * obj.num;
									numbb +=obj.num
								}
							}
							//显示总价
							$("strong").html(total);
							$(".red_number").html(numbb)
								$(".allgray_btn").css("background","#D00000")
						}
						else {
							$("strong").html(0);
							$(".red_number").html(0)
							$(".allgray_btn").css("background","#ccc")
						}
					}
					else {
						$(".allgray_btn").css("background","#ccc")
					}
				}
				
				//删除
				$("tbody").on("click", "#remove", function(){
					var index = $(this).parents("tr").index("tbody tr")-1;
					//console.log(index);
					
					//删除cookie中对应的商品
					var arr = JSON.parse($.cookie("cart"));
					arr.splice(index, 1); //删除数组arr中的第index个商品
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					
					isAllCheck(); //是否全选了
					
					refresh(); //局部刷新界面
				})
				
				//+
				$("tbody").on("click", "#increase", function(){
					//console.log("+");
					var index = $(this).parents("tr").index()-1;
					//将cookie中对应的商品数量增加
					var arr = JSON.parse($.cookie("cart"));
					arr[index].num++;
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					
					
					refresh(); //局部刷新节点
				})
				
				//-
				$("tbody").on("click", "#reduce", function(){
				var index = $(this).parents("tr").index()-1;
					//将cookie中对应的商品数量减少
					var arr = JSON.parse($.cookie("cart"));
					arr[index].num--;
					if (arr[index].num < 1) {
						arr[index].num = 1;
					}
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					
					refresh(); //局部刷新节点
				})
				
				//勾选
				$("tbody").on("click", ".check", function(){
				var index = $(this).parents("tr").index()-1;
					//将cookie中对应的商品的选中状态改变
					var arr = JSON.parse($.cookie("cart"));
					arr[index].checked = !arr[index].checked;
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					
					isAllCheck(); //判断是否全选了
					
					refresh(); //局部刷新节点
				})
				
				//点击全选
				$(".cart_tfinput").click(function(){
					//console.log( $(this).prop("checked") );
					var arr = JSON.parse($.cookie("cart"));
					
					for (var i=0; i<arr.length; i++) {
						if ( $(this).prop("checked") ) {
							arr[i].checked = true;
						}
						else {
							arr[i].checked = false;
						}
					}					
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					
					refresh(); //局部刷新节点
				})
				
				
				//判断是否全选了
				isAllCheck();
				function isAllCheck(){
					var arr = JSON.parse($.cookie("cart"));
					var sum = 0;
					for (var i=0; i<arr.length; i++) {
						sum += arr[i].checked;
					}
					
					//全选了
					if (sum == arr.length && arr.length!=0) {
						$(".cart_tfinput").prop("checked", true);
					}
					//没有全选
					else {
						$(".cart_tfinput").prop("checked", false);
					}
				}
				
					//删除选中
				$(".cart_goods_empty").click(function(){
					var newArr = [];
					$.cookie("cart", JSON.stringify(newArr), {expires:30, path:"/"});
					
					refresh(); //局部刷新节点
				})
		})
