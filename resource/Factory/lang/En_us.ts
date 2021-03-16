import { LangInterface } from "./interface/LangInterface";

export class En_us implements LangInterface
{
    constructor() {
        
    }
    dayWeek = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
    month = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];
    
    /**
     * 
     * @returns array
     */
    getDayWeek(): string[]
    {
        return this.dayWeek;
    }
 
    /**
     * 
     * @returns array
     */
    getMonth(): string[]
    {
        return this.month;
    }
} 