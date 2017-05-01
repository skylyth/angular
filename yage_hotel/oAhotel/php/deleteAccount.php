<?php
	//获取页面传递的数据
//header("Access-Control-Allow-Origin: *");
//	$username=$_POST['username'];
	$id=$_POST['id'];
	//链接数据库
	$db = new mysqli('localhost','root','root','db_hotel');
	//创建查询语句
	$sql = 'delete from admin where id='.$id;
	//执行查询语句
	$data = $db->query($sql);
?>