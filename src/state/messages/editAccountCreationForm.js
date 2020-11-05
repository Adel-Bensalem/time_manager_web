
const ACCOUNT_CREATION_FORM_EDITION_REQUESTED = "ACCOUNT_CREATION_FORM_EDITION_REQUESTED";
const ACCOUNT_CREATION_FORM_EDITION_SUCCEEDED = "ACCOUNT_CREATION_FORM_EDITION_SUCCEEDED";
const ACCOUNT_CREATION_FORM_EDITION_FAILED = "ACCOUNT_CREATION_FORM_EDITION_FAILED";

function dispatchAccountCreationFormEditionRequest(dispatch) {
    return (formData) => dispatch({
        type: ACCOUNT_CREATION_FORM_EDITION_REQUESTED,
        formData
    });
}

function dispatchAccountCreationFormEditionSuccess(dispatch) {
    return (formData) => dispatch({
        type: ACCOUNT_CREATION_FORM_EDITION_SUCCEEDED,
        formData
    });
}

function dispatchAccountCreationFormEditionFailure(dispatch) {
    return (formData) => dispatch({
        type: ACCOUNT_CREATION_FORM_EDITION_FAILED,
        formData
    });
}


export {
    ACCOUNT_CREATION_FORM_EDITION_REQUESTED,
    ACCOUNT_CREATION_FORM_EDITION_SUCCEEDED,
    ACCOUNT_CREATION_FORM_EDITION_FAILED,
    dispatchAccountCreationFormEditionRequest,
    dispatchAccountCreationFormEditionSuccess,
    dispatchAccountCreationFormEditionFailure
}