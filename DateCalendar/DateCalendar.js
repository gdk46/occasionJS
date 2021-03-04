class DateCalendar
{
    /**
     * 
     * @param {*} lang 
     */
    constructor (lang) {
        const dateCalendarLang = require("./DateCalendarLang");
        const supportHelp = require("../Support/Help");

        this.langDayWeekMonth = new dateCalendarLang(lang);
        this.help = new supportHelp();
    }

    /**
     * 
     * @param {*} month 
     */
    validateMonth(month) {
        let validateMonth;

        if(month <= 0) {
            validateMonth = false;
        }

        if(month >= 12) {
            validateMonth = {
                "restMonth": month - 12
            };
        }

        return validateMonth;
    }

    /**
     * 
     * 
     * @param {*} month
     * @param {*} year
     */
    checkNumberDaysInMonth(month, year) {
        let dayMonth; 

        if(this.validateMonth(month)){
            if(!this.help.isEmpty(month)) {
                let date = new Date(year, month, 0);
                let numberDay = date.getDate();
            
                dayMonth = numberDay;
            } else {
                dayMonth = false;
            }
        }
        
        return dayMonth;
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