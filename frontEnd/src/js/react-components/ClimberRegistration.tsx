import * as React from 'react';
import {IUserRegistration} from "../models/IUserRegistration";
import {Button, Input} from "mdbreact"
import {CustomModal} from "./bootstrap/CustomModal";

export interface IClimberRegistrationProps {
    onAddNewClimber: (climber:IUserRegistration) => void
}

export interface IClimberRegistrationState extends IUserRegistration {
    showNewClimberModal: boolean
}

export class ClimberRegistration extends React.Component<IClimberRegistrationProps, IClimberRegistrationState> {

    constructor(props) {
        super(props);
        this.state = {
            showNewClimberModal: false
        }
    }


    render() {
    return <span>
        <a className="btn btn-default" onClick={() => this.setState({showNewClimberModal: true})}>New Climber</a>

        <CustomModal
            onHide={() => {}}
            body={this.registerForm}
            footer={
                <div>
                    <a className="btn btn-default" onClick={() => {this.setState({showNewClimberModal: false})}}>Cancel</a>
                    <span>
                        <a className="btn btn-default" onClick={() => this.addNewClimber()}>Save</a>
                    </span>
                </div>
            }
            title="Register New Climber"
            show={this.state.showNewClimberModal}
        />
    </span>
    }

    private addNewClimber() {
        this.props.onAddNewClimber(this.state as IUserRegistration);
        this.setState({showNewClimberModal: false})
    }

    private get registerForm() {
        return <form>
            {this.fields.map(field => this.getFormField(field))}
        </form>
    }

    private handleChange(accessor, e) {
        this.setState({[accessor]: e.target.value})
    }

    private getFormField(field) {
        return <Input
            key={field.accessor}
            label={field.label}
            group
            type={field.accessor == "email" ? "email" : "text"}
            onChange={(event) => this.handleChange(field.accessor, event)}
        />
    }

    private get fields() {
        return [{
            label: "First Name",
            accessor: "firstName"
        },
            {
                label: "Last Name",
                accessor: "lastName"
            },
            {
                label: "Gender",
                accessor: "gender"
            },
            {
                label: "Email",
                accessor: "email"
            },
            {
                label: "Address",
                accessor: "address"
            },
            {
                label: "State",
                accessor: "state"
            },
            {
                label: "Zip",
                accessor: "zip"
            }]
    }

}