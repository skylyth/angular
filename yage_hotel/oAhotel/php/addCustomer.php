<?php
//	header("Access-Control-Allow-Origin: *");		
	$name = $_POST['name'];
	$password = $_POST['password'];
	$identity = $_POST['identity'];
	$sex = $_POST['sex'];
	$contact = $_POST['contact'];
	
	$mysqli = new mysqli('localhost','root','root','db_hotel');
	
	
	$sql = 'insert into customer(name,passwd,identity,sex,contact) 
	values("'.$name.'","'.$password.'","'.$identity.'","'.$sex.'","'.$contact.'")';
	
	$mysqli->query($sql);
	
	echo $name.$password.$identify.$sex.$contact;
?>