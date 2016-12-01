
//1.首先取得处理月的总天数

/*
 * 判断闰年
 * return : 1  0
 */
function is_leap(year) {
    return (year%100==0?res=(year%400==0?1:0):res=(year%4==0?1:0));
}

/*
 * 定义一个包含十二个月在内的月份总天数的数组：
 */
//var m_days = new Array(31,28+is_leap(ynow),31,30,31,31,30,31,30,31,30,31);


//2.计算某月第一天是星期几(月份从0开始是1月)
var n1str = new Date(2016,0,3);
var firstday = n1str.getDay();
console.log(firstday);

/*
 * 得出某月日历表格行数
 */
//var tr_str = Math.ceil((m_days[mnow] + firstday)/7);







