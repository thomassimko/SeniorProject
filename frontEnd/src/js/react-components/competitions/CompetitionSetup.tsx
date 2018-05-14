import * as React from 'react';
import {FormGroup, Checkbox} from "react-bootstrap";
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import {Column} from "../bootstrap/Column";
import {Row} from "../bootstrap/Row";
import {ICompetition} from "../../models/ICompetition";
import {ICompetitionController} from "../../controllers/CompetitionController";


export interface ICompetitionSetupProps {
    compId:string,
    competition:ICompetition,
    competitionController:ICompetitionController
    onUpdateComp: (competition:ICompetition) => void
}

export interface ICompetitionSetupState {
    competition:ICompetition
}


export class CompetitionSetup extends React.Component<ICompetitionSetupProps, ICompetitionSetupState> {

    constructor(props:ICompetitionSetupProps) {
        super(props);
        this.state = {
            competition: props.competition
        }
    }

    render() {
        return <div>
            <Row>
                <Column md={6}>
                    {this.routeSettings}
                </Column>
            </Row>
        </div>
    }

    get routeSettings() {
        return <Card>
            <CardBody style={{padding: '15px'}}>
                <CardTitle>Route Settings</CardTitle>
                <form>
                    <FormGroup>
                        <Checkbox defaultChecked={this.state.competition.showSetter} onClick={() => this.toggleCheck('showSetter')}>Show Route Setter</Checkbox>
                        <Checkbox defaultChecked={this.state.competition.showName} onClick={() => this.toggleCheck('showName')}>Show Route Name</Checkbox>
                        <Checkbox defaultChecked={this.state.competition.showLocation} onClick={() => this.toggleCheck('showLocation')}>Show Route Location</Checkbox>
                    </FormGroup>
                </form>
            </CardBody>
        </Card>
    }

    private toggleCheck(accessor) {
        const newComp = {
            ...this.state.competition,
            [accessor]:!this.state.competition[accessor]
        };
        this.setState({
            competition: newComp
        });
        this.props.competitionController.updateCompetition(this.props.compId, newComp);
        this.props.onUpdateComp(newComp);
    }
}