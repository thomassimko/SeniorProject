import * as React from 'react';
import {Button} from "mdbreact";
import {MDButton} from "./bootstrap/MDButton";
import {Column} from "./bootstrap/Column";

export interface IAppProps {
}

export interface IAppState {
}

export class App extends React.Component<IAppProps, IAppState> {

    constructor(props:IAppProps) {
        super(props);
        this.state = {
        }
    }

    render() {
        return <Column mdOffset={3} md={4}>
            <MDButton href="/#/competitions" name="Competitions" block/>
        </Column>
    }


}