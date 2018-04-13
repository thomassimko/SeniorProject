import * as React from 'react';
import {IUserRegistration} from "../../../models/IUserRegistration";
import {RegistrationModal} from "./RegistrationModal";
import {MDButton} from "../../bootstrap/MDButton";


export interface IRegistrationButtonState {
    showNewClimberModal: boolean,
}
export interface IRegistrationButtonProps {
    compTableId: string,
    onUpdate: (data:IUserRegistration) => void
}

export class RegistrationButton extends React.Component<IRegistrationButtonProps, IRegistrationButtonState> {

    constructor(props) {
        super(props);
        this.state = {
            showNewClimberModal: false
        }
    }

    render() {
        return <span>
            <MDButton name="New Climber" onClick={() => this.setState({showNewClimberModal: true})}/>
            <RegistrationModal
                onClose={() => this.setState({showNewClimberModal: false})}
                onSave={(data:IUserRegistration) => this.onModalClose(data)}
                show={this.state.showNewClimberModal}
            />
        </span>
    }

    private onModalClose(data: IUserRegistration) {
        this.setState({showNewClimberModal: false});
        this.props.onUpdate(data);
    }
}