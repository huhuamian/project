<?php
header('Access-Control-Allow-Origin: *');
header("content-type:text/html;charset=utf8");


$username=$_POST["username"];
$pwd=$_POST["pwd"];

class Res{
    public  $status;
    public  $msg;
}

$conn=new mysqli("127.0.0.1","root","","mydb") or die("连接失败");
$sql="select * user where username='$username'";
$requset=$conn->query($sql);
if($requset&&$requset->num_rows>0){
    $res=new Res();
    $res->status=2;
    $res->msg="用户名已经存在！";
        echo json_encode($res);
}else {
    $sql2 = "insert into user(username,password) value('$username','$pwd')";
    $requset2 = $conn->query($sql2);
    if($requset2){
        $res=new Res();
        $res->status=1;
        $res->msg="注册成功";
        echo json_encode($res);
    }else{
        $res=new Res();
        $res->status=0;
        $res->msg="注册失败";
        echo json_encode($res);
    }
}
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/8/2 0002
 * Time: 下午 3:41
 */