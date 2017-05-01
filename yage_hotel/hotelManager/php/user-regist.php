<?php 
    header("Access-Control-Allow-Origin: *");
	//首先获取页面输入的值
	$name=$_POST['relname'];
	$password=$_POST['passwd'];
	$phone=$_POST['phone'];
	$relid=$_POST['relid'];
//链接数据库
	$mysqli=new mysqli('localhost','root','root','db_hotel');
//创建操作数据库 的语句--向数据库中添加 页面输入的内容
	$sql='insert into customer(name,passwd,identity,contact) 
	values("'.$name.'","'.$password.'","'.$relid.'","'.$phone.'")';
//执行操作语句
	$mysqli->query($sql);
//	echo $img;
	header('location:http://localhost/hotelManager/index.html');
 ?>