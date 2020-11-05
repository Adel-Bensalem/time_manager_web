
function isAccountCreationRequestPending(getState) {
    return () => getState().isRequestPending
}

function isAccountCreationRequestSuccess(getState) {
    return () => getState().isRequestSuccessful
}

function isAccountCreationRequestFailure(getState) {
    return () => getState().isRequestFailure
}

export {
    isAccountCreationRequestPending,
    isAccountCreationRequestSuccess,
    isAccountCreationRequestFailure
}