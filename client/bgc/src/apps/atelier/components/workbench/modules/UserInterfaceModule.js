import React from 'react';
import { Row, Col } from 'react-bootstrap';
import GCRender from '../blocks/GCRender';

class UserInterfaceModule extends React.Component {
    designRender() {
        console.dir(this.props.ui);
        let rows = this.props.ui.design.map((row, y) => {
            return this.rowRender(row, y);
        });
        return (
            <div>
                {rows}
            </div>
        );
    }

    rowRender(row, y) {
        let cols = row.row.map((col, x) => {
            return this.colRender(col, x, y);
        });
        return (
            <Row>
                { cols }
            </Row>
        );
    }

    colRender(col, x, y) {
        return (
            <Col xl={col.col} lg={col.col} md={col.col} sm={col.col} xs={col.col}>
                { GCRender(col.component.type, col.component.data)}
            </Col>
        );
    }

    render() {
        return (
            <div>
                { this.designRender() }
            </div>
        );
    }
}

export default UserInterfaceModule;