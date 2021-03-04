class DateMonth
{
    constructor (month, year) {
        const supportHelp = require("../Support/Help");

        this.help = new supportHelp();

        this.month = month; 
        this.year = year;
    }

    /**
     * 
     * 
     */
    validateMonth() {
        let validateMonth;

        if(this.month <= 0) {
            validateMonth = false;
        }

        if(this.month >= 12) {
            validateMonth = {
                "restMonth": this.month - 12
            };
        }

        return validateMonth;
    }

    /**
     * 
     * 
     */
    checkNumberDaysInMonth() {
        let dayMonth; 

        if(this.validateMonth(this.month)){

            if(!this.help.isEmpty(this.month)) {

                let date = new Date(this.year, this.month, 0);
                let numberDay = date.getDate();
            
                dayMonth = numberDay;
            } else {
                dayMonth = false;
            }

        }
        
        return dayMonth;
    }

}

module.exports = DateMonth;
