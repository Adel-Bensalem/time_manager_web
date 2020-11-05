
function isAccountEditionRequestPending(getState) {
    return () => getState().isRequestPending
}

function isAccountEditionRequestSuccess(getState) {
    return () => getState().isRequestSuccessful
}

function isAccountEditionRequestFailure(getState) {
    return () => getState().isRequestFailure
}

export {
    isAccountEditionRequestPending,
    isAccountEditionRequestSuccess,
    isAccountEditionRequestFailure
}