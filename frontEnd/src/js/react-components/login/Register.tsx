import * as React from 'react';
import {Column} from "../bootstrap/Column";
import {INavigator} from "../../infrastructure/Navigator";
import {ICognitoController} from "../../models/CognitoController";
import {NewPassword} from "./NewPassword";
import {FormInput} from "../bootstrap/FormInput";



export interface IRegisterProps {
    navigator: INavigator,
    cognitoController: ICognitoController
}

export interface IRegisterState {
    company: string,
    location: string,
    email:string,
    validEmail: boolean,
    showPasswordScreen: boolean
}

export class Register extends React.Component<IRegisterProps, IRegisterState> {

    constructor(props:IRegisterProps) {
        super(props);
        this.state = {
            email: "",
            company: "",
            location: "",
            validEmail: true,
            showPasswordScreen: false,
        }
    }

    render() {
        return this.state.showPasswordScreen
            ? <NewPassword
                navigator={this.props.navigator}
                cognitoController={this.props.cognitoController}
                email={this.state.email}
                company={this.state.company}
                location={this.state.location}
            />
            : this.register();
    }

    register() {
        return <div style={{paddingTop: '75px'}}>
            <Column md={4} mdOffset={4}>
                <div className='login-form'>
                    <div className="title">Onsight</div>
                    {this.mapFieldToFormInput}
                    <button type="button" className="log-btn" disabled={!this.checkFieldsFilled()} onClick={() => this.onSubmit()}>Submit</button>
                </div>
            </Column>
        </div>
    }

    private checkFieldsFilled():boolean {
        const allFieldsFilledStatus = this.state.company != '' && this.state.location != '' && this.state.email != '';
        return allFieldsFilledStatus && this.checkEmailValid();
    }

    private checkEmailValid():boolean {
        const emailValidationRegex = /\S+@\S+\.\S+/;
        return emailValidationRegex.test(this.state.email);
    }

    private async onSubmit() {
        this.setState({showPasswordScreen: true});
    }

    private get mapFieldToFormInput() {
        return <form>
            {["Email", "Company", "Location"].map((value:string) =>
                <FormInput
                    key={value}
                    label={value}
                    type={value == "Email" ? "email" : "text"}
                    onChange={(e) => this.handleFieldChange(value.toLowerCase(), e.target.value)}
                />
            )}
        </form>
    }

    private handleFieldChange(target, value) {
        this.setState({
            [target]: value
        });
    }
}