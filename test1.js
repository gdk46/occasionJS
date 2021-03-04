const DateCalendar = require("./DateCalendar/DateCalendar");


/*  */
let calendar = new DateCalendar('pt-br', month, year);


/*  */
console.log(calendar.checkNumberDaysInMonth(13, 2021));
