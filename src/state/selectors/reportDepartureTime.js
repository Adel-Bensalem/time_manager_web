
function isDepartureTimeReportRequestPending(getState) {
    return () => getState().isRequestPending
}

function isDepartureTimeReportRequestSuccess(getState) {
    return () => getState().isRequestSuccessful
}

function isDepartureTimeReportRequestFailure(getState) {
    return () => getState().isRequestFailure
}

export {
    isDepartureTimeReportRequestPending,
    isDepartureTimeReportRequestSuccess,
    isDepartureTimeReportRequestFailure
}