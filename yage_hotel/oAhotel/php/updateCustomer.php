<?php
//	header("Access-Control-Allow-Origin: *")
	$id = $_POST['id'];
	$name = $_POST['name'];
	$password = $_POST['password'];
	$identity = $_POST['identity'];
	$sex = $_POST['sex'];
	$contact = $_POST['contact'];


	$mysqli = new mysqli('localhost','root','root','db_hotel');
	$sql="update customer set name='".$name."',passwd='".$password."',identity='".$identity."', sex='".$sex."' ,contact='".$contact."' where id=".$id;

	$mysqli->query($sql);
//	header('location:http://localhost/oAhotel/html/index.html');
?>