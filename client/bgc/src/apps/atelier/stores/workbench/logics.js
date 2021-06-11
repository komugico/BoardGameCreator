/* ========================================================================== */
/* Import                                                                     */
/* ========================================================================== */
import * as C from './constants';

/* ========================================================================== */
/* Export Functions                                                           */
/* ========================================================================== */
export const createInitState = () => {
    return {
        ui: createInitUserInterface(),
    }
}

/* ========================================================================== */
/* Internal Functions                                                         */
/* ========================================================================== */
const createInitUserInterface = () => {
    return {
        design: [
            {
                row: [
                    {
                        col: 3,
                        component: {
                            type: C.GAME_COMPONENT_TYPE_SPACE,
                            data: null,
                        }
                    },
                    {
                        col: 6,
                        component: {
                            type: C.GAME_COMPONENT_TYPE_TABLE,
                            data: {
                                size_x: 3,
                                size_y: 3,
                                child_component_type: C.GAME_COMPONRNT_TYPE_TEXT,
                                contents: [
                                    [{ value: "0" }, { value: "0" }, { value: "0" },],
                                    [{ value: "0" }, { value: "1" }, { value: "0" },],
                                    [{ value: "0" }, { value: "1" }, { value: "1" },],
                                ],
                            }
                        }
                    },
                    {
                        col: 3,
                        component: {
                            type: C.GAME_COMPONENT_TYPE_SPACE,
                            data: null,
                        }
                    },
                ]
            }
        ]
    }
}