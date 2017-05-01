<?php
//header("Access-Control-Allow-Origin: *")
	$mysqli = new mysqli('localhost','root','root','db_hotel');
	
	$sql = 'select * from livein';
	
	$data = $mysqli->query($sql);
	
	$aLiveIn = array();
	
	while($oLiveIn = $data->fetch_assoc()){
		array_push($aLiveIn,$oLiveIn);
	};
	
	echo json_encode($aLiveIn);
?>