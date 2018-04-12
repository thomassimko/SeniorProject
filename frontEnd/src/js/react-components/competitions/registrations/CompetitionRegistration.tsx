import * as React from 'react';
import {isNullOrUndefined} from "util";
import parse = require("csv-parse");
import {IUserRegistration} from "../../../models/IUserRegistration";
import {RegistrationTable} from "./RegistrationTable";
import {RegistrationModal} from "./RegistrationModal";
import {Button, Input} from "mdbreact"
import { API } from "aws-amplify";
import {RegistrationButton} from "./RegistrationButton";
var cleaner = require('deep-cleaner');


export interface ICompetitionRegistrationProps {
    compTableId: string
}

export interface ICompetitionRegistrationState {
    registrations: IUserRegistration[],
}

export class CompetitionRegistration extends React.Component<ICompetitionRegistrationProps, ICompetitionRegistrationState> {

    private timer;

    constructor(props:ICompetitionRegistrationProps) {
        super(props);
        this.state = {
            registrations: []
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.updateEntries(), 60000);
        this.updateEntries();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        console.log(this.state)
        return <div style={{marginLeft: '10px', marginRight: '10px'}}>
            <div style={{textAlign: "right"}}>
                <label className="btn btn-default">
                    Import<input className="hidden" type="file" accept=".csv" onChange={(event) => this.handleFileUpload(event)}/>
                </label>
                <RegistrationButton compTableId={this.props.compTableId} onUpdate={(data:IUserRegistration) => this.registerCompetitorWithDB(data)}/>
            </div>

            <RegistrationTable
                registrations={this.state.registrations}
                onUpdate={(data:IUserRegistration) => this.updateCompetitorInfoWithDB(data)}
                compTableId={this.props.compTableId}
            />
        </div>
    }

    private handleFileUpload(event) {

        const file = event.target.files[0];

        if(!isNullOrUndefined(file)) {
            const reader = new FileReader();
            reader.onload = () => {
                parse(reader.result, {auto_parse: true, columns: true, auto_parse_date: true}, (err, output) => {
                    if (output != null) {
                        output.forEach(registration => {
                            const data = {
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
                            this.registerCompetitorWithDB(data);
                        });
                        this.updateEntries();
                    }
                });
            };
            reader.readAsText(file);
        }
    }

    private async registerCompetitorWithDB(competitor: IUserRegistration) {
        cleaner(competitor, "emergencyContact");
        cleaner(competitor);
        await API.post('competitions', `/competitions/${this.props.compTableId}`, {
            body: competitor
        });
        this.updateEntries();
    }

    private async updateCompetitorInfoWithDB(competitor: IUserRegistration) {
        cleaner(competitor, "emergencyContact");
        cleaner(competitor);
        console.log(competitor);
        await API.put('competitions', `/competitions/${this.props.compTableId}/${competitor.competitorId}`, {
            body: competitor
        });
        this.updateEntries();
    }

    private async updateEntries() {
        console.log("updated");
        this.setState({registrations: await API.get('competitions', `/competitions/${this.props.compTableId}`, {})});
    }
}