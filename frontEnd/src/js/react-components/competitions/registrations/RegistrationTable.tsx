import * as React from 'react';
import {IUserRegistration} from "../../../models/IUserRegistration";
import ReactTable from "react-table";
import {RegistrationModal} from "./RegistrationModal";
import {isNullOrUndefined} from "util";
var cleaner = require('deep-cleaner');
import { API } from "aws-amplify";


export interface IRegistrationTableProps {
    registrations: IUserRegistration[],
    onUpdate: (data:IUserRegistration) => void,
    compTableId: string
}

export interface IRegistrationTableState {
    showModal: boolean,
    selectedClimber?: IUserRegistration
}


export class RegistrationTable extends React.Component<IRegistrationTableProps, IRegistrationTableState> {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    render() {
        return <div style={{textAlign: "right"}}>
            <ReactTable
                className="-highlight -striped"
                data={this.props.registrations}
                columns={this.columns}
                getTdProps={(state, rowInfo, column, instance) => {
                    return {
                        onClick: (e, handleOriginal) => {
                            console.log(rowInfo)
                            if (!isNullOrUndefined(rowInfo.original))
                                this.setState({showModal: true, selectedClimber: rowInfo.original});
                        },
                        style: {cursor: 'pointer'}
                    }
                }}
                noDataText="There are no climbers in the system. Try importing them from a csv file."
                filterable={true}
                defaultPageSize={10}
            />
            <RegistrationModal
                onClose={() => this.resetSelection()}
                show={this.state.showModal}
                onSave={(data:IUserRegistration) => this.props.onUpdate(data)}
                data={this.state.selectedClimber}
            />
        </div>
    }

    private get columns() {
        return [{
            Header: 'Signed In',
            accessor: 'signedIn',
            Cell: (c) => c.original.signedIn ? <i className="fa fa-check"/> : <i className="fa fa-times"/>
        }, {
            Header: 'Id',
            accessor: 'competitorId'
        }, {
            Header: 'First Name',
            accessor: 'firstName' // String-based value accessors!
        }, {
            Header: 'Last Name',
            accessor: 'lastName' // String-based value accessors!
        }, {
            Header: 'Gender',
            accessor: 'gender'
        }, {
            Header: 'Address',
            accessor: 'address'
        }, {
            Header: 'State',
            accessor: 'state'
        }, {
            Header: 'Zip',
            accessor: 'zip'
        }, {
            Header: 'Phone Number',
            accessor: 'phoneNumber'
        }, {
            Header: 'Email',
            accessor: 'email'
        }, {
            Header: 'CCS Number',
            accessor: 'ccsNumber'
        }]
    }

    private resetSelection() {
        this.setState({showModal: false})
    }
}