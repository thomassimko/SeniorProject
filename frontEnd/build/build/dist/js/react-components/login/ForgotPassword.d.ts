/// <reference types="react" />
import * as React from 'react';
import { INavigator } from "../../infrastructure/Navigator";
export interface IForgotPasswordProps {
    desiredEndpoint?: string;
    navigator: INavigator;
}
export interface IForgotPasswordState {
    username: string;
    showModal: boolean;
}
export declare class ForgotPassword extends React.Component<IForgotPasswordProps, IForgotPasswordState> {
    constructor(props: IForgotPasswordProps);
    render(): JSX.Element;
    private handleUsernameChange(event);
    private onResetPassword();
    private infoModal();
}
