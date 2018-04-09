export interface ICookies {
    get(name: string): any;
    set(name: string, value: string): any;
    erase(name: string): any;
}
export declare class Cookies implements ICookies {
    get(name: string): any;
    set(name: string, value: string, options?: any): void;
    erase(name: string): void;
}
