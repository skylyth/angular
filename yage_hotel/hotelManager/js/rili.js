 window.onload= function () {
            function $(id){return document.getElementById(id)}
            var contents=$('content'),//获取添加天数的标签
                    minus=$('minus'),//获取 减 按钮
                    plus=$('plus'),//获取 加 按钮
                    showYear=$('show');//获取 显示几年几月的标签
            //获取当前年 月
            var nowDay=new Date(),
                nYear=nowDay.getFullYear(),
                    nMonth=nowDay.getMonth()+ 1,
                    curDay=nowDay.getDate();
            show(nYear,nMonth);//首先调用 show函数 在页面上显示当前年月的日历
            function getDay(year,month){
                //首先 获取某一年中 某一个月的天数
                var iDate=new Date(year,month);
                iDate.setDate(0);
                return iDate.getDate();
            }//alert(getDay(2016,11));

            function getCurDay(year,month){
                //首先 当前月 天201612 今天是几号 日期
                var iDate=new Date(year,month);
                return iDate.getDate();
            }



            function getWeek(year,month){
                //首先获取 某月的第一天为星期几
                var iDate=new Date(year,month);
                iDate.setDate(1);
                return  iDate.getDay();
            }
            // alert(getWeek(2016,11));
            //减月份 单击减 按钮 执行 月份减一的操作
            minus.onclick= function () {
                //判断 月份 对年份减1。
                if(nMonth<2){//月份传过来已经减1 比如 12月 到这里就变成11
                    nYear-=1;
                    nMonth=12;
                }else
                    nMonth-=1;
                show(nYear,nMonth);
            }
            //加月份 单击按钮 月份加1
            plus.onclick= function () {
                if(nMonth>11){
                    nYear+=1;
                    nMonth=1;
                }else
                    nMonth+=1;
                show(nYear,nMonth);
            }
            function show(nYear,nMonth){
                var iWeek=getWeek(nYear,nMonth);
                var iDay=getDay(nYear,nMonth);
                var content='';
                for(var i=0;i<iWeek;i++){
                    content+='<span></span>';
                }
                for(var j=1;j<=iDay;j++){
                    content +='<span>'+j+'</span>';
                }
                contents.innerHTML=content;
                showYear.innerHTML=nYear+'年'+nMonth+'月';
                getCurDay(nYear,nMonth);
                if(nYear==2017&&nMonth==4){
                    var spans= contents.getElementsByTagName('span');
                    spans[curDay].style.backgroundColor='orange';
                    spans[curDay].style.color='#fff';
                }
            }
        }