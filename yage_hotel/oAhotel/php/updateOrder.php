<?php
//header("Access-Control-Allow-Origin: *")
	$id = $_POST['id'];
	$name = $_POST['name'];
	$identity = $_POST['identity'];
	$contact= $_POST['contact'];
	$inTime = $_POST['inTime'];
	$inDays = $_POST['inDays'];
	$roomStyle = $_POST['roomStyle'];
	
	$mysqli = new mysqli('localhost','root','root','db_hotel');
	$sql="update orderroom set name='".$name."',identity='".$identity."' ,contact='".$contact."', inTime='".$inTime."' ,inDays='".$inDays."',roomStyle='".$roomStyle."' where id=".$id;

$mysqli->query($sql);

echo $id.$name.$identity.$contact.$inTime.$inDays.$roomStyle;
?>