<?php
//	header("Access-Control-Allow-Origin: *")
	$id = $_POST['id'];
	$roomNum = $_POST['roomNum'];
	$roomStyle = $_POST['roomStyle'];
	$roomRest = $_POST['roomRest'];
	$roomPrice = $_POST['roomPrice'];
	$roomImg = $_POST['roomImg'];
	$roomNews = $_POST['roomNews'];

	$mysqli = new mysqli('localhost','root','root','db_hotel');
$sql="update room set roomNum='".$roomNum."',roomStyle='".$roomStyle."' ,roomRest='".$roomRest."', roomPrice='".$roomPrice."' ,roomImg='".$roomImg."',roomNews='".$roomNews."' where id=".$id;

	$mysqli->query($sql);
//	header('location:http://localhost/oAhotel/html/index.html');
?>