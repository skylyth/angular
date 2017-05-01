
var m = angular.module('lyk',[]);

 	m.controller('ctrl',['$scope','$http',function($scope,$http){
 		//数据双向绑定
   				$scope.username='';
   		 		$scope.passwd='';
   		 		//点击提交时就开始查询
			 $scope.login=function(){
// 		 		console.log($scope.username);
//建立http请求 查询数据
			 	$http({
					url:'http://localhost/yage_hotel/oAhotel/php/login.php',
			 		method:'POST',
			 		headers:{
			 			'content-type':'application/x-www-form-urlencoded'
			 		},
//			 		data:$.param({
//			 			//向后台传送数据（需要借助$.param（））
//			 			username:$scope.username,
//			 			password:$scope.passwd
//			 		})
				 }).then(function(res){
				 	//获取后台结果
				 	console.log(res.data);
				 	var btn=true;
				 	for(var i in res.data){
				 		
				 		console.log(res.data[i]);
					if($scope.username==res.data[i].username&&$scope.passwd==res.data[i].password){
						var oImg=res.data[i].img;
//						console.log(oImg);
						var aUser={
							id :res.data[i].id,
							name:$scope.username,
							password:res.data[i].password,
							img:oImg
						};
//						alert($scope.username);
						//把信息放入本地存储中
						localStorage.setItem('personNews',JSON.stringify(aUser));
						//把信息存入cookie中
						setCookie('username',JSON.stringify(aUser));
						btn=false;
						location.href="index.html";
						break;
							}
						}
				 	if(btn){alert('用户名或者密码错误！')}

			 });
			 }
 	}]);
 	