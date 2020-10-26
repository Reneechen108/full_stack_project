import React, { Component } from 'react';
import { NavBar, Nav, NavItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

class AccountNav extends Component {
    render() {
        return (
            <Nav variant="tabs" defaultActiveKey="/home">
                {/* <LinkContainer to="/login">
                    <Nav.Item>
                        Login
                    </Nav.Item>
                </LinkContainer>
                <LinkContainer to="/signup">
                    <Nav.Item>
                        New Account
                    </Nav.Item>
                </LinkContainer> */}
                <Nav.Item>
                    <Nav.Link href="/login/">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/signup/">New Account</Nav.Link>
                </Nav.Item>
                {/* <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">New Account</Link>
                </li> */}
            </Nav>
        )
    }
}
export default AccountNav;