
const ARRIVAL_TIME_REPORT_REQUESTED = "ARRIVAL_TIME_REPORT_REQUESTED";
const ARRIVAL_TIME_REPORT_SUCCEEDED = "ARRIVAL_TIME_REPORT_SUCCEEDED";
const ARRIVAL_TIME_REPORT_FAILED = "ARRIVAL_TIME_REPORT_FAILED";

function dispatchArrivalTimeReportRequest(dispatch) {
    return () => dispatch({ type: ARRIVAL_TIME_REPORT_REQUESTED })
}

function dispatchArrivalTimeReportSuccess(dispatch) {
    return () => dispatch({ type: ARRIVAL_TIME_REPORT_SUCCEEDED })
}

function dispatchArrivalTimeReportFailure(dispatch) {
    return () => dispatch({ type: ARRIVAL_TIME_REPORT_FAILED })
}

export {
    ARRIVAL_TIME_REPORT_REQUESTED,
    ARRIVAL_TIME_REPORT_SUCCEEDED,
    ARRIVAL_TIME_REPORT_FAILED,
    dispatchArrivalTimeReportRequest,
    dispatchArrivalTimeReportSuccess,
    dispatchArrivalTimeReportFailure
}