/// <reference types="react" />
import * as React from 'react';
import { INavigator } from "../../infrastructure/Navigator";
import { ICognitoController } from '../../models/CognitoController';
export interface INewPasswordProps {
    navigator: INavigator;
    cognitoController: ICognitoController;
    username: string;
    company: string;
    location: string;
    email: string;
}
export interface INewPasswordState {
    tempPassword: string;
    newPassword: string;
    showInvalidPassword: boolean;
    showModal: boolean;
}
export declare class NewPassword extends React.Component<INewPasswordProps, INewPasswordState> {
    constructor(props: INewPasswordProps);
    render(): JSX.Element;
    private passwordsMatch();
    private ifPasswordValid();
    private handleTempPasswordChange(event);
    private handleNewPasswordChange(event);
    private onResetPassword();
    private infoModal();
}
