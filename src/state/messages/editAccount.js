
const ACCOUNT_EDITION_REQUESTED = "ACCOUNT_EDITION_REQUESTED";
const ACCOUNT_EDITION_SUCCEEDED = "ACCOUNT_EDITION_SUCCEEDED";
const ACCOUNT_EDITION_FAILED = "ACCOUNT_EDITION_FAILED";

function dispatchAccountEditionRequest(dispatch) {
    return () => dispatch({ type: ACCOUNT_EDITION_REQUESTED })
}

function dispatchAccountEditionSuccess(dispatch) {
    return () => dispatch({ type: ACCOUNT_EDITION_SUCCEEDED })
}

function dispatchAccountEditionFailure(dispatch) {
    return () => dispatch({ type: ACCOUNT_EDITION_FAILED })
}

export {
    ACCOUNT_EDITION_REQUESTED,
    ACCOUNT_EDITION_SUCCEEDED,
    ACCOUNT_EDITION_FAILED,
    dispatchAccountEditionRequest,
    dispatchAccountEditionSuccess,
    dispatchAccountEditionFailure
}