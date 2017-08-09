$(function(){
			var flag1=false,flag2=false,flag3=false,flag4=false;
		$("#mobile_phone")[0].onkeyup=function(){
			
				if(/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/.test($("#mobile_phone")[0].value)){
				  flag1=true
				  $("#mobile_phone").siblings(".msg").removeClass("msg_warning").html("")
			}else if($("#mobile_phone")[0].value.length==0){
				flag1=false
				$("#mobile_phone").siblings(".msg").addClass("msg_warning").html("请输入手机号！")
			}else{
				flag1=false
				$("#mobile_phone").siblings(".msg").addClass("msg_warning").html("手机号不正确！")
			}
			}
		$("#mobile_phone_code")[0].onkeyup=supr
		function supr(){
	   		if($("#mobile_phone_code")[0].value==$("#get_phone_button")[0].innerHTML){
	   			$("#mobile_phone_code").siblings(".meg_tips").removeClass("msg_warning").html("")
	   				flag2=true
	   		}else{
	   			$("#mobile_phone_code").siblings(".meg_tips").addClass("msg_warning").html("验证码不正确")
	   				flag2=false
	   		}
		}	   		
	   		
		    $(".get_sms_code").click(function(e){
		    	e=e||event
		    	if (e.preventDefault) {
					e.preventDefault(); //非IE
					}
					else {
					e.returnValue = false; // IE
					}
		    	   	$("#get_phone_button")[0].innerHTML=(parseInt(Math.random()*9)+1)*1000+parseInt(Math.random()*10)*100+parseInt(Math.random()*10)*10+parseInt(Math.random()*10)+1		    		
		       supr();	
		    })
			$(".paddword")[0].onkeyup=function(){
			if(/^[0-9a-zA-Z]{6,}$/.test($(".paddword")[0].value)){
				var a=false,b=false;
				for(var i in $(".paddword")[0].value){
					if(/[0-9]/.test($(".paddword")[0].value[i])){
						a=true
					}else{
						b=true
					}
				}
				if(a&&b){
					 flag3=true
				   $(".paddword").siblings(".msg_tips").removeClass("msg_warning").html("")
				}
				 
			}else if($(".paddword")[0].value.length==0){
				flag3=false
				$(".paddword").siblings(".msg_tips").addClass("msg_warning").html("请输入密码！")
			}else{
				flag3=false
				$(".paddword").siblings(".msg_tips").addClass("msg_warning").html("密码不正确！")
			} 
			}
			$(".password")[0].onkeyup=function(){
					if($(".paddword")[0].value==$(".password")[0].value){
		    	   				$(".password").siblings(".msg_tips").removeClass("msg_warning").html("")
		    	   				flag4=true
		    	   		}else{
		    	   				$(".password").siblings(".msg_tips").addClass("msg_warning").html("重复密码有误")
		    	   				flag4=false
			
		    	   		if($(".paddword")[0].value==$(".password")[0].value){
		    	   				$(".password").siblings(".msg_tips").removeClass("msg_warning").html("")
		    	   				flag4=true
		    	   		}else{
		    	   				$(".password").siblings(".msg_tips").addClass("msg_warning").html("重复密码有误")
		    	   				flag4=false
		    	   		}}
		    	   		}
			
			
			
			
			
		        $(".register_btn,.submit").click(function(){	
		           	if(flag1&&flag2&&flag3&&flag4&&$("#remeber")[0].checked){
						$.post("http://127.0.0.1/Fifth%20Avenue/php/register.php",{username:$("#mobile_phone")[0].value,
							pwd:$(".paddword")[0].value},function(data){
							if(JSON.parse(data).status){fn()}
						else{
							alert(JSON.parse(data).msg)
						}
							});
						
				}
				else{ 
					alert("输入有误，请检查！")
				}
				})
			function fn(){
				location.href="load.html"
			}
			

})