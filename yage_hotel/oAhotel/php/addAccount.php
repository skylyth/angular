<?php
//header("Access-Control-Allow-Origin: *");
	//首先获取页面输入的值
	$name=$_POST['name'];
	$password=$_POST['password'];
	$age=$_POST['age'];
	$work=$_POST['work'];
	$img=$_POST['img'];

//链接数据库
	$mysqli=new mysqli('localhost','root','root','db_hotel');
//创建操作数据库 的语句--向数据库中添加 页面输入的内容
	$sql='insert into admin(username,password,age,work,img) 
	values("'.$name.'","'.$password.'","'.$age.'","'.$work.'","'.$img.'")';
//执行操作语句
	$mysqli->query($sql);
?>