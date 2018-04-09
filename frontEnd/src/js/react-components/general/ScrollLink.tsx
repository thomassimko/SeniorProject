import * as React from 'react';
import {Link} from "react-scroll";

export interface IScrollLinkProps {
    to: string,
    linkName?: string
}

export class ScrollLink extends React.Component<IScrollLinkProps, {}> {
    render():JSX.Element {
        return <Link
            activeClass="active"
            to={this.props.to}
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
        >
            {this.props.linkName}
        </Link>
    }
}