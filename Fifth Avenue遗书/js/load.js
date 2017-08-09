$(function(){
    var flag1=false,flag2=false;
    $("#username")[0].onblur=function(){

        if(/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/.test($("#username")[0].value)){
            flag1=true
            $("#username").siblings(".msg_tips").removeClass("msg_warning").html("")
        }else if($("#username")[0].value.length==0){
            flag1=false
            $("#username").siblings(".msg_tips").addClass("msg_warning").html("请输入用户名！")
        }else{
            flag1=false
            $("#username").siblings(".msg_tips").addClass("msg_warning").html("用户名不正确！")
        }
    }
    $("#password")[0].onblur=function(){
        if(/^[0-9a-zA-Z]{6,}$/.test($("#password")[0].value)){
            var a=false,b=false;
            for(var i in $("#password")[0].value){
                if(/[0-9]/.test($("#password")[0].value[i])){
                    a=true
                }else{
                    b=true
                }
            }
            if(a&&b){
                flag2=true
                $("#password").siblings(".msg_tips").removeClass("msg_warning").html("")
            }

        }else if($("#password")[0].value.length==0){
            flag2=false
            $("#password").siblings(".msg_tips").addClass("msg_warning").html("请输入密码！")
        }else{
            flag2=false
            $("#password").siblings(".msg_tips").addClass("msg_warning").html("密码不正确！")
        }
    }
    $(".login_btn").click(function(e){
        e=e||event
        if (e.preventDefault) {
            e.preventDefault(); //非IE
        }
        else {
            e.returnValue = false; // IE
        }
        if(flag1&&flag2&&$("#remeber")[0].checked){
            $.post("http://127.0.0.1/Fifth%20Avenue/php/load.php",{username:$("#username")[0].value,
                pwd:$("#password")[0].value},function(data){
				if(JSON.parse(data).status){fn()}
            	else{
            		alert(JSON.parse(data).msg)
            	}
                });
//						fn();
        }
        else{
            alert("输入有误，请检查！")
        }
    })
    function fn(){
        location.href="index.html?username="+$("#username")[0].value
    }




})
