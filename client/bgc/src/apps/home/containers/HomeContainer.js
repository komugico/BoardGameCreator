import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

import HeaderModule from '../../shared/HeaderModule';

import * as actions from '../stores/home/actions';
import ExampleModule from '../components/home/modules/ExampleModule';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <HeaderModule />
                <br />
                <Container fluid>
                    <ExampleModule />
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, actions)(HomeContainer);