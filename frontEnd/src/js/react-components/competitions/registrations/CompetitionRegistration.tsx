import * as React from 'react';
import {isNullOrUndefined} from "util";
import parse = require("csv-parse");
import {IUserRegistration} from "../../../models/IUserRegistration";
import {RegistrationTable} from "./RegistrationTable";
import {Button, Input} from "mdbreact"
import {RegistrationButton} from "./RegistrationButton";
import {ICompetitorController} from "../../../controllers/CompetitorController";
var cleaner = require('deep-cleaner');


export interface ICompetitionRegistrationProps {
    compTableId: string,
    competitorController:ICompetitorController
}

export interface ICompetitionRegistrationState {
    registrations: IUserRegistration[],
    isLoading: boolean
}

export class CompetitionRegistration extends React.Component<ICompetitionRegistrationProps, ICompetitionRegistrationState> {

    private timer;

    constructor(props:ICompetitionRegistrationProps) {
        super(props);
        this.state = {
            registrations: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.updateEntries(), 120000);
        this.updateEntries();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        console.log(this.state)
        return <div style={{marginLeft: '10px', marginRight: '10px'}}>
            <div style={{textAlign: "right"}}>
                <label className="btn btn-mdb-color waves-effect btn-lg">
                    Import<input className="hidden" type="file" accept=".csv" onChange={(event) => this.handleFileUpload(event)}/>
                </label>
                <RegistrationButton compTableId={this.props.compTableId} onUpdate={(data:IUserRegistration) => this.registerCompetitorWithDB(data)}/>
            </div>

            <RegistrationTable
                registrations={this.state.registrations}
                onUpdate={(data:IUserRegistration) => this.updateCompetitorInfoWithDB(data)}
                compTableId={this.props.compTableId}
                loading={this.state.isLoading}
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

        await this.props.competitorController.createCompetitor(this.props.compTableId, competitor);
        this.updateEntries();
    }

    private async updateCompetitorInfoWithDB(competitor: IUserRegistration) {
        cleaner(competitor, "emergencyContact");
        cleaner(competitor);
        if (competitor.registrationId != null) {
            await this.props.competitorController.updateCompetitor(this.props.compTableId, competitor.registrationId, competitor);
            this.updateEntries();
        }
    }

    private async updateEntries() {
        this.setState({
            registrations: await this.props.competitorController.getCompetitors(this.props.compTableId),
            isLoading: false
        });
    }
}