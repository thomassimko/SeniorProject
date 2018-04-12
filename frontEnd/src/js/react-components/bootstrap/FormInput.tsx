import * as React from 'react';
import {Input} from "mdbreact"


export interface IFormInputProps{
    label: string,
    type: "email" | "text" | "password",
    onChange: (e) => void,
    className?: string,
    icon?: string,
    defaultValue?: string
}

export class FormInput extends React.Component<IFormInputProps, {}> {

    render() {
        return <Input
            className={this.props.className}
            label={this.props.label}
            type={this.props.type}
            onChange={(event) => this.props.onChange(event)}
            icon={this.props.icon}
            group
            defaultValue={this.props.defaultValue}
        />
    }
}