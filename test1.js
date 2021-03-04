const DateCalendar = require("./DateCalendar/DateCalendar");

let calendar = new DateCalendar('pt-br');


console.log(calendar.checkNumberDaysInMonth(13, 2021));
