import * as React from 'react';
import {IUserRegistration} from "../models/IUserRegistration";
import ReactTable from "react-table";



export interface IRegistrationTableProps {
    registrations: IUserRegistration[]
}


export class RegistrationTable extends React.Component<IRegistrationTableProps, {}> {

    render() {
        return <ReactTable
            className="-highlight -striped"
            data={this.props.registrations}
            columns={this.columns}
            getTdProps={(state, rowInfo, column, instance) => {
                return {
                    onClick: (e, handleOriginal) => {
                        console.log(rowInfo)
                    },
                    style: {cursor: 'pointer'}
                }
            }}
            noDataText="There are no climbers in the system. Try importing them from a csv file."
            filterable={true}
            defaultPageSize={10}
        />
    }

    private get columns() {
        return [{
            Header: 'Signed In',
            accessor: 'signedIn',
            Cell: (c) => c.original.signedIn ? <i className="fa fa-check"/> : <i className="fa fa-times"/>
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
}