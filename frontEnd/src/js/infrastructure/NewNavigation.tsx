import * as React from 'react';
import {Link} from "react-scroll";
import {ICognitoController} from '../models/CognitoController';
import {NavLink} from "react-router-dom"
import {Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse, NavbarNav, Fa} from "mdbreact";

export interface INavigationProps {
    cognitoController:ICognitoController;
}

export interface INavigationState {
    collapse: boolean,
    isWideEnough: boolean
}

export class NewNavigation extends React.Component<INavigationProps, INavigationState> {
    constructor(props) {
        super(props);
        this.state ={
            collapse: false,
            isWideEnough: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <Navbar color="indigo" dark expand="md" fixed="top" scrolling>
                <NavbarBrand href="/">Navbar</NavbarBrand>
                {!this.state.isWideEnough && <NavbarToggler onClick ={this.onClick} />}
                <Collapse isOpen={this.state.collapse} navbar>
                    <NavbarNav className="mr-auto" onClick={this.onClick}>
                        <NavItem>
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/feature">Features</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/opinions">Opinions</NavLink>
                        </NavItem>
                    </NavbarNav>
                    <NavbarNav className="ml-auto">
                        <NavItem>
                            <NavLink className="nav-link" to="https://facebook.com/"><Fa icon="facebook" /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="https://twitter.com/"><Fa icon="twitter" /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="https://instagram.com/"><Fa icon="instagram" /></NavLink>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        )
    }
}
