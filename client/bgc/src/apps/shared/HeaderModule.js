  
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar } from 'react-bootstrap';

class HeaderModule extends React.Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <LinkContainer to="/">
                    <Navbar.Brand href="/">Board Game Creator</Navbar.Brand>
                </LinkContainer>
            </Navbar>
        );
    }
}

export default HeaderModule;