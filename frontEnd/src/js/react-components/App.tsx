import * as React from 'react';
import {isNullOrUndefined} from "util";
import parse = require("csv-parse");
import {IUserRegistration} from "../models/IUserRegistration";
import {RegistrationTable} from "./RegistrationTable";
import {ClimberRegistration} from "./ClimberRegistration";
import {Button, Input} from "mdbreact"
import {CreateCompModal} from "./competitions/CreateCompModal";


export interface IAppProps {
}

export interface IAppState {
    registrations: IUserRegistration[],
}

export class App extends React.Component<IAppProps, IAppState> {

    constructor(props:IAppProps) {
        super(props);
        this.state = {
            registrations: []
        }
    }

    render() {
        console.log(this.state)
        return <div style={{marginLeft: '10px', marginRight: '10px'}}>
            <div style={{textAlign: "right"}}>
                <label className="btn btn-default">
                    Import<input className="hidden" type="file" accept=".csv" onChange={(event) => this.handleFileUpload(event)}/>
                </label>
                <ClimberRegistration onAddNewClimber={(climber:IUserRegistration) => this.setState({registrations: [...this.state.registrations, climber]})}/>
            </div>

            <RegistrationTable registrations={this.state.registrations}/>

            <CreateCompModal/>
        </div>
    }

    private handleFileUpload(event) {

        const file = event.target.files[0];

        if(!isNullOrUndefined(file)) {
            const reader = new FileReader();
            reader.onload = () => {
                parse(reader.result, {auto_parse: true, columns: true, auto_parse_date: true}, (err, output) => {
                    if (output != null) {
                        const registrations:IUserRegistration[] = output.map(registration => {
                            return {
                                firstName: registration["First Name"],
                                lastName: registration["Last Name"],
                                gender: registration["Gender"],
                                address: registration["Home Address 1"],
                                state: registration["Home State"],
                                zip: registration["Home Zip"],
                                phoneNumber: registration["Phone Number"],
                                email: registration["Email"],
                                birthDate: registration["Birth Date"],
                                emergencyContact: {
                                    name: registration["Emergency Contact Name"],
                                    phone: registration["Emergency Contact Phone"]
                                },
                                ccsNumber: registration["CCS number"],
                                signedIn: false
                            }
                        });
                        this.setState({registrations: registrations})
                    }
                });
            };
            reader.readAsText(file);
        }
    }
}