import * as React from 'react';
import {Column} from "../bootstrap/Column";
import {INavigator} from "../../infrastructure/Navigator";
import {Modal} from 'react-bootstrap';
import {ICognitoController} from '../../models/CognitoController';
import {FormInput} from "../bootstrap/FormInput";


export interface INewPasswordProps {
    navigator: INavigator,
    cognitoController: ICognitoController,
    company: string,
    location: string,
    email:string
}

export interface INewPasswordState {
    tempPassword: string,
    newPassword: string,
    showInvalidPassword: boolean,
    showModal: boolean
}

export class NewPassword extends React.Component<INewPasswordProps, INewPasswordState> {

    constructor(props:INewPasswordProps) {
        super(props);
        this.state = {tempPassword: "", newPassword: "", showInvalidPassword: false, showModal: false}
    }


    render() {
        return <div style={{paddingTop: '75px'}} onKeyPress={(e) => e.key === 'Enter' ? this.onResetPassword() : null}>>
            <Column md={4} mdOffset={4}>
                {this.infoModal()}
                <div className='login-form'>
                    <div className="title">Onsight</div>
                    <div style={{color: this.state.showInvalidPassword ? '#f00' : '#eee', fontSize: '12px', float: 'left', marginBottom: '10px'}}>
                        Passwords must have at least one of the following: uppercase, lowercase, and number.
                    </div>
                    <FormInput label={"Password"} type={"password"} onChange={(e) => this.handleNewPasswordChange(e)}/>
                    <FormInput label={"Confirm Password"} type={"password"} onChange={(e) => this.handleTempPasswordChange(e)}/>

                    <button type="button" className="log-btn" disabled={!this.passwordsMatch() || this.state.newPassword == ''} onClick={() => this.onResetPassword()}>Submit</button>
                </div>
            </Column>
        </div>
    }

    private passwordsMatch() {
        return this.state.tempPassword == this.state.newPassword;
    }

    private ifPasswordValid() {
        const hasCorrectLength = this.state.newPassword.length > 7 && this.state.newPassword.length < 99;
        const hasNumber = this.state.newPassword.match(/\d+/g) != null;
        const hasUpperCase = /[A-Z]/.test(this.state.newPassword);
        const hasLowerCase = /[a-z]/.test(this.state.newPassword);
        return this.passwordsMatch() && hasCorrectLength && hasNumber && hasUpperCase && hasLowerCase;
    }

    private handleTempPasswordChange(event) {
        this.setState({tempPassword: event.target.value});
    }
    private handleNewPasswordChange(event) {
        this.setState({newPassword: event.target.value});
    }


    private async onResetPassword() {
        if (this.ifPasswordValid()) {
            await this.props.cognitoController.register(
                this.props.company,
                this.props.location,
                this.props.email,
                this.state.newPassword
            );
            this.setState({showModal: true});
        }
        else {
            this.setState({showInvalidPassword: true});
        }
    }

    private infoModal() {
        return <Modal onHide={() => this.props.navigator.navigateTo('/#/')} show={this.state.showModal}>
            <Modal.Header>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Your account has been created.  A confirmation link has been sent to your email.
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-primary' onClick={() => this.props.navigator.navigateTo('/#/')}>Close</button>
            </Modal.Footer>
        </Modal>
    }

}