<?php
//header("Access-Control-Allow-Origin: *");
	$roomNum = $_POST['roomNum'];
	$roomStyle = $_POST['roomStyle'];
	$roomRest = $_POST['roomRest'];
	$roomPrice = $_POST['roomPrice'];
	$roomfileimg = $_POST['roomfileimg'];
	$roomNews = $_POST['roomNews'];
	
	$mysqli = new mysqli('localhost','root','root','db_hotel');
	
	$sql = 'insert into room(roomNum,roomStyle,roomRest,roomPrice,roomImg,roomNews) 
	values("'.$roomNum.'","'.$roomStyle.'","'.$roomRest.'","'.$roomPrice.'","'.$roomfileimg.'","'.$roomNews.'")';
	
	$mysqli->query($sql);
?>