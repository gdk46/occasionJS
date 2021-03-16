export interface LangInterface 
{
    /**
     * ----------- Set language day week ------------
     * configure the format of the simplified day of the week
     * ----------------------------------------------
     *
     * @return array
     */
    dayWeek: string[];

    /**
     * ----------- Set language Month ------------
     * configure the language that will be used in months 
     * ----------------------------------------------
     * 
     * @return array
     */
    month: string[];


    /**
     * ----------- Get language day week ------------
     * returns the format of the simplified day of the week
     * ----------------------------------------------
     * 
     * @return array
     */
    getDayWeek(): string[];


    /**
     * ----------- Get language Month ------------
     * returns the language that will be used in months 
     * -------------------------------------------
     * 
     * @return array
     */
    getMonth(): string[];
}
