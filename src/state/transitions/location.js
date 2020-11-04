import {messages} from "../messages";
import {createReducer} from "./tools/createReducer";

const initialState = { currentLocation: location.pathname };

function changeLocation(state, { location }) {
    return { ...state, currentLocation: location };
}

const reduceLocationState = createReducer(initialState, {
    [messages.LOCATION_CHANGED]: changeLocation,
});

export { reduceLocationState }