
function isTeamCreationRequestPending(getState) {
    return () => getState().isRequestPending
}

function isTeamCreationRequestSuccess(getState) {
    return () => getState().isRequestSuccessful
}

function isTeamCreationRequestFailure(getState) {
    return () => getState().isRequestFailure
}

export {
    isTeamCreationRequestPending,
    isTeamCreationRequestSuccess,
    isTeamCreationRequestFailure
}