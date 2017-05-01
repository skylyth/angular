<?php
	header("Access-Control-Allow-Origin: *");
	$mysqli = new mysqli('localhost','root','root','db_hotel');
	
	$sql = 'select * from orderroom';
	
	$data = $mysqli->query($sql);
	
	$aOrder = array();
	
	while($oOder = $data->fetch_assoc()){
		array_push($aOrder,$oOder);
	}
	echo json_encode($aOrder);
?>