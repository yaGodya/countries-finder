import { SET_REGION, SET_SEARCH, CLEAR_CONTROLS } from "./controls-actions";

const initialState = {
    search: "",
    region: "",
};

export const controlReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_SEARCH:
            return {
                ...state,
                search: payload,
            };
        case SET_REGION:
            return {
                ...state,
                region: payload,
            };
        case CLEAR_CONTROLS:
            return initialState;
        default:
            return state;
    }
};
