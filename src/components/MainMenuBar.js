/**
 * Created by Shaun on 14/02/2017.
 */
import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown,  MenuItem } from 'react-bootstrap';

const MainMenuBar = () => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Shaun Munsey</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">About</NavItem>
                    <NavItem eventKey={2} href="#">Skills</NavItem>
                    <NavItem eventKey={3} href="#">Experience</NavItem>
                    <NavItem eventKey={4} href="#">Education</NavItem>
                    <NavDropdown eventKey={5} title="Portfolio" id="basic-nav-dropdown">
                        <MenuItem eventKey={5.1}>Pomador Timer</MenuItem>
                        <MenuItem eventKey={5.2}>JQuery Codebox</MenuItem>
                        <MenuItem eventKey={5.3}>Form Validation</MenuItem>
                        <MenuItem eventKey={5.4}>Spotify API thing/*todo rename*/</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Email</NavItem>
                    <NavItem eventKey={2} href="#">LinkedIn</NavItem>
                    <NavItem eventKey={3} href="#">Twitter</NavItem>
                    <NavItem eventKey={4} href="#">Github</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MainMenuBar