//设置或者修改某一个cookie
function setCookie(name,value,expires,path){
	var oDate=new Date();
		oDate.setDate(oDate.getDate()+expires);
		path=path||'/';
		document.cookie=name+'='+encodeURIComponent(value)+';expires='+oDate+';path='+path;
		return true;
}
//查询某一个cookie
function getCookie(name){
	var sCookie=document.cookie;//此时获取的字符串对象;
	var oCookie=sCookie.split('; ');
		for(var i=0;i<oCookie.length;i++){
			var aCookie=oCookie[i].split('=');//['name','value']
			 if(aCookie[0]===name){
			 	return decodeURIComponent(aCookie[1]);
			 }
		}
}
//删除某一个cookie
function removeCookie(name){
	setCookie(name,1,-1);
	return true;
}