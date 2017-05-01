

		
        var m = angular.module('lyk', ['ui.router']);
       
          m.controller('ctrl',['$scope','$http',function($scope,$http){

          	$scope.data = '';
          	$scope.chkBtn = '';
          	$scope.reason = '';
          	//商城设置http请求
          	$http({
          		method : 'GET',
          		url    : 'http://localhost/hotelManager/php/sysDo.php',	
          	}).then(function(res){		
					$scope.data = res.data;
          		$scope.chkBtn = $scope.data[0].chkBtn;
          		$scope.reason = $scope.data[0].reason;
          		if($scope.chkBtn=='false'){
          			$scope.chkBtn = 0;
          		}else{
          			$scope.chkBtn = 1;
          		}

          	});
//        	console.log($scope.data);
            $scope.now=new Date().getTime();
            setInterval(function(){
                // angularjs的脏检测
                $scope.$apply(function(){
                    $scope.now=new Date().getTime();
//                  console.log($scope.now);
                });
            },1000);
            
            $scope.regclose = function(){
            	$('#page-login').css({
            		display : 'none'
            	})
            }
             $scope.regopen = function(){
            	$('#page-login').css({
            		display : 'block'
            	})
            }
              $scope.clos = function(){
            	$('#page-login').css({
            		display : 'none'
            	})
            }
              $scope.log = function (){
              	$http({
          		method : 'GET',
          		url    : 'http://localhost/hotelManager/php/login.php',	
          	}).then(function(res){	
          		console.log(1)
          		var loname=$('#loname').val();
   		 		var lopass=$('#lopass').val();
				 	//获取后台结果
				 	var btn=true;
				 	for(var i in res.data){	
					if(loname==res.data[i].name&&lopass==res.data[i].passwd){
						console.log(res.data[i].name)
						var aUser={
							name:loname,
							contact : res.data[i].contact,
							identity : res.data[i].identity
						};		
						//把信息放入本地存储中
						console.log(aUser);
						setCookie('nn',JSON.stringify(aUser));
						$('#ll').css({
							display : 'none'
						});
						$('#welcome').css({
							display : 'block'
						});
						$('#nnn').css({
							color : 'red'
						}).html(loname)
						btn=false;
						break;
							}
						}
				 	if(btn){alert('用户名或者密码错误！')}
          	},function(err){
          		console.log(err)
          	})

          	};
            }]);
            //工厂函数
        m.factory('userList', ['$http', function ($http) {
            return {
                all: function (url) {
                    return $http({
                        method: 'GET',
                        url: url,
                        cache: true
                    });
                }
            };
        }]);
        m.config(['$stateProvider', '$urlRouterProvider', function ($state, $urlRouter) {
            $state.state('list', {
                url: '',
                templateUrl: 'view/rooms.html',
                controller:'ctrl1'
            }).state('content', {
                url: '/content/{id}',
                templateUrl: 'view/roomNews.html',
                controller: 'ctrl2'
                
            }).state('order', {
                url: '/order',
                templateUrl: 'view/orders.html',
                controller: 'ctrl3'              
            });
            $urlRouter.otherwise('');
            //所有房间
           
        }]);

 m.controller('ctrl1',['$scope','userList','$filter',function($scope,userList,$filter){
            	var urls = 'http://localhost/hotelManager/php/search-room.php';
                    userList.all(urls).then(function (res) {
                        $scope.data = res.data;
            });
            }]);
            //单个房间信息
m.controller('ctrl2',['$scope','$stateParams','userList','$filter',function($scope,$param,userList,$filter){
            	var urls = 'http://localhost/hotelManager/php/search-room.php';
                    userList.all(urls).then(function (res) {
                        for(var i = 0; i < res.data.length; i++) {
                            // 判断当前用户是否为需要展示的用户
                            if(res.data[i].id == $param.id) {
                                $scope.details = res.data[i];
                                // break;
                            }
                        }
                    });
                    $('#gobackto').on('click',function(){
//						console.log(1)
						history.go(-1)
					})
//
		var oCookie = getCookie('nn');
		console.log(oCookie);
		if(oCookie){
//将字符串对象转化成json对象
		var aCookie = JSON.parse(oCookie);
		console.log(aCookie.name)
//			$('.orname')[0].value = 11;
				$scope.contactss = aCookie.contact;
				$scope.identityss = aCookie.identity;
//				console.log($('.orname').val())			
		}
		
		//点击右移按钮
		$('#btnright').click(function(){
			$('#images1').animate({
				left: '-100%'
			})
		});
		$('#btnleft').click(function(){
			$('#images1').animate({
				left: '0'
			})
		});
		$('img').hover(function(){
			$(this).stop().animate({
				opacity : 0.6,
			})
		},function(){
			$(this).stop().animate({
				opacity : 1	
			})
			});
				
            }]); 
           
m.controller('ctrl3',['$scope','$stateParams','userList','$filter','$http',function($scope,$param,userList,$filter,$http){
		var oCookie = getCookie('nn');
		console.log(oCookie);
		if(oCookie){
//将字符串对象转化成json对象
		var aCookie = JSON.parse(oCookie);
		console.log(aCookie.name)
				$scope.namess = aCookie.name;
				$scope.contactss = aCookie.contact;
				$scope.identityss = aCookie.identity;		
		}	
		$scope.addOrder = function(){
			$http({
			method : 'POST',
			url    : 'http://localhost/hotelManager/php/addOrder.php',
			headers: {
				'content-type' : 'application/x-www-form-urlencoded'
			},
			data : $.param({
				name     : $('.orname').val(),
				identity : $('.oridentity').val(),
				contact  : $('.orcontact').val(),
				inTime   : $('.ortimein').val(),
				inDays   : $('.ordays').val(),
				roomStyle: $('.orstyle').val()
			})
		}).then(function(){
			alert('成功预订房间！')
//			location.reload('http://localhost/hotelManager/index.html#/');
		});			
		}			
		$scope.delOrder = function (){
			history.go(-2)
		}
            }]); 
