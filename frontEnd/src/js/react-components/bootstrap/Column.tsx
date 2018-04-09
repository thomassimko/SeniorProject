import * as React from 'react';

export interface IColumnProps {
    md?: number,
    lg?: number,
    sm?: number,
    mdOffset?: number,
    lgOffset?: number,
    smOffset?: number
}

export class Column extends React.Component<IColumnProps, {}> {


    render() {
        return <div className={this.convertPropsSizeToClassName()}>
            {this.props.children}
        </div>
    }

    private convertPropsSizeToClassName():string {
        return `${this.mdSettings} ${this.smSettings} ${this.lgSettings}`;
    }

    get mdSettings() {
        return `${this.props.md ? `col-md-${this.props.md}` : ''} ${this.props.mdOffset ? `col-md-offset-${this.props.mdOffset}` : ''}`
    }
    get smSettings() {
        return `${this.props.sm ? `col-sm-${this.props.sm}` : ''} ${this.props.smOffset ? `col-sm-offset-${this.props.smOffset}` : ''}`
    }
    get lgSettings() {
        return `${this.props.lg ? `col-lg-${this.props.lg}` : ''} ${this.props.lgOffset ? `col-lg-offset-${this.props.lgOffset}` : ''}`
    }
}