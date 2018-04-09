import { ICookies } from '../../js/models/Cookies';
export declare class MockCookies implements ICookies {
    get(name: string): string | null | undefined;
    set(name: string, value: string, options?: any): void;
    erase(name: string): void;
}
