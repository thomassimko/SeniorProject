/// <reference types="react" />
import * as React from 'react';
import { IUserRegistration } from "../models/IUserRegistration";
export interface IAppProps {
}
export interface IAppState {
    registrations: IUserRegistration[];
}
export declare class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps);
    render(): JSX.Element;
    private handleFileUpload(event);
}
