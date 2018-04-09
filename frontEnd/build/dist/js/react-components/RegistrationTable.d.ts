/// <reference types="react" />
import * as React from 'react';
import { IUserRegistration } from "../models/IUserRegistration";
export interface IRegistrationTableProps {
    registrations: IUserRegistration[];
}
export declare class RegistrationTable extends React.Component<IRegistrationTableProps, {}> {
    render(): JSX.Element;
    private readonly columns;
}
