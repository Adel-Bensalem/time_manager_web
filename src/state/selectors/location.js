function getCurrentLocation(getState) {
    return () => getState().currentLocation;
}

export { getCurrentLocation };