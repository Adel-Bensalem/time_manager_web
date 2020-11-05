
const ACCOUNT_CREATION_REQUESTED = "ACCOUNT_CREATION_REQUESTED";
const ACCOUNT_CREATION_SUCCEEDED = "ACCOUNT_CREATION_SUCCEEDED";
const ACCOUNT_CREATION_FAILED = "ACCOUNT_CREATION_FAILED";

function dispatchAccountCreationRequest(dispatch) {
    return () => dispatch({ type: ACCOUNT_CREATION_REQUESTED })
}

function dispatchAccountCreationSuccess(dispatch) {
    return () => dispatch({ type: ACCOUNT_CREATION_SUCCEEDED })
}

function dispatchAccountCreationFailure(dispatch) {
    return () => dispatch({ type: ACCOUNT_CREATION_FAILED })
}

export {
    ACCOUNT_CREATION_REQUESTED,
    ACCOUNT_CREATION_SUCCEEDED,
    ACCOUNT_CREATION_FAILED,
    dispatchAccountCreationRequest,
    dispatchAccountCreationSuccess,
    dispatchAccountCreationFailure
}