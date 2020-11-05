
function isTeamsRetrievalRequestPending(getState) {
    return () => getState().request.isRequestPending
}

function isTeamsRetrievalRequestSuccess(getState) {
    return () => getState().request.isRequestSuccessful
}

function isTeamsRetrievalRequestFailure(getState) {
    return () => getState().request.isRequestFailure
}

function getTeams(getState) {
    return () => getState().teams
}

export {
    isTeamsRetrievalRequestPending,
    isTeamsRetrievalRequestSuccess,
    isTeamsRetrievalRequestFailure,
    getTeams
}