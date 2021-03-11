//! occasionTS.ts
//! version : 2.29.1
//! authors : Gleisson Neves, OccasionTS.ts contributors
//! license : MIT
//! url

export default class Help {

    /**
     * Verify if param "e" is empty
     * 
     * @param e 
     * @return boollean
     */
    isEmpty(e) {
        switch (e) {
            case "":
            case 'undefined':
            case null:
            case false:
                return true;
            default:
                return (typeof (e) == 'undefined') ? true : false;
        }
    }
    
    /**
     * Verify if param "e" is Undefined
     * 
     * @param e 
     * @return boollean
     */
    isUndefined(e) {
        return e === void 0;
    }

    /**
     * Verify if param "e" is number
     * 
     * @param e 
     * @return boollean
     */
    isNumber(e) {
        return (
            typeof e === 'number' ||
            Object.prototype.toString.call(e) === '[object Number]'
        );
    }

    /**
     * Verify if param "e" is array
     * 
     * @param e 
     * @return boollean
     */
    isArray(e) {
        return (
            e instanceof Array ||
            Object.prototype.toString.call(e) === '[object Array]'
        );
    }
}
