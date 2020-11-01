
function isGeneralManagerAccountCreationRequestPending(getState) {
    return () => getState().isRequestPending
}

function isGeneralManagerAccountCreationRequestSuccess(getState) {
    return () => getState().isRequestSuccessful
}

function isGeneralManagerAccountCreationRequestFailure(getState) {
    return () => getState().isRequestFailure
}

export {
    isGeneralManagerAccountCreationRequestPending,
    isGeneralManagerAccountCreationRequestSuccess,
    isGeneralManagerAccountCreationRequestFailure
}