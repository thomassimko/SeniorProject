import * as React from "react";
import {CompetitionList} from "./CompetitionList";
import {SecureRoute} from "../general/SecureRoute";
import {INavigator} from "../../infrastructure/Navigator";
import {ICognitoController} from "../../models/CognitoController";


export class CompetitionRouter {

    private navigator:INavigator;
    private cognitoController:ICognitoController;
    private isAuthed: boolean;

    constructor(navigator:INavigator, loginController:ICognitoController, isAuthed: () => boolean) {
        this.navigator = navigator;
        this.cognitoController = loginController;
        this.isAuthed = isAuthed();
    }

    get competitions() {
        return <CompetitionList navigator={this.navigator}/>
    }

    get routes() {
        return [
            <SecureRoute key="competitions" isAuthed={this.isAuthed} path="/competitions" component={() => this.competitions}/>,
        ];
    }
}