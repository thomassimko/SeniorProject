import * as React from 'react';
import ReactTable from "react-table";
import {isNullOrUndefined} from "util";
import {IRouteController} from "../../controllers/RouteController";
import {IRoute} from "../../models/IRoute";
import {ICompetition} from "../../models/ICompetition";
import {MDButton} from "../bootstrap/MDButton";
import {generateScorecard} from "../../models/ScorecardGenerator";
import {Column} from "../bootstrap/Column";
import {Row} from "../bootstrap/Row";


export interface IScorecardProps {
    competition:ICompetition,
    routes:IRoute[]
}


export class Scorecard extends React.Component<IScorecardProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <MDButton name="Download Scorecard" onClick={() => generateScorecard(this.props.routes, this.props.competition)}/>
            <hr/>
            <div id="divToPrint">
                <Row>
                    <Column md={8}>
                        <h3>{this.props.competition.compName}</h3>
                        <h5>Name:____________________________</h5>
                        <h5>Category (circle one):      Beginner(V0-V2)         Intermediate(V3-V5)        Advanced(V6+)        CCS</h5>
                        <h5>CCS Number:__________________________</h5>
                    </Column>
                    <Column md={4}>
                        <img src="../../../images/FinalScoreArea.png" width={200}/>
                    </Column>
                </Row>
                <ReactTable
                    data={this.props.routes}
                    columns={this.columns()}
                    noDataText="There are no saved routes. To add routes, please go to the Routes tab."
                    pageSize={this.props.routes.length}
                    showPaginationTop={false}
                    showPaginationBottom={false}
                    style={{textAlign: "center"}}
                />
            </div>
        </div>
    }

    private columns() {
        const colData = [{
            Header: 'Number',
            accessor: 'routeId',
            width: 100
        }, {
            Header: 'Points',
            accessor: 'points'
        }];
        if (this.props.competition.showName) {
            colData.push({
                Header: 'Name',
                accessor: 'name'
            })
        }
        if (this.props.competition.showSetter) {
            colData.push({
                Header: 'Setter',
                accessor: 'setter'
            })
        }
        if (this.props.competition.showLocation) {
            colData.push({
                Header: 'Location',
                accessor: 'location'
            })
        }
        colData.push({
            Header: 'Attempts',
            accessor: "attempts"
        });
        colData.push({
            Header: 'Witness 1',
            accessor: "witness1"
        });
        colData.push({
            Header: 'Witness 2',
            accessor: "witness2"
        });

        return colData;

    }

}