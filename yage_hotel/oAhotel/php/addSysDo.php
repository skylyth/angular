<?php
	//首先获取页面输入的值
//header("Access-Control-Allow-Origin: *");
	$startTime=$_POST['startTime'];
	$endTime=$_POST['endTime'];
	$reason=$_POST['reason'];
	$chkBtn=$_POST['chkBtn'];
	$img=$_POST['sysImg'];

//链接数据库
	$mysqli=new mysqli('localhost','root','root','db_hotel');
//创建操作数据库 的语句--向数据库中添加 页面输入的内容
	$sql='insert into sysdo(startTime,endTime,reason,sysImg,chkBtn) 
	values("'.$startTime.'","'.$endTime.'","'.$reason.'","'.$img.'","'.$chkBtn.'")';
//执行操作语句
	$mysqli->query($sql);
	echo $chkBtn;
?>