/// <reference types="react" />
import * as React from 'react';
import { INavigator } from "./Navigator";
import { ICognitoController } from "../models/CognitoController";
import { LoginRouter } from "../react-components/login/LoginRouter";
export interface IAppRouter {
    navigator: INavigator;
}
export interface IAppState {
    isAuthed: boolean;
    isAuthenticating: boolean;
}
export declare class AppRouter extends React.Component<IAppRouter, IAppState> {
    constructor();
    componentDidMount(): Promise<void>;
    readonly app: JSX.Element;
    readonly cognitoController: ICognitoController;
    readonly loginRouter: LoginRouter;
    routes(): JSX.Element[];
    render(): false | JSX.Element;
    login(): void;
    logout(): void;
    isLoggedIn(): boolean;
}
