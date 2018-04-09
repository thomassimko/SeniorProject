/// <reference types="react" />
import * as React from 'react';
export interface IScrollLinkProps {
    to: string;
    linkName?: string;
}
export declare class ScrollLink extends React.Component<IScrollLinkProps, {}> {
    render(): JSX.Element;
}
