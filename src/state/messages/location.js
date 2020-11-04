
const LOCATION_CHANGED = "LOCATION_CHANGED";

function dispatchLocationChange(dispatch) {
    return (location) => dispatch({ type: LOCATION_CHANGED, location })
}

export {
    LOCATION_CHANGED,
    dispatchLocationChange
}