/// <reference types="react" />
import * as React from 'react';
import { TSXMarkup } from '../../infrastructure/TSXMarkup';
export interface IModalProps {
    onHide?: () => void;
    title?: string;
    body: TSXMarkup;
    footer: TSXMarkup;
    show: boolean;
}
export declare class CustomModal extends React.Component<IModalProps, {}> {
    render(): JSX.Element;
}
