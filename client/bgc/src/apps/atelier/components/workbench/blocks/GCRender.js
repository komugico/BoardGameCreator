import React from 'react';

import * as C from '../../../stores/workbench/constants';

import GCTableAtom from '../atoms/GCTableAtom';

const GCRender = (type, data) => {
    switch (type) {
        case C.GAME_COMPONRNT_TYPE_TEXT:
            return (
                <p>{ data.value }</p>
            );
        case C.GAME_COMPONENT_TYPE_TABLE:
            return (
                <GCTableAtom
                    size_x={data.size_x}
                    size_y={data.size_y}
                    child_component={
                        (data_) => GCRender(data.child_component_type, data_)
                    }
                    contents={data.contents}
                />
            );
        case C.GAME_COMPONENT_TYPE_SPACE:
        default:
            return (
                <p></p>
            );
    }
}

export default GCRender;