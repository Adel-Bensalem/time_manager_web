
function isAccountDeletionRequestPending(getState) {
    return () => getState().isRequestPending
}

function isAccountDeletionRequestSuccess(getState) {
    return () => getState().isRequestSuccessful
}

function isAccountDeletionRequestFailure(getState) {
    return () => getState().isRequestFailure
}

export {
    isAccountDeletionRequestPending,
    isAccountDeletionRequestSuccess,
    isAccountDeletionRequestFailure
}