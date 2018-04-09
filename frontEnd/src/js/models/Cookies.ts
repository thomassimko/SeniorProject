var cookies = require('browser-cookies');

export interface ICookies {
    get(name:string);
    set(name:string, value:string);
    erase(name:string);
}
export class Cookies implements ICookies {
    get(name:string) {
        return cookies.get(name);
    }
    set(name:string, value:string, options?:any) {
        cookies.set(name, value);
    }
    erase(name:string) {
        cookies.erase(name);
    }

}