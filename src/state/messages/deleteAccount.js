

const ACCOUNT_DELETION_REQUESTED = "ACCOUNT_DELETION_REQUESTED";
const ACCOUNT_DELETION_SUCCEEDED = "ACCOUNT_DELETION_SUCCEEDED";
const ACCOUNT_DELETION_FAILED = "ACCOUNT_DELETION_FAILED";

function dispatchAccountDeletionRequest(dispatch) {
    return () => dispatch({ type: ACCOUNT_DELETION_REQUESTED })
}

function dispatchAccountDeletionSuccess(dispatch) {
    return (account) => dispatch({ type: ACCOUNT_DELETION_SUCCEEDED, account })
}

function dispatchAccountDeletionFailure(dispatch) {
    return () => dispatch({ type: ACCOUNT_DELETION_FAILED })
}

export {
    ACCOUNT_DELETION_REQUESTED,
    ACCOUNT_DELETION_SUCCEEDED,
    ACCOUNT_DELETION_FAILED,
    dispatchAccountDeletionRequest,
    dispatchAccountDeletionSuccess,
    dispatchAccountDeletionFailure
}