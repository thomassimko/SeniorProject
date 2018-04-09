export interface ICognitoController {
    attemptLogIn(username: string, password: string): any;
    attemptLogOut(): any;
    isLoggedIn(): boolean;
    register(username: any, company: any, location: any, email: any, password: any): void;
    authUser(): any;
    userExists(username: string): any;
}
export declare class CognitoController implements ICognitoController {
    private login;
    private logout;
    private isAuthed;
    constructor(login: () => void, logout: () => void, isLoggedIn: () => boolean);
    attemptLogIn(username: string, password: string): Promise<{}>;
    attemptLogOut(): void;
    isLoggedIn(): boolean;
    userExists(username: string): void;
    register(username: any, company: any, location: any, email: any, password: any): Promise<void>;
    private readonly userPool;
    authUser(): Promise<boolean>;
    private getUserToken(currentUser);
    private getCurrentUser();
    private signOutUser();
}
