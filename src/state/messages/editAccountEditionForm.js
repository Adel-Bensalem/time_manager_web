
const ACCOUNT_EDITION_FORM_EDITION_REQUESTED = "ACCOUNT_EDITION_FORM_EDITION_REQUESTED";
const ACCOUNT_EDITION_FORM_EDITION_SUCCEEDED = "ACCOUNT_EDITION_FORM_EDITION_SUCCEEDED";
const ACCOUNT_EDITION_FORM_EDITION_FAILED = "ACCOUNT_EDITION_FORM_EDITION_FAILED";

function dispatchAccountEditionFormEditionRequest(dispatch) {
    return (formData) => dispatch({
        type: ACCOUNT_EDITION_FORM_EDITION_REQUESTED,
        formData
    });
}

function dispatchAccountEditionFormEditionSuccess(dispatch) {
    return (formData) => dispatch({
        type: ACCOUNT_EDITION_FORM_EDITION_SUCCEEDED,
        formData
    });
}

function dispatchAccountEditionFormEditionFailure(dispatch) {
    return (formData) => dispatch({
        type: ACCOUNT_EDITION_FORM_EDITION_FAILED,
        formData
    });
}


export {
    ACCOUNT_EDITION_FORM_EDITION_REQUESTED,
    ACCOUNT_EDITION_FORM_EDITION_SUCCEEDED,
    ACCOUNT_EDITION_FORM_EDITION_FAILED,
    dispatchAccountEditionFormEditionRequest,
    dispatchAccountEditionFormEditionSuccess,
    dispatchAccountEditionFormEditionFailure,
}