<?php 
//	header("Access-Control-Allow-Origin: *")
	$id=$_POST['id'];
	$username=$_POST['username'];
	$password=$_POST['password'];
	$age=$_POST['age'];
	$work=$_POST['work'];
	$img=$_POST['img'];
	// echo $account;
	// echo $id;
	$mysqli=new mysqli('localhost','root','root','db_hotel');

	$sql="update admin set username='".$username."',password='".$password."' ,age='".$age."', work='".$work."' ,img='".$img."' where id=".$id;

	$mysqli->query($sql);
	
//	echo $id;
 ?>