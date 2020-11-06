
const EMPLOYEE_ADDITION_REQUESTED = "EMPLOYEE_ADDITION_REQUESTED";
const EMPLOYEE_ADDITION_SUCCEEDED = "EMPLOYEE_ADDITION_SUCCEEDED";
const EMPLOYEE_ADDITION_FAILED = "EMPLOYEE_ADDITION_FAILED";

function dispatchEmployeeAdditionRequest(dispatch) {
    return () => dispatch({ type: EMPLOYEE_ADDITION_REQUESTED })
}

function dispatchEmployeeAdditionSuccess(dispatch) {
    return () => dispatch({ type: EMPLOYEE_ADDITION_SUCCEEDED })
}

function dispatchEmployeeAdditionFailure(dispatch) {
    return () => dispatch({ type: EMPLOYEE_ADDITION_FAILED })
}

export {
    EMPLOYEE_ADDITION_REQUESTED,
    EMPLOYEE_ADDITION_SUCCEEDED,
    EMPLOYEE_ADDITION_FAILED,
    dispatchEmployeeAdditionRequest,
    dispatchEmployeeAdditionSuccess,
    dispatchEmployeeAdditionFailure
}