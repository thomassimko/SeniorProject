/// <reference types="react" />
import * as React from 'react';
import { IUserRegistration } from "../models/IUserRegistration";
export interface IClimberRegistrationProps {
    onAddNewClimber: (climber: IUserRegistration) => void;
}
export interface IClimberRegistrationState extends IUserRegistration {
    showNewClimberModal: boolean;
}
export declare class ClimberRegistration extends React.Component<IClimberRegistrationProps, IClimberRegistrationState> {
    constructor(props: any);
    render(): JSX.Element;
    private addNewClimber();
    private readonly registerForm;
    private handleChange(accessor, e);
    private getFormField(field);
    private readonly fields;
}
