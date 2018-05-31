import * as React from 'react';
import {CompetitionRegistration} from "./registrations/CompetitionRegistration";
import {RouteSpreadsheet} from "./routes/RouteSpreadsheet";
import {Tabs, Tab} from "react-bootstrap";
import {CompetitionSetup} from "./CompetitionSetup";
import {ICompetitionController} from "../../controllers/CompetitionController";
import {ICompetition} from "../../models/ICompetition";
import {isNullOrUndefined} from "util";
import {ICompetitorController} from "../../controllers/CompetitorController";
import {IRouteController} from "../../controllers/RouteController";
import {Scorecard} from "./Scorecard";
import {IRoute} from "../../models/IRoute";



export interface ICompetitionDetailProps {
    compTableId: string;
    competitionController:ICompetitionController;
    competitorController:ICompetitorController;
    routeController:IRouteController;
}
export interface ICompetitionDetailState {
    selectedTab: number,
    competition?: ICompetition,
}


export class CompetitionDetail extends React.Component<ICompetitionDetailProps, ICompetitionDetailState> {

    private tabStyle = {
        margin:'15px'
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 1
        }
    }

    async componentDidMount() {
        console.log(this.props.compTableId);
        const comp = await this.props.competitionController.getCompetition(this.props.compTableId);
        console.log(comp);
        this.setState({competition: comp})
    }

    render() {
        return <div>
            {isNullOrUndefined(this.state.competition)
                ? <div>Loading...</div>
                : <Tabs
                    activeKey={this.state.selectedTab}
                    onSelect={(e) => this.handleTabChange(e)}
                    id="controlled-tab-example"
                >
                    <Tab eventKey={1} title="Overview" style={this.tabStyle}>
                        Overview
                    </Tab>
                    <Tab eventKey={2} title="Setup" style={this.tabStyle}>
                        <CompetitionSetup
                            compId={this.props.compTableId}
                            competition={this.state.competition}
                            competitionController={this.props.competitionController}
                            onUpdateComp={(comp) => this.onUpdateComp(comp)}
                        />
                    </Tab>
                    <Tab eventKey={3} title="Routes" style={this.tabStyle}>
                        <RouteSpreadsheet
                            competition={this.state.competition}
                            compTableId={this.props.compTableId}
                            initialData={[]}
                            routeController={this.props.routeController}
                        />
                    </Tab>
                    <Tab eventKey={4} title="Registration" style={this.tabStyle}>
                        <CompetitionRegistration
                            compTableId={this.props.compTableId}
                            competitorController={this.props.competitorController}
                        />
                    </Tab>
                    <Tab eventKey={5} title="Scorecard" style={this.tabStyle}>
                        <Scorecard
                            competition={this.state.competition}
                            compTableId={this.props.compTableId}
                            routeController={this.props.routeController}
                        />
                    </Tab>
                </Tabs>
            }
        </div>
    }

    private handleTabChange(e) {
        this.setState({selectedTab: e});
    }

    private onUpdateComp(competition:ICompetition) {
        this.setState({competition:competition});
    }
}