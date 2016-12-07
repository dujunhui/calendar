/*
 依赖jquery
 */


function Du_calendar(id){
    this.oParent = $('#'+id);//父级
    this.table = this.oParent.find("table");
    this.leftBtn = this.oParent.find(".du_left");
    this.rightBtn = this.oParent.find(".du_right");
    this.timeTitle = this.oParent.find(".du_time");

    this.year;
    this.month;
    this.date;
    this.weekNum;
    this.m_days;
    this.tr_str;
}

//初始化属性数据
Du_calendar.prototype.addProDate = function(dateObj){

    this.year = dateObj.getFullYear();
    this.month = dateObj.getMonth();
    this.date = dateObj.getDate();

    //获得当月1号是星期几
    var n1str = new Date(this.year,this.month,1); //当月第一天
    this.weekNum = n1str.getDay();                //当月第一天星期几(星期日为0)

    //一个包含十二个月在内的月份总天数的数组：
    this.m_days = new Array(31,28 + is_leap(this.year),31,30,31,30,31,31,30,31,30,31);

    //表格所需要行数
    this.tr_str = Math.ceil((this.m_days[this.month] + this.weekNum)/7);

    //判断是否是闰年
    function is_leap(year){
        return (year%100==0?res=(year%400==0?1:0):res=(year%4==0?1:0));
    }
}


//加载table结构
Du_calendar.prototype.addTable = function(){
    //打印当前日期
    this.timeTitle.html(this.year + " " + (parseInt(this.month)+1));
    //打印表格第一行（有星期标志）
    this.table.html("");
    this.table.append("<tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr>");

    for(i=0; i<this.tr_str; i++) { //表格的行
        var trStr = "<tr>";

        for(j=0;j<7;j++) {         //表格每行的单元格
            var index = i*7+j;     //单元格自然序列号
            var date_str = index-this.weekNum+1; //计算日期

            //过滤无效日期（小于等于零的、大于月总天数的）
            if(date_str<=0 || date_str>this.m_days[this.month]){
                date_str = "&nbsp;"
            }else{
                date_str = index-this.weekNum+1;
            }

            //打印日期：今天底色为红
            if(date_str == this.date){
                var tdStr = "<td align='center' bgcolor='red'>" + date_str + "</td>"
            }else{
                var tdStr = "<td align='center'>" + date_str + "</td>"
            }

            trStr = trStr + tdStr;
        }

        trStr = trStr +"</tr>";
        this.table.append(trStr);
    }
}

Du_calendar.prototype.init = function(){
    var dateObj = new Date();
    this.addProDate(dateObj);
    this.addTable();

    var c_num = 0;
    var This = this;
    //左键
    this.leftBtn.on("click",function(){
        c_num--
        var dateObj;
        if(c_num == 0){
            dateObj = new Date();
        }else{
            var y = parseInt(This.year);
            var m = parseInt(This.month);
            m--
            if(m<0){
                m = 11 ;
                y--;
            }
            dateObj = new Date(y,m,1);
        }

        This.addProDate(dateObj);
        This.addTable();

    })
    //右键
    this.rightBtn.on("click",function(){
        c_num++
        var dateObj;
        if(c_num == 0){
            dateObj = new Date();
        }else{
            var y = parseInt(This.year);
            var m = parseInt(This.month);
            m++
            if(m>11){
                m = 0;
                y++;
            }
            var dateObj = new Date(y,m,1);
        }

        This.addProDate(dateObj);
        This.addTable();

    })

}

