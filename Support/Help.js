class Help {

    /**
     * Verify if var is empty
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
    
}

module.exports = Help;