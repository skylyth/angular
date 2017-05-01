<?php
//	header("Access-Control-Allow-Origin: *")
	$name = $_POST['name'];
	$identity = $_POST['identity'];
	$contact = $_POST['contact'];
	$outTime = $_POST['outTime'];
	$roomNumber = $_POST['roomNumber'];
	
	$mysqli = new mysqli('localhost','root','root','db_hotel');
	
	$sql = 'insert into livein(name,identity,contact,outTime,roomNumber) 
	values("'.$name.'","'.$identity.'","'.$contact.'","'.$outTime.'","'.$roomNumber.'")';
	
	$mysqli->query($sql);
?>