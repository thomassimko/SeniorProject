import { Auth } from "aws-amplify";

export interface ICognitoController {
    attemptLogIn(username:string, password:string);
    attemptLogOut();
    isLoggedIn():boolean;
    register(company, location, email, password);
    confirmRegistration(email:string, password: string, confirmationCode: string):Promise<boolean>;
    resendConfirmation(email:string);
}

export class CognitoController implements ICognitoController {

    private login: () => void;
    private logout: () => void;
    private isAuthed: () => boolean;


    constructor(login: () => void, logout: () => void, isLoggedIn: () => boolean) {
        this.isAuthed = isLoggedIn;
        this.login = login;
        this.logout = logout;
    }

    async attemptLogIn(username:string, password:string) {
        try {
            await Auth.signIn(username, password);
            this.login();
        } catch (e) {
            return e;
        }
    }

    async attemptLogOut() {
        await Auth.signOut();
        this.logout();
    }

    isLoggedIn():boolean {
        return this.isAuthed();
    }

    async register(company, location, email, password) {
        try {
            await Auth.signUp({
                username: email,
                password: password,
                company: company,
                location: location
            });
        } catch (e) {
            console.error(e);
        }
    }

    async confirmRegistration(email:string, password: string, confirmationCode: string):Promise<boolean> {
        try {
            await Auth.confirmSignUp(email, confirmationCode);
            await Auth.signIn(email, password);
            this.login();
            return true;
        } catch (e) {
            return false;
        }
    }

    async resendConfirmation(email:string) {
        await Auth.resendSignUp(email);
    }


}