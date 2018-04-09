/// <reference types="react" />
import * as React from 'react';
export interface IColumnProps {
    md?: number;
    lg?: number;
    sm?: number;
    mdOffset?: number;
    lgOffset?: number;
    smOffset?: number;
}
export declare class Column extends React.Component<IColumnProps, {}> {
    render(): JSX.Element;
    private convertPropsSizeToClassName();
    readonly mdSettings: string;
    readonly smSettings: string;
    readonly lgSettings: string;
}
