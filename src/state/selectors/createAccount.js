
function isAccountCreationRequestPending(state) {
    return () => state.isRequestPending
}

function isAccountCreationRequestSuccess(state) {
    return () => state.isRequestSuccessful
}

function isAccountCreationRequestFailure(state) {
    return () => state.isRequestFailure
}

export {
    isAccountCreationRequestPending,
    isAccountCreationRequestSuccess,
    isAccountCreationRequestFailure
}