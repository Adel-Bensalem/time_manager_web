import {messages} from "../messages";
import {createReducer} from "./tools/createReducer";

const initialState = { currentLocation: "", locations: [] };

function registerLocations(state, { locations, currentLocation }) {
    return { ...state, locations, currentLocation };
}

function changeLocation(state, { location }) {
    return { ...state, currentLocation: location };
}

const reduceLocationState = createReducer(initialState, {
    [messages.LOCATIONS_REGISTERED]: registerLocations,
    [messages.LOCATION_CHANGED]: changeLocation,
});

export { reduceLocationState }