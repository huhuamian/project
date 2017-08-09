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
$sql="select * from user where username='$username' and password='$pwd'";
$requset=$conn->query($sql);
if($requset&&$requset->num_rows>0){
    $res=new Res();
    $res->status=1;
    $res->msg="登录成功";
    echo json_encode($res);
}else {
    $res=new Res();
    $res->status=0;
    $res->msg="登录失败";
    echo json_encode($res);
}
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/8/2 0002
 * Time: 下午 3:41
 */