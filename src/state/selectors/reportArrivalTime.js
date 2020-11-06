
function isArrivalTimeReportRequestPending(getState) {
    return () => getState().isRequestPending
}

function isArrivalTimeReportRequestSuccess(getState) {
    return () => getState().isRequestSuccessful
}

function isArrivalTimeReportRequestFailure(getState) {
    return () => getState().isRequestFailure
}

export {
    isArrivalTimeReportRequestPending,
    isArrivalTimeReportRequestSuccess,
    isArrivalTimeReportRequestFailure
}