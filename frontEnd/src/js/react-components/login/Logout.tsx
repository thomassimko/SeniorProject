import * as React from 'react';
import {Column} from "../bootstrap/Column";
import {INavigator} from "../../infrastructure/Navigator";
import {ICognitoController} from "../../models/CognitoController";


export interface ILogoutProps {
    navigator: INavigator,
    cognitoController:ICognitoController
}

export class Logout extends React.Component<ILogoutProps, {}> {

    componentWillMount() {
        if (this.props.cognitoController.isLoggedIn())
            this.props.cognitoController.attemptLogOut();
    }
    render() {
        this.props.navigator.navigateTo('/#/login');
        return <div style={{paddingTop: '75px'}}>
            <Column md={4} mdOffset={4}>
            </Column>
        </div>
    }

}