
function isSessionDecodeRequestPending(getState) {
    return () => getState().isRequestPending
}

function isSessionDecodeRequestSuccess(getState) {
    return () => getState().isRequestSuccessful
}

function isSessionDecodeRequestFailure(getState) {
    return () => getState().isRequestFailure
}

export {
    isSessionDecodeRequestPending,
    isSessionDecodeRequestSuccess,
    isSessionDecodeRequestFailure
}