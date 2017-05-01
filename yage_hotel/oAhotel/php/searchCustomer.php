<?php
//	header("Access-Control-Allow-Origin: *")
	$mysqli = new mysqli('localhost','root','root','db_hotel');
	
	$sql = 'select * from customer';
	
	$data = $mysqli->query($sql);
	
	$aCustomer = array();
	
	while($oCustomer = $data->fetch_assoc()){
		array_push($aCustomer,$oCustomer);
	};
	
	echo json_encode($aCustomer);
?>