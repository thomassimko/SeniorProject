import * as React from 'react';
import {Route} from "react-router-dom";
import {Login} from "./Login";
import {ForgotPassword} from "./ForgotPassword";
import {INavigator} from "../../infrastructure/Navigator";
import {ICognitoController} from "../../models/CognitoController";
import {Register} from "./Register";
import {Logout} from "./Logout";


export class LoginRouter {

    private navigator:INavigator;
    private cognitoController:ICognitoController;

    constructor(navigator:INavigator, loginController:ICognitoController) {
        this.navigator = navigator;
        this.cognitoController = loginController;
    }

    login(props) {
        const desiredEndpoint = props.match.params.desiredEndpoint;
        return <Login
            navigator={this.navigator}
            desiredEndpoint={desiredEndpoint}
            cognitoController={this.cognitoController}
        />
    }

    get forgotPassword() {
        return <ForgotPassword
            navigator={this.navigator}
        />
    }

    get register() {
        return <Register
            navigator={this.navigator}
            cognitoController={this.cognitoController}
        />
    }

    get logout() {
        return <Logout
            navigator={this.navigator}
            cognitoController={this.cognitoController}
        />
    }

    get routes() {
        return [
            <Route key="login" path="/login/:desiredEndpoint?" component={(props) => this.login(props)}/>,
            <Route key="forgotPassword" path="/forgot-password" component={() => this.forgotPassword}/>,
            <Route key="logout" path="/logout" component={() => this.logout}/>,
            <Route key="register" path="/register" component={() => this.register}/>
        ];
    }
}