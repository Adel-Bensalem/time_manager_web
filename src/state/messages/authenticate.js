
const AUTHENTICATION_REQUESTED = "AUTHENTICATION_REQUESTED";
const AUTHENTICATION_SUCCEEDED = "AUTHENTICATION_SUCCEEDED";
const AUTHENTICATION_FAILED = "AUTHENTICATION_FAILED";

function dispatchAuthenticationRequest(dispatch) {
    return () => dispatch({ type: AUTHENTICATION_REQUESTED })
}

function dispatchAuthenticationSuccess(dispatch) {
    return (account) => dispatch({ type: AUTHENTICATION_SUCCEEDED, account })
}

function dispatchAuthenticationFailure(dispatch) {
    return () => dispatch({ type: AUTHENTICATION_FAILED })
}

export {
    AUTHENTICATION_REQUESTED,
    AUTHENTICATION_SUCCEEDED,
    AUTHENTICATION_FAILED,
    dispatchAuthenticationRequest,
    dispatchAuthenticationSuccess,
    dispatchAuthenticationFailure
}