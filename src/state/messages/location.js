
const LOCATIONS_REGISTERED = "LOCATIONS_REGISTERED";
const LOCATION_CHANGED = "LOCATION_CHANGED";

function dispatchLocationsRegistration(dispatch) {
    return (locations) => dispatch({ type: LOCATIONS_REGISTERED, locations })
}

function dispatchLocationChange(dispatch) {
    return (location) => dispatch({ type: LOCATION_CHANGED, location })
}

export {
    LOCATIONS_REGISTERED,
    LOCATION_CHANGED,
    dispatchLocationsRegistration,
    dispatchLocationChange
}