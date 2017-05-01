<?php 
//	header("Access-Control-Allow-Origin: *")
	$id=$_POST['id'];
	$username=$_POST['username'];
	$password=$_POST['password'];
	// echo $account;
	// echo $id;
	$mysqli=new mysqli('localhost','root','root','db_hotel');

	$sql="update admin set username='".$username."',password='".$password."' where id=".$id;

	$mysqli->query($sql);
	
	echo $id;
 ?>