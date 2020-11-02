
function isAuthenticationRequestPending(getState) {
    return () => getState().isRequestPending
}

function isAuthenticationRequestSuccess(getState) {
    return () => getState().isRequestSuccessful
}

function isAuthenticationRequestFailure(getState) {
    return () => getState().isRequestFailure
}

export {
    isAuthenticationRequestPending,
    isAuthenticationRequestSuccess,
    isAuthenticationRequestFailure
}