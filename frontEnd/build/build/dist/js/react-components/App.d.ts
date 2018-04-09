/// <reference types="react" />
import * as React from 'react';
export interface IAppProps {
}
export interface IAppState {
    file?: File;
}
export declare class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps);
    render(): JSX.Element;
    private handleFileUpload(event);
}
