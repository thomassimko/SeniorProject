import * as React from 'react';
import {Modal} from 'react-bootstrap';
import {TSXMarkup} from '../../infrastructure/TSXMarkup';
import {isNullOrUndefined} from "util";


export interface IModalProps {
    onHide?: () => void,
    title?: string,
    body: TSXMarkup,
    footer: TSXMarkup,
    show: boolean
}

export class CustomModal extends React.Component<IModalProps, {}> {
    render() {
        return <Modal onHide={() => {!isNullOrUndefined(this.props.onHide) ? this.props.onHide() : null}} show={this.props.show}>
            {!isNullOrUndefined(this.props.title)
                ? <Modal.Header>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                : null
            }
            <Modal.Body>
                {this.props.body}
            </Modal.Body>
            <Modal.Footer>
                {this.props.footer}
            </Modal.Footer>
        </Modal>
    }
}