
//1.����ȡ�ô����µ�������

/*
 * �ж�����
 * return : 1  0
 */
function is_leap(year) {
    return (year%100==0?res=(year%400==0?1:0):res=(year%4==0?1:0));
}

/*
 * ����һ������ʮ���������ڵ��·������������飺
 */
//var m_days = new Array(31,28+is_leap(ynow),31,30,31,31,30,31,30,31,30,31);


//2.����ĳ�µ�һ�������ڼ�(�·ݴ�0��ʼ��1��)
var n1str = new Date(2016,0,3);
var firstday = n1str.getDay();
console.log(firstday);

/*
 * �ó�ĳ�������������
 */
//var tr_str = Math.ceil((m_days[mnow] + firstday)/7);







