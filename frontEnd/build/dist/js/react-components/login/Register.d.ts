/// <reference types="react" />
import * as React from 'react';
import { INavigator } from "../../infrastructure/Navigator";
import { ICognitoController } from "../../models/CognitoController";
export interface IRegisterProps {
    navigator: INavigator;
    cognitoController: ICognitoController;
}
export interface IRegisterState {
    username: string;
    company: string;
    location: string;
    email: string;
    validInput: boolean;
    validEmail: boolean;
    showPasswordScreen: boolean;
}
export declare class Register extends React.Component<IRegisterProps, IRegisterState> {
    constructor(props: IRegisterProps);
    render(): JSX.Element;
    register(): JSX.Element;
    private handleUsernameChange(event);
    private handleEmailChange(event);
    private handleCompanyChange(event);
    private handleLocationChange(event);
    private updateFieldsFilled();
    private checkEmailValid();
    private onSubmit();
}
