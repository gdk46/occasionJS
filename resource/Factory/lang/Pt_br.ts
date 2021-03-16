import { LangInterface } from "./interface/LangInterface";

export class Pt_br implements LangInterface
{
    dayWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    month = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
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