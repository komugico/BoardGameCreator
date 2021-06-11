import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';

import HeaderModule from '../../shared/HeaderModule';

import * as actions from '../stores/workbench/actions';
import UserInterfaceModule from '../components/workbench/modules/UserInterfaceModule';
import GameComponentModule from '../components/workbench/modules/GameComponentModule';
import LogicEditorModule from '../components/workbench/modules/LogicEditorModule';

class WorkbenchContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <HeaderModule />
                <br />
                <Container fluid>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="ui" title="User Interface">
                            <UserInterfaceModule />
                        </Tab>
                        <Tab eventKey="gc" title="Game Components">
                            <GameComponentModule />
                        </Tab>
                        <Tab eventKey="logic" title="Logic Editor">
                            <LogicEditorModule />
                        </Tab>
                    </Tabs>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, actions)(WorkbenchContainer);