import * as React from 'react';
import {CustomModal} from "../bootstrap/CustomModal";
import {FormInput} from "../bootstrap/FormInput";
import { API } from "aws-amplify";
import {MDButton} from "../bootstrap/MDButton";
import {INavigator} from "../../infrastructure/Navigator";
import DayPicker from 'react-day-picker';
import * as moment from 'moment';
import 'react-day-picker/lib/style.css';


export interface ICreateCompModalProps {
    reloadTable: () => void
}

export interface ICreateCompModalState {
    showModal: boolean,
    compName?: string,
    selectedDay?:Date
}

export class CreateCompModal extends React.Component<ICreateCompModalProps, ICreateCompModalState> {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
    }

    render() {
        return <span>
            <MDButton name="Create New Competition" onClick={() => this.setState({showModal: true})}/>
            <CustomModal
                onHide={() => {}}
                body={this.createCompForm}
                footer={
                    <div>
                        <MDButton name="Cancel" onClick={() => this.setState({showModal: false})}/>
                        <span>
                            <MDButton name="Create" onClick={(e) => this.handleSubmit(e)}/>
                        </span>
                    </div>
                }
                title="Create New Competition"
                show={this.state.showModal}
            />
        </span>
    }

    private get createCompForm() {
        return <div>
            <FormInput
                key={"Competition Name"}
                label={"Competition Name"}
                type={"text"}
                onChange={(event) => this.setState({compName: event.target.value})}
            />
            <span style={{textAlign: 'center'}}>
                <DayPicker
                    selectedDays={this.state.selectedDay}
                    onDayClick={(day, {selected}) => this.handleDayClick(day, {selected})}
                />
            </span>
        </div>
    }

    private async handleSubmit(event) {
        this.setState({showModal: false});

        console.log(this.state);

        event.preventDefault();

        try {
            await this.createCompetition({
                compName: this.state.compName,
                compDate: moment(this.state.selectedDay).unix(),
                showLocation: false,
                showSetter: true,
                showName: false
            });
            this.props.reloadTable();
            console.log("created comp")
        } catch (e) {
            console.error(e);
        }
    }

    handleDayClick(day, { selected }) {
        this.setState({
            selectedDay: selected ? undefined : day,
        });
    }

    createCompetition(competition) {
        return API.post("competitions", "/competitions", {
            body: competition
        });
    }
}