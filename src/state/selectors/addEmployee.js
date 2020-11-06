
function isEmployeeAdditionRequestPending(getState) {
    return () => getState().isRequestPending
}

function isEmployeeAdditionRequestSuccess(getState) {
    return () => getState().isRequestSuccessful
}

function isEmployeeAdditionRequestFailure(getState) {
    return () => getState().isRequestFailure
}

export {
    isEmployeeAdditionRequestPending,
    isEmployeeAdditionRequestSuccess,
    isEmployeeAdditionRequestFailure
}