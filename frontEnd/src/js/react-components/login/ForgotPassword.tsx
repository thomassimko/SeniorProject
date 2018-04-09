import * as React from 'react';
import {Column} from "../bootstrap/Column";
import {INavigator} from "../../infrastructure/Navigator";
import {Modal} from 'react-bootstrap';


export interface IForgotPasswordProps {
    desiredEndpoint?: string,
    navigator: INavigator,
}

export interface IForgotPasswordState {
    username: string,
    showModal: boolean
}

export class ForgotPassword extends React.Component<IForgotPasswordProps, IForgotPasswordState> {

    constructor(props:IForgotPasswordProps) {
        super(props);
        this.state = {username: "", showModal: false}
    }


    render() {
        return <div style={{paddingTop: '75px'}}>
            {this.infoModal()}
            <Column md={4} mdOffset={4}>
                <div className='login-form'>
                    <div className='title'>QuickPick</div>
                    <div style={{textAlign: 'center', marginBottom: '10px', color: '#ccc'}}>Forgot Password</div>
                    <div className="form-group ">
                        <input type="text" className="form-control" placeholder="Username" onChange={(e) => this.handleUsernameChange(e)}/>
                    </div>
                    <button type="button" className="log-btn" disabled={this.state.username == ''} onClick={() => this.onResetPassword()}>Submit</button>
                </div>
            </Column>
        </div>
    }

    private handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }


    private onResetPassword() {
        this.setState({showModal: true});
        //TODO change password
    }

    private infoModal() {
        return <Modal onHide={() => this.props.navigator.navigateTo('/#/login')} show={this.state.showModal}>
            <Modal.Header>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    A confirmation has been sent to your email.
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-primary' onClick={() => this.props.navigator.navigateTo('/#/login')}>Close</button>
            </Modal.Footer>
        </Modal>
    }
}