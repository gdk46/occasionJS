class DateCalendarLang {

    /**
     * Set language native app calendar
     *
     * @return string
     */
    constructor (lang) {
        this.lang = lang;
    }

    /**
     * Set language day week
     *
     * @return array
     */
    langDay () {
        let dayWeek = [];

        switch (this.lang) {
            case 'es':
                dayWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
                break;

            case 'en-us':
                dayWeek = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
                break;

            case 'pt-br':
                dayWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
                break;

            default:
                dayWeek = "Parameter not accept, enter a language"
                break;
        }

        return dayWeek
    }
    // let day = langDay(); console.log(month[0]);

    /**
     * 
     *
     * @return array
     */
    getDay (){
        return this.langDay();
    }

    /**
     * Set language Month
     * 
     * @return array
     */
    langMonth () {
        let month = [];

        switch (this.lang) {
            case 'es':
                month = [
                    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
                ];
                break;

            case 'en-us':
                month = [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December',
                ];
                break;

            case 'pt-br':
                month = [
                    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
                ];
                break;
            default:
                month = "Parameter not accept, enter a language"
                break;
        }

        return month;
    }
    
    /**
     * 
     * 
     * @return array
     */
    getMonth (){
        return this.langMonth();
    }

    /**
     * Set language calendar
     * 
     * @return array like
     */
    languageApp () {
        return [{
            'month': this.langMonth(),
            'dayWeek': this.langDay()
        }];
    }
    // console.log(lang('pt-br')[0]['dayWeek'], lang('pt-br')[0]['month']);
}

module.exports = DateCalendarLang;