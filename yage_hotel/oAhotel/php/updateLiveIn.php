<?php
//header("Access-Control-Allow-Origin: *")
	$id = $_POST['id'];
	$name = $_POST['name'];
	$identity = $_POST['identity'];
	$contact= $_POST['contact'];
	$outTime = $_POST['outTime'];
	$roomnumber = $_POST['roomnumber'];
	
	$mysqli = new mysqli('localhost','root','root','db_hotel');
	$sql="update livein set name='".$name."',identity='".$identity."' ,contact='".$contact."', outTime='".$outTime."' ,roomnumber='".$roomnumber."' where id=".$id;

	$mysqli->query($sql);

?>