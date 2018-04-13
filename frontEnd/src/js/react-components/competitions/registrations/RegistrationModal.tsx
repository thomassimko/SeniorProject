import * as React from 'react';
import {IUserRegistration} from "../../../models/IUserRegistration";
import {CustomModal} from "../../bootstrap/CustomModal";
import {isNullOrUndefined} from "util";
import {FormInput} from "../../bootstrap/FormInput";
import {MDButton} from "../../bootstrap/MDButton";

export interface IRegistrationModalProps {
    onClose: () => void,
    show: boolean,
    data?: IUserRegistration,
    onSave: (data:IUserRegistration) => void
}

export interface IRegistrationModalState extends IUserRegistration {
    showNewClimberModal: boolean
}

export class RegistrationModal extends React.Component<IRegistrationModalProps, IRegistrationModalState> {

    constructor(props) {
        super(props);
        this.state = {
            showNewClimberModal: false
        }
    }

    componentWillReceiveProps(props:IRegistrationModalProps) {
        this.setState({...props.data});
    }


    render() {
        console.log(this.state);
        return <span>
            <CustomModal
                onHide={() => {}}
                body={this.registerForm}
                footer={
                    <div>
                        <MDButton name="Cancel" onClick={() => {this.props.onClose()}}/>
                        <span>
                            <MDButton name="Save" onClick={() => this.props.onSave(this.state as IUserRegistration)}/>
                        </span>
                    </div>
                }
                title="Register New Climber"
                show={this.props.show}
            />
        </span>
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
        return <FormInput
            key={field.accessor}
            label={field.label}
            type={field.accessor == "email" ? "email" : "text"}
            onChange={(event) => this.handleChange(field.accessor, event)}
            defaultValue={this.props.data ? this.props.data[field.accessor] : ""}
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