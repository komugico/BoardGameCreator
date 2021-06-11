import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavDropdown } from 'react-bootstrap';

class HeaderModule extends React.Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <LinkContainer to="/">
                    <Navbar.Brand href="/">Board Game Creator</Navbar.Brand>
                </LinkContainer>
                <NavDropdown title="Atelier">
                    <LinkContainer to="/atelier/workbench">
                        <NavDropdown.Item>Workbench</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
            </Navbar>
        );
    }
}

export default HeaderModule;