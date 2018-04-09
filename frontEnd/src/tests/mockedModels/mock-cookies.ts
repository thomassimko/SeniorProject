import {ICookies} from '../../js/models/Cookies';

const map = new Map<string, string>();

export class MockCookies implements ICookies {

    get(name:string) {
        return map.has(name) ? map.get(name) : null;
    }
    set(name:string, value:string, options?:any) {
        map.set(name, value);
    }
    erase(name:string) {
        map.delete(name);
    }

}