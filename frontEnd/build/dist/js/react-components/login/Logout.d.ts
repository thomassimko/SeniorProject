/// <reference types="react" />
import * as React from 'react';
import { INavigator } from "../../infrastructure/Navigator";
import { ICognitoController } from "../../models/CognitoController";
export interface ILogoutProps {
    navigator: INavigator;
    cognitoController: ICognitoController;
}
export declare class Logout extends React.Component<ILogoutProps, {}> {
    componentWillMount(): void;
    render(): JSX.Element;
}
