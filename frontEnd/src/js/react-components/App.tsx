import * as React from 'react';

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
        return <a className="btn btn-default" href="/#/competitions">Competitions</a>
    }


}