/*
 * 依赖jquery1-1.11.1.js
 * 面向过程写法
 */

var year;    //年
var month;   //月
var date;    //日
var weekNum; //1号是星期几
var m_days;  //定义一个包含十二个月在内的月份总天数的数组：
var tr_str;  //表格所需要行数

$table = $("#du_calendarBox").find("table");
$leftBtn = $("#du_calendarBox").find(".du_left");
$rightBtn = $("#du_calendarBox").find(".du_right");
$timeTitle = $("#du_calendarBox").find(".du_time");

initCalendar();
function initCalendar(){
    var dateObj = new Date();
    addProDate(dateObj);
    addTable();
    addBtnEve();
}

function addProDate(dateObj){
    //初始化变量
    year=dateObj.getFullYear();  //年份
    month=dateObj.getMonth();    //月份
    date=dateObj.getDate();      //日期
    weekNum = getWeekNum();      //1号是星期几
    m_days = new Array(31,28+is_leap(year),31,30,31,30,31,31,30,31,30,31); //各月份的总天数
    tr_str = Math.ceil((m_days[month] + weekNum)/7);//表格所需要行数
}

//计算某月第一天是星期几(月份从0开始是1月)
function getWeekNum(){
    var n1str = new Date(year,month,1); //当月第一天
    return n1str.getDay();              //当月第一天星期几(星期日为0)
}

//判断闰年  return : 1  0
function is_leap(year) {
    return (year%100==0?res=(year%400==0?1:0):res=(year%4==0?1:0));
}


function addTable(){

    //打印当前日期
    $timeTitle.html(year +" "+ (month+1));
    //打印表格第一行（有星期标志）
    $table.html("");
    $table.append("<tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr>");

    for(i=0;i<tr_str;i++) { //表格的行
        var trStr = "<tr>";

        for(j=0;j<7;j++) {         //表格每行的单元格
            var index = i*7+j;     //单元格自然序列号
            var date_str = index-weekNum+1; //计算日期

            //过滤无效日期（小于等于零的、大于月总天数的）
            if(date_str<=0 || date_str>m_days[month]){
                date_str = "&nbsp;"
            }else{
                date_str = index-weekNum+1;
            }

            //打印日期：今天底色为红
            if(date_str==date){
                var tdStr = "<td align='center' bgcolor='red'>" + date_str + "</td>"
            }else{
                var tdStr = "<td align='center'>" + date_str + "</td>"
            }

            trStr = trStr + tdStr;
        }

        trStr = trStr +"</tr>";
        $table.append(trStr);
    }
}

function addBtnEve(){
    var _tag = 0;
    $leftBtn.click(function(){
        _tag--
        var dateObj;
        if(_tag == 0){
            dateObj = new Date();
        }else{
            year = parseInt(year);
            month = parseInt(month)-1;
            if(month<0){
                month = 11 ;
                year--;
            }
            dateObj = new Date(year,month,1);
        }
        addProDate(dateObj);
        addTable();
    })
    $rightBtn.click(function(){
        _tag++
        var dateObj;
        if(_tag == 0){
            dateObj = new Date();
        }else{
            year = parseInt(year);
            month = parseInt(month)+1;
            if(month>11){
                month = 0 ;
                year++;
            }
            dateObj = new Date(year,month,1);
        }
        addProDate(dateObj);
        addTable();
    })
}

