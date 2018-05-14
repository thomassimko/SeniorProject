import * as React from "react";
import { Grid, Input, Select } from 'react-spreadsheet-grid'
import {IRoute} from "../../../models/IRoute";
import {MDButton} from "../../bootstrap/MDButton";
import {ICompetition} from "../../../models/ICompetition";

export interface IRouteSpreadsheetProps {
    initialData: IRoute[],
    competiton:ICompetition
}

export interface IRouteSpreadsheetState {
    rows: IRoute[],
    columns: any[],
    blurCurrentFocus: boolean
}

export interface IRouteSpreadsheetProps {
    initialData: IRoute[],
}

export class RouteSpreadsheet extends React.Component<IRouteSpreadsheetProps, IRouteSpreadsheetState> {

    private maxSize = 50;

    constructor(props:IRouteSpreadsheetProps) {
        super(props);

        this.state = {
            rows: props.initialData ? props.initialData : this.initialRows,
            columns: this.columns,
            blurCurrentFocus: false,
        };
    }

    render() {
        return <div>
            <div style={{textAlign: 'right'}}>
                <MDButton
                    name={"Save"}
                    onClick={() => this.uploadData()}
                />
                <MDButton
                    name={"Cancel"}
                    onClick={() => this.loadData()}
                />
            </div>
            <Grid
                columns={this.state.columns}
                rows={this.state.rows}
                getRowKey={row => row.id}
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

    private get columns() {
        return [
            {
                title: () => "Number",
                value: (row, { focus }) => <span className="text-center">{row.id}</span>,
                id: "number"
            },
            this.mapToInputColumn("Points", "points"),
            this.props.competiton.showName ? this.mapToInputColumn("Name", "name") : null,
            this.props.competiton.showSetter ? this.mapToInputColumn("Setter", "setter") : null,
            this.props.competiton.showLocation ? this.mapToInputColumn("Location", "location") : null
        ]
    }

    private get initialRows():IRoute[] {
        const rows:IRoute[] = [];
        for (var i = 1; i <= this.maxSize; i++) {
            rows.push({
                id: i
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
                    onChange={(value) => this.onFieldChange(row.id, field, value)}
                />,
            id: field
        }
    }

    private uploadData() {

    }

    private loadData() {

    }
}