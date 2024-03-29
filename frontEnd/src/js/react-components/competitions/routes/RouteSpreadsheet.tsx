import * as React from "react";
import { Grid, Input, Select } from 'react-spreadsheet-grid'
import {IRoute} from "../../../models/IRoute";
import {MDButton} from "../../bootstrap/MDButton";
import {ICompetition} from "../../../models/ICompetition";
import {IRouteController} from "../../../controllers/RouteController";

export interface IRouteSpreadsheetProps {
    competition:ICompetition,
    compTableId: string
    routes:IRoute[],
    updateRoutes: (routes:IRoute[]) => void,
    reloadData:() => void
}

export interface IRouteSpreadsheetState {
    rows: IRoute[],
    blurCurrentFocus: boolean
}

export class RouteSpreadsheet extends React.Component<IRouteSpreadsheetProps, IRouteSpreadsheetState> {

    private maxSize = 50;

    constructor(props:IRouteSpreadsheetProps) {
        super(props);

        this.state = {
            rows: this.formatRows(props.routes ? props.routes : []),
            blurCurrentFocus: false,
        };
    }

    componentWillReceiveProps(props) {
        this.setState({rows: this.formatRows(props.routes)})
    }

    render() {
        return <div>
            <div style={{textAlign: 'right'}}>
                <MDButton
                    name={"Save"}
                    onClick={() => this.props.updateRoutes(this.state.rows)}
                />
                <MDButton
                    name={"Cancel"}
                    onClick={() => this.props.reloadData()}
                />
            </div>
            <Grid
                columns={this.columns()}
                rows={this.state.rows}
                getRowKey={row => row.routeId}
                blurCurrentFocus={this.state.blurCurrentFocus}
                disabledCellChecker={(row, columnId) => columnId === 'number'}
                isColumnsResizable
                columnWidthValues={{
                    number: 4
                }}
                isScrollable={false}
            />
        </div>
    }

    private onFieldChange(rowId, field, value) {
        const rows = this.state.rows;
        rows[rowId - 1][field] = value;

        this.setState({
            rows: rows,
            blurCurrentFocus: true
        });
    }

    private columns() {
        const colData = [
            {
                title: () => "Number",
                value: (row, { focus }) => <span className="text-center">{row.routeId}</span>,
                id: "number"
            },
            this.mapToInputColumn("Points", "points"),
        ];
        if (this.props.competition.showName) {
            colData.push(this.mapToInputColumn("Name", "name"))
        }
        if (this.props.competition.showSetter) {
            colData.push(this.mapToInputColumn("Setter", "setter"))
        }
        if (this.props.competition.showLocation) {
            colData.push(this.mapToInputColumn("Location", "location"))
        }
        return colData
    }

    private formatRows(initialData:IRoute[]):IRoute[] {
        const rows:IRoute[] = initialData;
        for (var i = rows.length + 1; i <= this.maxSize; i++) {
            rows.push({
                routeId: i
            });
        }
        return rows;
    }

    private mapToInputColumn(title: string, field:string) {
        return {
            title: () => title,
            value: (row, { focus }) =>
                <Input
                    value={row[field]}
                    focus={focus}
                    onChange={(value) => this.onFieldChange(row.routeId, field, value)}
                />,
            id: field
        }
    }
}