import * as React from 'react';
import {Route, HashRouter} from "react-router-dom";
import {App} from "../react-components/App";
import {Navigation} from "./Navigation";
import {NotFound} from "../react-components/NotFound";
import {Switch} from "react-router";
import {INavigator} from "./Navigator";
import {SecureRoute} from "../react-components/general/SecureRoute";
import {ICognitoController, CognitoController} from "../controllers/CognitoController";
import {LoginRouter} from "../react-components/login/LoginRouter";
import { Auth } from "aws-amplify";
import {CompetitionRouter} from "../react-components/competitions/CompetitionRouter";
import {FooterPage} from "../react-components/Footer";

export interface IAppRouter {
    navigator: INavigator,
}

export interface  IAppState {
    isAuthed: boolean,
    isAuthenticating: boolean
}

export class AppRouter extends React.Component<IAppRouter, IAppState> {

    constructor(props) {
        super(props);
        this.state = {
            isAuthed: false,
            isAuthenticating: true
        };
    }

    async componentDidMount() {
        try {
            if (await Auth.currentSession()) {
                this.login();
            }
        }
        catch(e) {
            if (e !== 'No current user') {
                alert(e);
            }
        }

        this.setState({ isAuthenticating: false });
    }

    get app() {
        return <App/>
    }

    get cognitoController():ICognitoController {
        return new CognitoController(
            () => this.login(),
            () => this.logout(),
            () => this.isLoggedIn()
        );
    }

    get loginRouter() {
        return new LoginRouter(this.props.navigator, this.cognitoController);
    }

    get competitionRouter() {
        return new CompetitionRouter(this.props.navigator, this.cognitoController, () => this.isLoggedIn());
    }

    routes() {
        return [
            ...this.loginRouter.routes,
            ...this.competitionRouter.routes,
            <SecureRoute key="app" isAuthed={this.state.isAuthed} exact path='/' component={() => this.app}/>
        ];
    }

    render() {
        return !this.state.isAuthenticating && <div>
            <Navigation cognitoController={this.cognitoController}/>
            <div style={{padding: '10px', paddingTop: '75px'}}>
                <HashRouter>
                    <Switch>
                        {this.routes()}
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </HashRouter>
            </div>
        </div>;
    }

    login() {
        console.log('logging in');
        this.setState({isAuthed : true});
    }
    logout() {
        console.log('logging out');
        this.setState({isAuthed : false});
    }
    isLoggedIn():boolean {
        return this.state.isAuthed;
    }
}