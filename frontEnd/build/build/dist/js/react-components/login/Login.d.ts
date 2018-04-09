/// <reference types="react" />
import * as React from 'react';
import { INavigator } from "../../infrastructure/Navigator";
import { ICognitoController } from "../../models/CognitoController";
export interface ILoginProps {
    desiredEndpoint?: string;
    navigator: INavigator;
    cognitoController: ICognitoController;
}
export interface ILoginState {
    username: string;
    password: string;
    showError: boolean;
    isLoading: boolean;
}
export declare class Login extends React.Component<ILoginProps, ILoginState> {
    constructor(props: ILoginProps);
    render(): JSX.Element;
    private handleUsernameChange(event);
    private handlePasswordChange(event);
    private onAttemptLogin();
}
