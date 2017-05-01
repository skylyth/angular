<?php
//header("Access-Control-Allow-Origin: *")
	$mysqli =new  mysqli('localhost','root','root','db_hotel');
	
	$sql = 'select * from room';
	
	$data = $mysqli->query($sql);
	
	$aData = array();
	
	while($oData = $data->fetch_assoc()){
		
		array_push($aData,$oData);
	}
	
	echo json_encode($aData);
?>