import * as React from 'react';
import {Column} from "../bootstrap/Column";
import {INavigator} from "../../infrastructure/Navigator";
import {ICognitoController} from "../../controllers/CognitoController";
import {isNullOrUndefined} from 'util';
import {FormInput} from "../bootstrap/FormInput";


export interface ILoginProps {
    desiredEndpoint?: string,
    navigator: INavigator,
    cognitoController:ICognitoController
}

export interface ILoginState {
    username: string,
    password: string,
    showError: boolean,
    isLoading:boolean,
    confirmCode:string,
    showConfirm:boolean,
    confirmError: boolean
}

export class Login extends React.Component<ILoginProps, ILoginState> {

    constructor(props:ILoginProps) {
        super(props);
        this.state = {
            username: "",
            password: "",
            showError: false,
            isLoading: false,
            showConfirm: false,
            confirmCode: "",
            confirmError: false
        }
    }


    render() {
        return <div style={{paddingTop: '75px'}}>
            <Column md={4} mdOffset={4}>
                <div className='login-form'>
                    <div className="login-title">Onsight</div>
                    {this.state.showConfirm ? this.confirmationForm : this.loginForm}
                </div>
            </Column>
        </div>
    }

    private handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    private handlePasswordChange(event) {
        this.setState({password: event.target.value, showError: false});
    }

    private async onAttemptLogin() {
        this.setState({isLoading: true});
        const loggedIn = await this.props.cognitoController.attemptLogIn(this.state.username, this.state.password);
        if(isNullOrUndefined(loggedIn)) {
            this.redirectUser();
        }
        else {
            if(loggedIn.code == "UserNotConfirmedException") {
                this.setState({showConfirm: true, isLoading: false})
            }
            else {
                console.error(loggedIn);
                this.setState({showError: true, isLoading: false});
            }
        }
    }

    private get confirmationForm() {
        return <div>
            <FormInput
                label={"Confirmation Code"}
                type={"text"}
                onChange={(e) => this.setState({confirmCode: e.target.value})}
            />
            {this.state.confirmError ? <span style={{color: '#f00', fontSize: '12px', float: 'left'}}>Invalid Confirmation Code</span> : null}
            <a className="link" onClick={() => this.props.cognitoController.resendConfirmation(this.state.username)}>Resend Confirmation</a>
            <button type="button" className="log-btn" onClick={() => this.confirmUser()}>
                {this.state.isLoading
                    ? <span><i className="fa fa-refresh fa-spin"/>&nbsp;Confirming...</span>
                    : 'Confirm'
                }
            </button>
        </div>
    }

    private get loginForm() {
        return <div onKeyPress={(e) => e.key === 'Enter' ? this.onAttemptLogin() : null}>
            <form>
                <FormInput label="Type your email" icon="envelope" type="email" onChange={(e) => this.handleUsernameChange(e)}/>
                <FormInput label="Type your password" icon="lock" type="password" onChange={(e) => this.handlePasswordChange(e)}/>
            </form>
            {this.state.showError ? <span style={{color: '#f00', fontSize: '12px', float: 'left'}}>Invalid Credentials</span> : null}
            <a className="link" href="/#/forgot-password">Lost your password?</a>
            <button type="button" className="log-btn" onClick={() => this.onAttemptLogin()}>
                {this.state.isLoading
                    ? <span><i className="fa fa-refresh fa-spin"/>&nbsp;Logging in...</span>
                    : 'Log in'
                }
            </button>
        </div>
    }

    private async confirmUser() {
        this.setState({isLoading: true});
        const confirmed = await this.props.cognitoController.confirmRegistration(this.state.username, this.state.password, this.state.confirmCode);
        if (confirmed) {
            this.redirectUser();
        }
        this.setState({
            confirmError: !confirmed,
            isLoading: false
        });

    }

    private redirectUser() {
        if (this.props.desiredEndpoint) {
            this.props.navigator.navigateTo(decodeURI(this.props.desiredEndpoint));
        }
        this.props.navigator.navigateTo('/#/');
    }

}