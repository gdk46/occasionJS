import { LangInterface } from "./interface/LangInterface";

export class Es implements LangInterface
{
    dayWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    month = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
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