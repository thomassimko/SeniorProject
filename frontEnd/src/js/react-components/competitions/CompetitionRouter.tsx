import * as React from "react";
import {CompetitionList} from "./CompetitionList";
import {SecureRoute} from "../general/SecureRoute";
import {INavigator} from "../../infrastructure/Navigator";
import {ICognitoController} from "../../controllers/CognitoController";
import {CompetitionDetail} from "./CompetitionDetail";
import {CompetitionController} from "../../controllers/CompetitionController";
import {CompetitorController} from "../../controllers/CompetitorController";
import {RouteController} from "../../controllers/RouteController";


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
        return <CompetitionList
            navigator={this.navigator}
            competitonController={this.competitionController}
        />
    }

    private competitionDetail(props) {
        const table = props.match.params.table;
        return <CompetitionDetail
            compTableId={table}
            competitionController={this.competitionController}
            competitorController={this.competitorController}
            routeController={this.routeController}
        />
    }

    get competitionController() {
        return new CompetitionController();
    }

    get competitorController() {
        return new CompetitorController();
    }

    get routeController() {
        return new RouteController();
    }

    get routes() {
        return [
            <SecureRoute exact key="competitions" isAuthed={this.isAuthed} path="/competitions" component={() => this.competitions}/>,
            <SecureRoute key="competitionReg" isAuthed={this.isAuthed} path="/competitions/:table" component={(props) => this.competitionDetail(props)}/>,
        ];
    }
}