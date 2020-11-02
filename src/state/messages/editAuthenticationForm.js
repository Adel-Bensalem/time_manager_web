
const AUTHENTICATION_FORM_EDITION_SUCCEEDED = "AUTHENTICATION_FORM_EDITION_SUCCEEDED";
const AUTHENTICATION_FORM_EDITION_FAILED = "AUTHENTICATION_FORM_EDITION_FAILED";

function dispatchAuthenticationFormEditionSuccess(dispatch) {
    return (formData) => dispatch({
        type: AUTHENTICATION_FORM_EDITION_SUCCEEDED,
        formData
    });
}

function dispatchAuthenticationFormEditionFailure(dispatch) {
    return (formData) => dispatch({
        type: AUTHENTICATION_FORM_EDITION_FAILED,
        formData
    });
}


export {
    AUTHENTICATION_FORM_EDITION_SUCCEEDED,
    AUTHENTICATION_FORM_EDITION_FAILED,
    dispatchAuthenticationFormEditionSuccess,
    dispatchAuthenticationFormEditionFailure
}