//! occasionTS.ts
//! version : 2.29.1
//! authors : Gleisson Neves, OccasionTS.ts contributors
//! license : MIT
//! url

export default class Lang
{
    /**
     * language native app calendar
     *
     * @return string
     */
    lang:string;


    /**
     * Set language native app calendar
     *
     * @return string
     */
    constructor (lang) {
        this.lang = lang;
    }

    /**
     * 
     * @returns string
     */
    getLang() {
        return this.lang;
    }

    /**
     * @param lang string
     */
    setLang(lang:string) {
        this.lang = lang;
    }

}