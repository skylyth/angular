//创建模块
var m = angular.module('lyk',['ui.router']);
//配置路由 用来界面切换
	m.config(['$stateProvider','$urlRouterProvider',function($state,$urlRouter){
					$state.state('index',{
						//加载默认界面
						url:'/index',
						templateUrl:'../view/index.html',	
					}).state('searchAccount',{
						// 加载查看账户信息界面
						url:'/searchAccount',
						templateUrl:'../view/searchAccount.html',
						controller:'ctrl1'
					}).state('addAccount',{
						//添加账户界面
						url:'/addAccount',
						templateUrl:'../view/addAccount.html',
					}).state('searchRoom',{
						//查看客房界面
						url:'/searchRoom',
						templateUrl:'../view/searchRoom.html',
						controller:'ctrl3'
					}).state('addRoom',{
						//添加客房界面
						url:'/addRoom',
						templateUrl:'../view/addRoom.html',
						controller : 'ctrl5'
					}).state('searchOrder',{
						//添加订单界面
						url:'/searchOrder',
						templateUrl:'../view/searchOrder.html',
						controller : 'ctrl8'
					}).state('addOrder',{
						//查看订单界面
						url:'/addOrder',
						templateUrl:'../view/addOrder.html',
						controller : 'ctrl7'
					}).state('searchCustomer',{
						//查看客户信息界面
						url:'/searchCustomer',
						templateUrl:'../view/searchCustomer.html',
						controller:'ctrl4'
					}).state('addCustomer',{
						//添加客户信息
						url:'/addCustomer',
						templateUrl:'../view/addCustomer.html',
						controller : 'ctrl6',
					}).state('searchLivein',{
						//查看入住信息
						url:'/searchLivein',
						templateUrl:'../view/searchLivein.html',
						controller : 'ctrl9'
					}).state('addLiveIn',{
						//添加入住信息
						url:'/addLiveIn',
						templateUrl:'../view/addLiveIn.html',
						controller : 'ctrl10'
					}).state('searchSysDo',{
						//查看系统设置
						url:'/searchSysDo',
						templateUrl:'../view/searchSysDo.html',
						controller:'ctrl2'
					}).state('addSysDo',{
						//添加系统设置
						url:'/addSysDo',
						templateUrl:'../view/addSysDo.html',
					})
//默认路由显示页面																				
					$urlRouter.otherwise('index');
	}]);
//这是主页面面的controller
 	m.controller('ctrl',['$scope','$http','$filter',function($scope,$http,$filter){
		
		$scope.changePassword = '';
		$scope.changeUsername = '';
//获取cookie值显示头像和登录名
		var oCookie = getCookie('username');
		if(oCookie){
//将字符串对象转化成json对象
		var aCookie = JSON.parse(oCookie);
//		console.log(aCookie);
//		var name = getCookie('username').name;
		$('#name').text(aCookie.name);
		$('#imgHeader').attr('src','../images/'+aCookie.img+'');
		}else{
			location.href='http://localhost/yage_hotel/oAhotel/html/login.html';
		}
		
//退出系统 清除cookie
		$scope.closeOa = function(){
			console.log(1);
			removeCookie('username');
			location.href='http://localhost/yage_hotel/oAhotel/html/login.html';
		}
//头部导航修改密码的操作
//个人资料
	var pers = $('#pers');
	pers.hover(function(ev){
		ev.cancelBubble = true;
		var per = $('#personal');
			per.css({
				display : 'block'
			});
			var person = JSON.parse(localStorage.getItem('personNews'));
			per.children('img').attr('src',"../images/"+person.img);
			per.children('span').html(person.name);
	},function(){
		var per = $('#personal');
			per.css({
				display : 'none'
			});
	})
	$scope.personNews = function (){
		
		//从本地存储中拿个人信息
		
	}
//点击显示修改密码页面
		$scope.changMM=function(){
			$('.changeMima').css({
				display:'block',
			});
			$scope.changePassword = aCookie.password;

			$scope.changeUsername = aCookie.name;
		}
//点击隐藏修改的页面
		$scope.topclose=function(){
			$('.changeMima').css({
				display:'none',
			});
		}
//执行修改密码
		$scope.doChange=function(){
//			console.log(aCookie.id);
			$http({
				method : 'POST',
				url    : 'http://localhost/yage_hotel/oAhotel/php/changePassword.php',
				headers: {
					'content-type':'application/x-www-form-urlencoded'
				},
				data   :$.param({
					id : aCookie.id,
					username : $scope.changeUsername,
					password : $scope.changePassword
				})
			}).then(function(){
				$('.changeMima').css({
				display:'none',
			});
//			console.log('修改密码成功！');
			});	
		}
		

		
//子菜单显示功能 左侧主菜单点击时右边会显示以下子菜单，使用的是$scope模板变量
	$scope.account=function(){
		//账号管理主菜单
		$scope.list=[
		{id:1,name:'查看账户信息',urlTo:'searchAccount'},
		{id:2,name:'添加账户信息',urlTo:'addAccount'},
		];};
	$scope.room=function(){
		//客房管理主菜单
			$scope.list=[
			{id:1,name:'查看客房信息',urlTo:'searchRoom'},
			{id:2,name:'添加客房信息',urlTo:'addRoom'},
		];};
	$scope.order=function(){
		//订单管理主菜单
			$scope.list=[
			{id:1,name:'查看订单信息',urlTo:'searchOrder'},
			{id:2,name:'添加订单信息',urlTo:'addOrder'},
		];};		
	$scope.customer=function(){
		//客户管理主菜单
			$scope.list=[
			{id:1,name:'查看客户信息',urlTo:'searchCustomer'},
			{id:2,name:'添加客户信息',urlTo:'addCustomer'},
		];};
	$scope.liveIn=function(){
		//入住管理主菜单
			$scope.list=[
			{id:1,name:'查看入住信息',urlTo:'searchLivein'},
			{id:2,name:'添加入住信息',urlTo:'addLiveIn'},
			];};
	$scope.sysDo=function(){
		//系统设置主菜单
			$scope.list=[
			{id:1,name:'商城设置',urlTo:'searchSysDo'},
			{id:2,name:'系统设置',urlTo:'addSysDo'},
			];};
			
			
//请求员工信息			
		$scope.user='';
			$http({
					url:'http://localhost/yage_hotel/oAhotel/php/login.php',
			 		method:'POST',
			 		headers:{
			 			'content-type':'application/x-www-form-urlencoded'
			 		},
			 		cache:true,
				}).then(function(res){
//员工关键词搜索功能
					$scope.user=res.data;
//					console.log($scope.user);
				 	//$scope.$apply();
//获取data数组长度
				 	$scope.len = res.data.length
				 	$scope.lists = $scope.user;	
				 	$scope.$watch('searchKey',function(n,o){
					 $scope.lists = $filter('filter')($scope.user,$scope.searchKey);			 	
				 	},true);
			 });
	 
//删除员工信息
			$scope.delete=function($id,v){
//				console.log($index);
				$http({
					url:'http://localhost/yage_hotel/oAhotel/php/deleteAccount.php',
			 		method:'POST',
			 		headers:{
			 			'content-type':'application/x-www-form-urlencoded'
			 		},
			 		data:$.param({
			 			id:$id
			 		})
				});
//仿页面刷新数据，其实是数组切割
			 $scope.user.splice($scope.user.indexOf(v), 1);
			
			}

			
//添加账户信息
			$scope.register=function(){
//				console.log($('.fileimg').val());
//获取file表单提交的图片路径
				var fileimg=$('.fileimg').val();
//获取的路径进行切割以‘\’切割 去数组最后一个元素直到留下***.jpg这个格式
				var urlFile = fileimg.split().join().split('\\').pop();
//				console.log(fileimg.split().join().split('\\'));
//				console.log($scope.fileimg);
				$http({
					url:'http://localhost/yage_hotel/oAhotel/php/addAccount.php',
			 		method:'POST',
			 		headers:{
			 			'content-type':'application/x-www-form-urlencoded'
			 		},
			 		data:$.param({
			 			name:$('.reusername').val(),
			 			password:$('.repassword').val(),
			 			age:$('.reage').val(),
			 			work:$('.rework').val(),
			 			img:urlFile
			 		})
				}).then(function(){
					alert('添加成功！')
				});	
			}							
	
	}]);
	
//这是searchAccount页面的controller
	m.controller('ctrl1',['$scope','$http',function($scope,$http){
//模板数据
//			$scope.reusername='';
//			$scope.repassword='';
//			$scope.reage='';
//			$scope.rework='';	
//更新员工数据 参数$id 是点击时传过来 表示点击的那条数据的id 是唯一的 数据库删除操作就是根据这个id
			$scope.updateAccount=function($id){
//点击修改时 跳出修改数据的表单
				$('#updateAccount').css({
					display:'block'
				});
//				console.log($id);
//请求数据 查询员工数据
			$http({
					url:'http://localhost/yage_hotel/oAhotel/php/login.php',
			 		method:'POST',
			 		headers:{
			 			'content-type':'application/x-www-form-urlencoded'
			 		},
			 		cache:true,
				}).then(function(res){
				 	$scope.updateuser = res.data;	
//根据id参数 找到要修改的数据 
				for(var i=0;i<$scope.updateuser.length;i++){
					if($scope.updateuser[i].id == $id){
//将这条数据赋值给 模板参数
						$scope.updateuser = $scope.updateuser[i];
//						console.log($scope.updateuser);					
					};
//获取数据具体属性属性值 由于双向绑定 表单中会显示填入这些数据
				$scope.reusername = $scope.updateuser.username;
				$scope.repassword = $scope.updateuser.password;
				$scope.reage = $scope.updateuser.age;
				$scope.rework = $scope.updateuser.work;
				 $scope.$apply()
				}
			 });

//				$scope.id=$scope.updateuser.id;
			};
//点击提交表单时更新数据
			$scope.update = function(){
				
//获取file表单提交的图片路径
				var fileimg=$('.fileimg').val();
//获取的路径进行切割以‘\’切割 去数组最后一个元素
				var urlFile = fileimg.split().join().split('\\').pop();
				
//					console.log($scope.updateuser.id);
//更新数据的请求
				$http({
					url:'http://localhost/yage_hotel/oAhotel/php/updateAccount.php',
			 		method:'POST',
			 		headers:{
			 			'content-type':'application/x-www-form-urlencoded'
			 		},
			 		data:$.param({
			 			id : $scope.updateuser.id,
			 			username:$('.reusername').val(),
			 			password:$('.repassword').val(),
			 			age:$('.reage').val(),
			 			work:$('.rework').val(),
			 			img :urlFile
			 		}),
			 		cache:true,
				}).then(function(){
					alert('修改成功!');	
					$('#updateAccount').css({
					display:'none'
				});
				location.reload('http://localhost/yage_hotel/oAhotel/html/index.html#/searchAccount');
				});

			}
//点击取消 就让其消失
				$scope.close = function(){
					$('#updateAccount').css({
					display:'none'
				});
				}	
			}]);
		
//这是searchSysDo.html系统设置的controller
	m.controller('ctrl2',['$scope','$http',function ($scope,$http) {
		
		$scope.startTime = '';
		$scope.endTime = '';
		$scope.reason = '';
		$scope.chkBtn = 'false';
//执行添加商城设置数据
		$scope.go = function(){
			var sysImg = $('#sysImg').val();
			var urlImg = sysImg.split().join().split('\\').pop();
//			console.log($scope.chkBtn);
			$http({
				method : 'POST',
				url : 'http://localhost/yage_hotel/oAhotel/php/addSysDo.php',
				headers : {
					'content-type' : 'application/x-www-form-urlencoded'
				},
				data : $.param({
					startTime : $scope.startTime,
					endTime   : $scope.endTime,
					reason    : $scope.reason,
					chkBtn    : $scope.chkBtn,
					sysImg    : urlImg,
				})
			});
		}
	}]);
	
//这是查看房间信息的controller
	m.controller('ctrl3',['$scope','$http','$filter',function($scope,$http,$filter){
//查询出所有的客房信息
//这是关键字搜索$scope.roomKey
		$scope.roomKey = '';
		$http({
			method : 'GET',
			url    : 'http://localhost/yage_hotel/oAhotel/php/searchRoom.php',
			cache  : true,
		}).then(function(res){
//查询客房信息数据
			$scope.data3 = res.data;
//			console.log($scope.data3);
			$scope.roomList = $scope.data3;
			$scope.$watch('roomKey',function(n,o){
				$scope.roomList = $filter('filter')($scope.data3,$scope.roomKey);
			},true);
		});
		

			
//删除某一个客房信息
		$scope.delroom = function(id,index){
			var ID = id ;
//			console.log(ID);
//删除请求
			$http({
				method : 'POST',
				url    : 'http://localhost/yage_hotel/oAhotel/php/delroom.php',
				headers : {
					'content-type' : 'application/x-www-form-urlencoded'
				},
				data  :$.param({
					id : ID,
				})
			}).then(function(){
				location.reload('http://localhost/yage_hotel/oAhotel/html/index.html#/searchRoom')
			})
//			$scope.data3.splice($scope.data3.indexOf(index),1);
		};
		
		
//修改某个客房信息	
				$scope.cRoom = '';
				$scope.cStyle = '';
				$scope.cRest = '';
				$scope.cPrice = '';
				$scope.cNews = '';
				$scope.cImg = '';				
		$scope.changeRoom = function(id){

			$scope.modify = id ;
			$('.roomChange').css({
				display : 'block'
			})
			for(var i = 0 ; i < $scope.data3.length ; i++){
				if($scope.data3[i].id == id){
//将你所需要的数据赋值给这个$scope.data4,不能改变上边的$scope.data3
				$scope.data4 = $scope.data3[i];
				$scope.cRoom = $scope.data4.roomNum;
				$scope.cStyle = $scope.data4.roomStyle;
				$scope.cRest = $scope.data4.roomRest;
				$scope.cPrice = $scope.data4.roomPrice;
				$scope.cImg  = $scope.data4.roomImg;
				$scope.cNews = $scope.data4.roomNews;
				break;
					
				}			
			}
		}
//点击确认修改后发送http请求后台 修改数据库数据
		$scope.roomBtn = function(){
			$http({
				method : 'POST',
				url    : 'http://localhost/yage_hotel/oAhotel/php/updateRoom.php',
				headers: {
					'content-type' : 'application/x-www-form-urlencoded'
				},
				data : $.param({
					id : $scope.modify,
					roomNum : $scope.cRoom,
					roomStyle : $scope.cStyle,
					roomRest : $scope.cRest,
					roomPrice : $scope.cPrice,
					roomImg : $scope.cImg,
					roomNews : $scope.cNews,
				})
			}).then(function(){
				alert('修改成功！');
				$('.roomChange').css({
				display : 'none'
			});
//修改成功时重新加载页面
			location.reload('http://localhost/yage_hotel/oAhotel/html/index.html#/searchRoom');
			});
		};
		
//放弃修改
		$scope.dropUpdate = function(){
			$('.roomChange').css({
				display : 'none'
			});
		}
				
	}]);
	

//这是查询客户信息的controller
	m.controller('ctrl4',['$scope','$http','$filter',function($scope,$http,$filter){
		
		//发送查询客户信息的请求
		$scope.customerList = '';
		$scope.customerKey = '';
		$scope.allLength   ='';
		var start = 0;
		var end = 5;
		$http({
			method : 'GET',
			url    : 'http://localhost/yage_hotel/oAhotel/php/searchCustomer.php',
			cache  :true,

		}).then(function(res){
//			console.log(res.data);
		$scope.customerList = res.data;
		//总共有多少条数据
		$scope.allLength = $scope.customerList.length;
		$scope.customerLists = $scope.customerList;
		//关键词搜索监听过滤
		$scope.$watch('customerKey',function(n,o){
			$scope.customerLists = $filter('filter')($scope.customerList,$scope.customerKey);						
			$scope.customerList1=$scope.customerLists.slice(start,end);
		},true);	

		});

//分页操作
//下一页按钮 点击事件
		$scope.increase = function(){
//获取筛选之后的数据 得到他的数组长度
		var len = $scope.customerLists.length;
//最后一页数据长度
			var lastNum = len%5;
			var pageLen = 5;
			var pageSlze = Math.floor(len/5);			
			if(end <len ){
			start +=5;
			end +=5;	
			$scope.customerList1 = $scope.customerLists.slice(start,end)
//			console.log(end);
			}
		};
//上一页操作
		$scope.decrease = function(){
//获取筛选之后的数据 得到他的数组长度
		var len = $scope.customerLists.length;
//最后一页数据长度
			var lastNum = len%5;
			var pageLen = 5;
			var pageSlze = Math.floor(len/5);			
			if(end >5 ){
			start -=5;
			end -=5;	
			$scope.customerList1 = $scope.customerLists.slice(start,end);	
			}
		};	
		
//删除客户信息
		$scope.deleteCustomer = function(id,index){
			$http({
				method : 'POST',
				url    : 'http://localhost/yage_hotel/oAhotel/php/deleteCustomer.php',
				headers: {
					'content-type':'application/x-www-form-urlencoded'
				},
				data   :$.param({
					id : id,
				})
			}).then(function(){
				location.reload('http://localhost/yage_hotel/oAhotel/html/index.html#/searchCustomer');
			});
			$scope.customerList1.splice(index,1);	
		}
		
//修改客户信息
		$scope.cuname = '';
		$scope.cupassword = '';
		$scope.cuidentity = '';
		$scope.cusex = '';
		$scope.cucontact = '';
		var ID = '';
		//点击修改 在表单中写入要修改的数据,这个index是所在分页的序号 仅仅是为了找到要修改的数据，而id是这条数据的id,对应数据库的id
		$scope.updateCustomer = function(index,id){
			ID = id;
			$('#updateCustomer').css({
				display : 'block'
			});
			console.log($scope.customerList1[index]);
		$scope.cuname = $scope.customerList1[index].name;
		$scope.cupassword = $scope.customerList1[index].passwd;
		$scope.cuidentity = $scope.customerList1[index].identity;
		$scope.cusex = $scope.customerList1[index].sex;
		$scope.cucontact = $scope.customerList1[index].contact;
		}
		
		//点击确认修改按钮 执行数据库请求！！！！
		$scope.upCuOk = function(){
//			console.log($scope.cuname);
			$http({
				method : 'POST',
				url    : 'http://localhost/yage_hotel/oAhotel/php/updateCustomer.php',
				headers: {
					'content-type' : 'application/x-www-form-urlencoded'
				},
				data   : $.param({
					id : ID,
					name : $scope.cuname,
					password : $scope.cupassword,
					identity : $scope.cuidentity,
					sex : $scope.cusex,
					contact : $scope.cucontact
				})
				
			}).then(function(){
				alert('修改成功！');
				$('#updateCustomer').css({
				display : 'none'
			});
			location.reload('http://localhost/yage_hotel/oAhotel/html/index.html#/searchCustomer');
			});
		}
		//取消修改
		$scope.upCuNo = function(){
			$('#updateCustomer').css({
				display : 'none'
			})
		}
		
	}]);
	
	
//这是addRoom添加客房信息的controller
	m.controller('ctrl5',['$scope','$http',function($scope,$http){
		
		//添加客房信息
		$scope.addRoom = function(){
			//获取表单数据	
			var rNum = $('.roomNum').val(),
			rStyle= $('.roomStyle').val(),
			rRest = $('.roomRest').val(),
			rPrice = $('.roomPrice').val(),
			rfileimg = $('.roomfileimg').val().split('\\').pop(),
			rNews = $('.roomNews').val();
//			console.log($('.roomfileimg').val().split('\\').pop());
//发送添加数据请求 写入数据库
			$http({
			method : 'POST',
			url    : 'http://localhost/yage_hotel/oAhotel/php/addRoom.php',
			headers:{
				'content-type' : 'application/x-www-form-urlencoded'
			},
			data : $.param({
				roomNum : rNum,
				roomStyle : rStyle,
				roomRest  : rRest,
				roomPrice : rPrice,
				roomfileimg: rfileimg,
				roomNews   : rNews
			})
		}).then(function(){
			location.reload('http://localhost/yage_hotel/oAhotel/html/index.html#/searchRoom');
		});
		};
		
	}]);
	
	
//这是添加客户信息的控制器
	m.controller('ctrl6',['$scope','$http','$filter',function($scope,$http,$filter){
		//点击添加客户信息事件
		$scope.addCutomer = function(){
			//添加客户信息请求
			console.log($('.cupassword').val());
			$http({
				method : 'POST',
				url    : 'http://localhost/yage_hotel/oAhotel/php/addCustomer.php',
				headers: {
					'content-type' : 'application/x-www-form-urlencoded'
				},
				data   : $.param({
					name : $('.cuname').val(),
					password : $('.cupassword').val(),
					identity : $('.cuidentity').val(),
					sex      : $('.cusex').val(),
					contact  : $('.cucontact').val()
				})
			}).then(function(){
				location.reload('http://localhost/yage_hotel/oAhotel/html/index.html#/searchCustomer');
			});
		}
		

	}]);
	
	
//这是添加订单的控制器
	m.controller('ctrl7',['$scope','$http',function($scope,$http){
		
		
		$scope.addOrder = function(){
			$http({
			method : 'POST',
			url    : 'http://localhost/yage_hotel/oAhotel/php/addOrder.php',
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
			location.reload('http://localhost/yage_hotel/oAhotel/html/index.html#/searchOrder');
		});
		}	 
		
	}]);
	

//这是查询，删除，修改订单的控制器
	m.controller('ctrl8',['$scope','$http','$filter',function($scope,$http,$filter){
		
		//关键字双向绑定
		$scope.orderKey = '';
		$scope.allOrder = '';
		var start = 0;
		var end = 5;
		//查询请求
		$http({
			method : 'POST',
			url    : 'http://localhost/yage_hotel/oAhotel/php/searchOrder.php',
			headers: {
				'content-type' : 'application/x-www-form-urlencoded'
			},
			cache :true
		}).then(function(res){
			$scope.orderList = res.data;
			$scope.allOrder = $scope.orderList.length;
			$scope.orderLists = $scope.orderList;
//			console.log($scope.orderLists);
			$scope.$watch('orderKey',function(n,o){
				$scope.orderLists = $filter('filter')($scope.orderList,$scope.orderKey);
				$scope.orderList1 = $scope.orderLists.slice(start,end);
			});
		});
		
//订单的分页操作
//点击下一页按钮 点击事件
		$scope.orderGo = function(){
//获取筛选之后的数据 得到他的数组长度
		var len = $scope.orderLists.length;
//最后一页数据长度
			var lastNum = len%5;
			var pageLen = 5;
			var pageSlze = Math.floor(len/5);			
			if(end <len ){
			start +=5;
			end +=5;	
			$scope.orderList1 = $scope.orderLists.slice(start,end)
//			console.log(end);
			}
		};
		
//点击上一页操作
		$scope.orderBack = function(){
//获取筛选之后的数据 得到他的数组长度
		var len = $scope.orderLists.length;
//最后一页数据长度
			var lastNum = len%5;
			var pageLen = 5;
			var pageSlze = Math.floor(len/5);			
			if(end >5 ){
			start -=5;
			end -=5;	
			$scope.orderList1 = $scope.orderLists.slice(start,end);	
			}
		};			
		
//删除订单操作
		$scope.deleteOrder = function(id){
//			console.log(id);
			var ID = id;

			$http({
				method : 'POST',
				url    : 'http://localhost/yage_hotel/oAhotel/php/deleteOrder.php',
				headers: {
					'content-type' : 'application/x-www-form-urlencoded'
				},
				data   : $.param({
					id : ID
				})
			}).then(function(){
				location.reload('http://localhost/yage_hotel/oAhotel/html/index.html#/searchOrder');
			});
		}
		
//修改订单操作
			var orderId = '';
			$scope.orname = '';
			$scope.oridentity = '';
			$scope.orcontact = '';
			$scope.orinTime = '';
			$scope.orDays = '';
			$scope.orStyle = '';
		$scope.updateOrder = function(id,index){
			orderId = id;
			$('#updateOrder').css({
				display : 'block'
			});
			$scope.orname = $scope.orderList1[index].name;
			$scope.oridentity = $scope.orderList1[index].identity;
			$scope.orcontact =$scope.orderList1[index].contact;
			$scope.orStyle = $scope.orderList1[index].roomStyle;
//			console.log($scope.orderList1[index].indentity);
		}
//确认修改		
		$scope.orderOk = function(){
//		console.log($('.orinTime').val());
			$http({
				method : 'POST',
				url    : 'http://localhost/yage_hotel/oAhotel/php/updateOrder.php',
				headers: {
					'content-type' : 'application/x-www-form-urlencoded'
				},
				data   : $.param({
					id : orderId,
					name : $scope.orname,
					identity : $scope.oridentity,
					contact : $scope.orcontact,
					inTime : $('.orinTime').val(),
					inDays : $('.orDays').val(),
					roomStyle : $scope.orStyle,
				})
			}).then(function(){
				location.reload('http://localhost/yage_hotel/oAhotel/html/index.html#/searchOrder');
			})
		};
//放弃修改		
		$scope.orderNo = function(){
			$('#updateOrder').css({
				display : 'none'
			});
		}

//将订单添加到入住信息中，客户当天入住
			var delorderId = '';
		$scope.chkin = function(id,index){
			delorderId = id;
			console.log($scope.orderList1[index].name)
			$('#writeliveOrder').css({
				display : 'block'
			});
			$scope.toliveinname = $scope.orderList1[index].name;
			$scope.toliveidentity = $scope.orderList1[index].identity;
			$scope.tolivecontact = $scope.orderList1[index].contact;				
		}
		
		$scope.orderTolive = function(){
			$http({
				method : 'POST',
				url    : 'http://localhost/yage_hotel/oAhotel/php/addLiveIn.php',
				headers: {
					'content-type' : 'application/x-www-form-urlencoded'
				},
				data   :$.param({	
					name : $('.toliveinname').val(),
					identity : $('.toliveidentity').val(),
					contact : $('.tolivecontact').val(),
					outTime : $('.tooutTime').val(),
					roomNumber : $('.toliveroomnum').val(),
				})
			}).then(function(){
				$('#updateOrder').css({
				display : 'none'
			});
//			添加到入住信息之后 删除这个订单
			$scope.deleteOrder(delorderId);
//				location.reload('http://localhost/yage_hotel/oAhotel/html/index.html#/searchLivein');
			})
		}
		
		//取消增加
		$scope.orderClosed = function(){
			$('#writeliveOrder').css({
				display : 'none'
			});
		}
		
	}]);
	

//查询客户入住信息
	m.controller('ctrl9',['$scope','$http','$filter',function($scope,$http,$filter){
		
		$scope.liveInKey = '';
		$scope.liveInAll = '';
		var start = 0;
		var end = 5;
//发送查询请求
		$http({
			method : 'POST',
			url    : 'http://localhost/yage_hotel/oAhotel/php/searchLiveIn.php',
			cache  : true
		}).then(function(res){
			$scope.liveInList = res.data;
			$scope.liveInAll = $scope.liveInList.length;
			//使原始值不变
			$scope.liveInLists = $scope.liveInList;
			
			$scope.$watch('liveInKey',function(n,o){
				$scope.liveInLists = $filter('filter')($scope.liveInList,$scope.liveInKey);
				$scope.liveInList1 = $scope.liveInLists.slice(start,end);
			})
		});
		
		//入住信息的分页操作
//点击下一页按钮 点击事件
		$scope.liveInGo = function(){
//获取筛选之后的数据 得到他的数组长度
		var len = $scope.liveInLists.length;
//最后一页数据长度
			var lastNum = len%5;
			var pageLen = 5;
			var pageSlze = Math.floor(len/5);			
			if(end <len ){
			start +=5;
			end +=5;	
			$scope.liveInList1 = $scope.liveInLists.slice(start,end);
//			console.log(end);
			}
		};
		
//点击上一页操作
		$scope.liveInBack = function(){
//获取筛选之后的数据 得到他的数组长度
		var len = $scope.liveInLists.length;
//最后一页数据长度
			var lastNum = len%5;
			var pageLen = 5;
			var pageSlze = Math.floor(len/5);			
			if(end >5 ){
			start -=5;
			end -=5;	
			$scope.liveInList1 = $scope.liveInLists.slice(start,end);;	
			}
		};	
		
//到期退房事件
	$scope.chkOut = function(id){
		var ID = id;
		$http({
			method : 'POST',
			url    : 'http://localhost/yage_hotel/oAhotel/php/deleteLiveIn.php',
			headers: {
				'content-type' : 'application/x-www-form-urlencoded'
			},
			data   : $.param({
				id : ID,
			})
		}).then(function(){
			location.reload('http://localhost/yage_hotel/oAhotel/html/index.html#/searchLivein');
		})
	};
	
//修改入住信息操作
	$scope.liveName = '';
	$scope.liveIdentity = '';
	$scope.liveContact = '';
	$scope.liveNum = '';
	var liveId= ''; 
	$scope.updateLivein = function(id,index){
		 liveId = id;
		 $('#updateLive').css({
			display : 'block'
		});
		$scope.liveName = $scope.liveInList1[index].name;
		$scope.liveIdentity = $scope.liveInList1[index].identity;
		$scope.liveContact = $scope.liveInList1[index].contact;
		$scope.liveNum = $scope.liveInList1[index].roomnumber;
	};
	//确认修改
	$scope.liveOk = function(){
		console.log(liveId);
		$http({
			method : 'POST',
			url    : 'http://localhost/yage_hotel/oAhotel/php/updateLiveIn.php',
			headers: {
				'content-type' : 'application/x-www-form-urlencoded'
			},
			data   : $.param({
				id   : liveId,
				name : $scope.liveName,
				identity : $scope.liveIdentity,
				contact : $scope.liveContact,
				outTime : $('.outTime').val(),
				roomnumber : $scope.liveNum,
			}),
			cache :true
		}).then(function(){
			$('#updateLive').css({
			display : 'none'
		});
			location.reload('http://localhost/yage_hotel/oAhotel/html/index.html#/searchLivein');
		});
	}
	//放弃修改
	$scope.liveNo = function(){
		$('#updateLive').css({
			display : 'none'
		});
	}
	
	//添加信息至客户信息
	$scope.importName='';
	$scope.importIdentity='';
	$scope.importContact='';
	$scope.importOpen = function(index){
		$('#importNews').css({
			display : 'block'
		});
		$scope.importName=$scope.liveInList1[index].name;
		$scope.importIdentity=$scope.liveInList1[index].identity;
		$scope.importContact=$scope.liveInList1[index].contact;
		
//		console.log(index);
//		console.log($scope.liveInList1[index]);
	}
	//确认添加
	$scope.importTo = function(){
//		console.log($('.importstyle').val());
		$http({
			method : 'POST',
			url    : 'http://localhost/yage_hotel/oAhotel/php/addCustomer.php',
			headers: {
				'content-type' : 'application/x-www-form-urlencoded'
			},
			data   : $.param({
				name   : $scope.importName,
				password : 666666,
				identity : $scope.importIdentity,
				contact  : $scope.importContact,
				sex      : $('.importstyle').val(),
			}),
		}).then(function(){
			$('#importNews').css({
			display : 'none'
		});
		});
	}
	//取消添加
	$scope.importNo = function(){
		$('#importNews').css({
			display : 'none'
		});
	}
	}]);
	
//这是添加客户入住信息的控制器
	m.controller('ctrl10',['$scope','$http',function($scope,$http){
		
		//发送添加客户入住信息请求
		$scope.liveInOk = function(){
			$http({
			method : 'POST',
			url    : 'http://localhost/yage_hotel/oAhotel/php/addLiveIn.php',
			headers: {
				'content-type' : 'application/x-www-form-urlencoded'
			},
			data   : $.param({
				name : $('.liveinname').val(),
				identity : $('.liveidentity').val(),
				contact : $('.livecontact').val(),
				outTime : $('.outTime').val(),
				roomNumber : $('.liveroomnum').val(),

			}),
			cache :true

		});
		}
		
	}]);
	
	
	
//这是右侧已入住房间号查询
	m.controller('ctrl11',['$scope','$http',function($scope,$http){
		$http({
			method : 'POST',
			url    : 'http://localhost/yage_hotel/oAhotel/php/searchLiveIn.php',
			headers:{
				'content-type':'application/x-www-form-urlencoded'
			},
			cache :true
		}).then(function(res){
			
			
			var roomnum = [];
			var liText  = [];
			var aLi = $('.main-right').find('li');
			for(var i=0;i<res.data.length;i++){				
//				roomnum.push(res.data[i].roomnumber);
				for(var j=0;j<aLi.length;j++){
					if(aLi[j].innerText==res.data[i].roomnumber){
						aLi[j].style.backgroundColor ='red';
						aLi[j].style.color ='white';
					}				
				}		
			};		
			
		})
	}])
