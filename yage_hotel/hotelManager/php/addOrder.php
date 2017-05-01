<?php
	header("Access-Control-Allow-Origin: *");	
	$name = $_POST['name'];
	$identity = $_POST['identity'];
	$contact = $_POST['contact'];
	$inTime = $_POST['inTime'];
	$inDays = $_POST['inDays'];
	$roomStyle = $_POST['roomStyle'];
	
	$mysqli = new mysqli('localhost','root','root','db_hotel');
	
//	$sql = 'insert into room(roomNum,roomStyle,roomRest,roomPrice,roomImg,roomNews) 
//	values("'.$roomNum.'","'.$roomStyle.'","'.$roomRest.'","'.$roomPrice.'","'.$roomfileimg.'","'.$roomNews.'")';
//	
	
	$sql = 'insert into orderroom (name,identity,contact,inTime,inDays,roomStyle) 
	values("'.$name.'","'.$identity.'","'.$contact.'","'.$inTime.'","'.$inDays.'","'.$roomStyle.'")';
	
	$mysqli->query($sql);
//	echo $name.$identity.$contact.$inTime.$inDays.$roomStyle;
?>