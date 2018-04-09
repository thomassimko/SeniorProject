import * as React from 'react';
import {Link} from "react-scroll";
import {ICognitoController} from '../models/CognitoController';

export interface INavigationProps {
    cognitoController:ICognitoController;
}

export class Navigation extends React.Component<INavigationProps, {}> {

    render() {
        return <nav className="navbar navbar-default navbar-fixed-top" style={{marginBottom: '100px'}}>
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                    <a className="navbar-brand" href="/#/">Onsight</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    {this.getLoggedInMenu()}
                </div>
            </div>
        </nav>
    }

    private getLoggedInMenu() {
        const loggedIn = this.props.cognitoController.isLoggedIn();
        return <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                    <li><a href="/#/about">About</a></li>
                    {loggedIn ?
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="/#/">Play<span className="caret"/></a>
                            <ul className="dropdown-menu">
                                <li><a href="/#/picking">Picking</a></li>
                                <li><a href="/#/classification">Classification</a></li>
                            </ul>
                        </li>
                        : null}
                </ul>
                    {loggedIn ?
                        <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="/#/"><i className="fa fa-user-circle fa-lg"/></a>
                            <ul className="dropdown-menu">
                                <li><a href="/#/logout">Logout</a></li>
                            </ul>
                        </li>
                        </ul>
                        : <ul className="nav navbar-nav navbar-right">
                            <li><a href="/#/login">Login</a></li>
                            <li><a href="/#/register">Sign Up</a></li>
                        </ul>
                    }
            </div>;

    }
}
