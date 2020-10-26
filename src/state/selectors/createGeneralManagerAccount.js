
function isGeneralManagerAccountCreationRequestPending(state) {
    return () => state.isRequestPending
}

function isGeneralManagerAccountCreationRequestSuccess(state) {
    return () => state.isRequestSuccessful
}

function isGeneralManagerAccountCreationRequestFailure(state) {
    return () => state.isRequestFailure
}

export {
    isGeneralManagerAccountCreationRequestPending,
    isGeneralManagerAccountCreationRequestSuccess,
    isGeneralManagerAccountCreationRequestFailure
}