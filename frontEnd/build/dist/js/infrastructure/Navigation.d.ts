/// <reference types="react" />
import * as React from 'react';
import { ICognitoController } from '../models/CognitoController';
export interface INavigationProps {
    cognitoController: ICognitoController;
}
export declare class Navigation extends React.Component<INavigationProps, {}> {
    render(): JSX.Element;
    private getLoggedInMenu();
}
