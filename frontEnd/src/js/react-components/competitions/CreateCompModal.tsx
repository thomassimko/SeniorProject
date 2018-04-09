import * as React from 'react';
import {CustomModal} from "../bootstrap/CustomModal";
import {FormInput} from "../bootstrap/FormInput";
import { API } from "aws-amplify";

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
            <a className="btn btn-default" onClick={() => this.setState({showModal: true})}>Create New Competition</a>

            <CustomModal
                onHide={() => {}}
                body={this.createCompForm}
                footer={
                    <div>
                        <a className="btn btn-default" onClick={() => this.setState({showModal: false})}>Cancel</a>
                        <span>
                            <a className="btn btn-default" onClick={(e) => this.handleSubmit(e)}>Create</a>
                        </span>
                    </div>
                }
                title="Create New Competition"
                show={this.state.showModal}
            />;
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
        event.preventDefault();

        try {
            await this.createCompetition({
                content: this.state.compName
            });
            console.log("created comp")
        } catch (e) {
            alert(e);
        }
    }

    createCompetition(competition) {
        return API.post("competitions", "/competitions", {
            body: competition
        });
    }
}