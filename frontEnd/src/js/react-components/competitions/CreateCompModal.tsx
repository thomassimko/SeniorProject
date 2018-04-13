import * as React from 'react';
import {CustomModal} from "../bootstrap/CustomModal";
import {FormInput} from "../bootstrap/FormInput";
import { API } from "aws-amplify";
import {MDButton} from "../bootstrap/MDButton";

export interface ICreateCompModalState {
    showModal: boolean,
    compName?: string
}

export class CreateCompModal extends React.Component<{}, ICreateCompModalState> {

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
        return <FormInput
            key={"Competition Name"}
            label={"Competition Name"}
            type={"text"}
            onChange={(event) => this.setState({compName: event.target.value})}
        />
    }

    private async handleSubmit(event) {
        this.setState({showModal: false});

        console.log(this.state);

        event.preventDefault();

        try {
            await this.createCompetition({
                compName: this.state.compName
            });
            console.log("created comp")
        } catch (e) {
            console.error(e);
        }
    }

    createCompetition(competition) {
        return API.post("competitions", "/competitions", {
            body: competition
        });
    }
}