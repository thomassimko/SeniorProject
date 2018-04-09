/// <reference types="react" />
import { INavigator } from "../../infrastructure/Navigator";
import { ICognitoController } from "../../models/CognitoController";
export declare class LoginRouter {
    private navigator;
    private cognitoController;
    constructor(navigator: INavigator, loginController: ICognitoController);
    login(props: any): JSX.Element;
    readonly forgotPassword: JSX.Element;
    readonly register: JSX.Element;
    readonly logout: JSX.Element;
    readonly routes: JSX.Element[];
}
