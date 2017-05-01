<?php
	
//	header("Access-Control-Allow-Origin: *")
	$id = $_POST['id'];
	
	$mysqli = new mysqli('localhost','root','root','db_hotel');
	
	$sql = 'delete from room where id='.$id;
	
	$mysqli->query($sql);
?>