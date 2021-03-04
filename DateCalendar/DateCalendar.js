class DateCalendar
{
    /**
     * 
     * @param {*} lang 
     */
    constructor (lang,  month, year) {
        const dateCalendarLang = require("./DateCalendarLang");
        const supportHelp = require("../Support/Help");

        this.langDayWeekMonth = new dateCalendarLang(lang);
        this.help = new supportHelp();

        this.month = month; 
        this.year = year;
    }

    /**
     * 
     * 
     */
    test(){
        return this.help.isEmpty('asd');
    }

}

module.exports = DateCalendar;