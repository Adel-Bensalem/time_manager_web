
const EMPLOYEE_ADDITION_FORM_EDITION_SUCCEEDED = "EMPLOYEE_ADDITION_FORM_EDITION_SUCCEEDED";
const EMPLOYEE_ADDITION_FORM_EDITION_FAILED = "EMPLOYEE_ADDITION_FORM_EDITION_FAILED";

function dispatchEmployeeAdditionFormEditionSuccess(dispatch) {
    return (formData) => dispatch({
        type: EMPLOYEE_ADDITION_FORM_EDITION_SUCCEEDED,
        formData
    });
}

function dispatchEmployeeAdditionFormEditionFailure(dispatch) {
    return (formData) => dispatch({
        type: EMPLOYEE_ADDITION_FORM_EDITION_FAILED,
        formData
    });
}


export {
    EMPLOYEE_ADDITION_FORM_EDITION_SUCCEEDED,
    EMPLOYEE_ADDITION_FORM_EDITION_FAILED,
    dispatchEmployeeAdditionFormEditionSuccess,
    dispatchEmployeeAdditionFormEditionFailure
}