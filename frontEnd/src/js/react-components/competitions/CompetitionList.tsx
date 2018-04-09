import * as React from 'react';
import ReactTable from "react-table";
import {ICompetition} from "./ICompetition";
import {CreateCompModal} from "./CreateCompModal";
import {INavigator} from "../../infrastructure/Navigator";


export interface ICompetitionListProps {
    navigator: INavigator;

}
export interface ICompetitionListState {
    competitions: ICompetition[]
}


export class CompetitionList extends React.Component<ICompetitionListProps, ICompetitionListState> {

    constructor(props) {
        super(props);
        this.state = {
            competitions: []
        }
    }

    render() {
        return <div style={{textAlign: "right"}}>
            <CreateCompModal/>
            <ReactTable
                className="-highlight -striped"
                data={this.state.competitions}
                columns={this.columns}
                getTdProps={(state, rowInfo, column, instance) => {
                    return {
                        onClick: (e, handleOriginal) => {
                            console.log(rowInfo)
                        },
                        style: {cursor: 'pointer'}
                    }
                }}
                noDataText="There are no competitions for this user in the system."
                filterable={true}
                defaultPageSize={10}
            />
        </div>
    }

    private get columns() {
        return [{
            Header: 'Name',
            accessor: 'compName',
        }, {
            Header: 'Creation Date',
            accessor: 'createdAt'
        }, {
            Header: 'Comp Date',
            accessor: 'compDate'
        }]
    }
}