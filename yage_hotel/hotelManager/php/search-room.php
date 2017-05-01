<?php
// 链接数据库
header("Access-Control-Allow-Origin: *");
$mysqli = new mysqli('localhost','root','root','db_hotel');
// 查询语句
$sql = 'select * from room';

$rooms = $mysqli->query($sql);

$aRooms = array();

while($oRooms=$rooms->fetch_assoc()){
	 array_push($aRooms,$oRooms);
}

echo json_encode($aRooms);
?>