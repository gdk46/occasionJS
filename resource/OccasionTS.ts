//! occasionTS.ts
//! version : 2.29.1
//! authors : Gleisson Neves, OccasionTS.ts contributors
//! license : MIT
//! url

import Format from './format';
import Lang from './lang';
import Operation from './operation';
import Help from '../Support/help';

export default class OccasionTS
{

    format:object;
    lang:object;
    operation:object;
    help:object;

    constructor() {
        this.format = new Format();
        this.lang = new Lang('pt-br');
        this.operation = new Operation();
        this.help = new Help();
    }

}