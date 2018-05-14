import * as React from 'react';
import ReactTable from "react-table";
import {ICompetition} from "../../models/ICompetition";
import {CreateCompModal} from "./CreateCompModal";
import {INavigator} from "../../infrastructure/Navigator";
import {ICompetitionController} from "../../controllers/CompetitionController";


export interface ICompetitionListProps {
    navigator: INavigator;
    competitonController:ICompetitionController

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
    async componentDidMount() {
        await this.reloadTable();
    }

    render() {
        return <div style={{textAlign: "right"}}>
            <CreateCompModal reloadTable={() => this.reloadTable()}/>
            <ReactTable
                className="-highlight -striped"
                data={this.state.competitions}
                columns={this.columns}
                getTdProps={(state, rowInfo, column, instance) => {
                    return {
                        onClick: (e, handleOriginal) => {
                            this.props.navigator.navigateTo(`/#/competitions/${rowInfo.original.compId}`);
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

    private async reloadTable() {
        this.setState({competitions: await this.props.competitonController.getCompetitionList()});
    }
}