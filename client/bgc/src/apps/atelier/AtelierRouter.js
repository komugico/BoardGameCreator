import React from 'react';
import { Route } from "react-router-dom";
import { Provider } from 'react-redux';

import WorkbenchContainer from './containers/WorkbenchContainer';
import WorkbenchStore from './stores/workbench/store';

class AtelierRouter extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/atelier/workbench">
                    <Provider store={WorkbenchStore}>
                        <WorkbenchContainer />
                    </Provider>
                </Route>
            </div>
        )
    }
}

export default AtelierRouter;