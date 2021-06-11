import React from 'react';
import { Row, Col } from 'react-bootstrap';

import ExampleAtom from '../atoms/ExampleAtom';

class ExampleBlock extends React.Component {
    render() {
        return (
            <Row>
                <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                    <ExampleAtom message={ "H" } />
                </Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                    <ExampleAtom message={ "O" } />
                </Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                    <ExampleAtom message={ "M" } />
                </Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                    <ExampleAtom message={ "E" } />
                </Col>
            </Row>
        );
    }
}

export default ExampleBlock;