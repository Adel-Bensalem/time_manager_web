
const GENERAL_MANAGER_ACCOUNT_CREATION_REQUESTED = "GENERAL_MANAGER_ACCOUNT_CREATION_REQUESTED";
const GENERAL_MANAGER_ACCOUNT_CREATION_SUCCEEDED = "GENERAL_MANAGER_ACCOUNT_CREATION_SUCCEEDED";
const GENERAL_MANAGER_ACCOUNT_CREATION_FAILED = "GENERAL_MANAGER_ACCOUNT_CREATION_FAILED";

function dispatchGeneralManagerAccountCreationRequest(dispatch) {
    return () => dispatch({ type: GENERAL_MANAGER_ACCOUNT_CREATION_REQUESTED })
}

function dispatchGeneralManagerAccountCreationSuccess(dispatch) {
    return () => dispatch({ type: GENERAL_MANAGER_ACCOUNT_CREATION_SUCCEEDED })
}

function dispatchGeneralManagerAccountCreationFailure(dispatch) {
    return () => dispatch({ type: GENERAL_MANAGER_ACCOUNT_CREATION_FAILED })
}

export {
    GENERAL_MANAGER_ACCOUNT_CREATION_REQUESTED,
    GENERAL_MANAGER_ACCOUNT_CREATION_SUCCEEDED,
    GENERAL_MANAGER_ACCOUNT_CREATION_FAILED,
    dispatchGeneralManagerAccountCreationRequest,
    dispatchGeneralManagerAccountCreationSuccess,
    dispatchGeneralManagerAccountCreationFailure
}