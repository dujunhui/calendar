# du-Calendar

- html
```html
    <div class="du-calendarBox" id="myCalendar">
        <div class="du-calendarBar">
            <span class="du-left"> &lt; </span>
            <span class="du-time"></span>
            <span class="du-right"> &gt; </span>
        </div>
        <table></table>
    </div>
```
- css
```html
    <link rel="stylesheet" href="css/du-Calendar.css"/>
```
- js
```html
    <script src="js/tool/jquery-1.11.1.js"></script>
    <script src="js/du-Calendar.js"></script>
```
- show
```javascript
    var calendar = new DuCalendar('myCalendar');
    calendar.init();
```