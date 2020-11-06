
const DEPARTURE_TIME_REPORT_REQUESTED = "DEPARTURE_TIME_REPORT_REQUESTED";
const DEPARTURE_TIME_REPORT_SUCCEEDED = "DEPARTURE_TIME_REPORT_SUCCEEDED";
const DEPARTURE_TIME_REPORT_FAILED = "DEPARTURE_TIME_REPORT_FAILED";

function dispatchDepartureTimeReportRequest(dispatch) {
    return () => dispatch({ type: DEPARTURE_TIME_REPORT_REQUESTED })
}

function dispatchDepartureTimeReportSuccess(dispatch) {
    return () => dispatch({ type: DEPARTURE_TIME_REPORT_SUCCEEDED })
}

function dispatchDepartureTimeReportFailure(dispatch) {
    return () => dispatch({ type: DEPARTURE_TIME_REPORT_FAILED })
}

export {
    DEPARTURE_TIME_REPORT_REQUESTED,
    DEPARTURE_TIME_REPORT_SUCCEEDED,
    DEPARTURE_TIME_REPORT_FAILED,
    dispatchDepartureTimeReportRequest,
    dispatchDepartureTimeReportSuccess,
    dispatchDepartureTimeReportFailure
}