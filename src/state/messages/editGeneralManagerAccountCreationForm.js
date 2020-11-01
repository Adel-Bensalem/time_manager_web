
const GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_REQUESTED = "GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_REQUESTED";
const GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_SUCCEEDED = "GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_SUCCEEDED";
const GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_FAILED = "GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_FAILED";

function dispatchGeneralManagerAccountCreationFormEditionRequest(dispatch) {
    return (formData) => dispatch({
        type: GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_REQUESTED,
        formData
    });
}

function dispatchGeneralManagerAccountCreationFormEditionSuccess(dispatch) {
    return (formData) => dispatch({
        type: GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_SUCCEEDED,
        formData
    });
}

function dispatchGeneralManagerAccountCreationFormEditionFailure(dispatch) {
    return (formData) => dispatch({
        type: GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_FAILED,
        formData
    });
}


export {
    GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_REQUESTED,
    GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_SUCCEEDED,
    GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_FAILED,
    dispatchGeneralManagerAccountCreationFormEditionRequest,
    dispatchGeneralManagerAccountCreationFormEditionSuccess,
    dispatchGeneralManagerAccountCreationFormEditionFailure
}