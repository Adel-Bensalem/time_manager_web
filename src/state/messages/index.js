import {
    ACCOUNT_CREATION_REQUESTED,
    ACCOUNT_CREATION_SUCCEEDED,
    ACCOUNT_CREATION_FAILED,
    dispatchAccountCreationRequest,
    dispatchAccountCreationSuccess,
    dispatchAccountCreationFailure
} from "./createAccount"

const messages = {
    ACCOUNT_CREATION_REQUESTED,
    ACCOUNT_CREATION_SUCCEEDED,
    ACCOUNT_CREATION_FAILED
};

function createMessageDispatcher(dispatch) {
    return {
        dispatchAccountCreationRequest: dispatchAccountCreationRequest(dispatch),
        dispatchAccountCreationSuccess: dispatchAccountCreationSuccess(dispatch),
        dispatchAccountCreationFailure: dispatchAccountCreationFailure(dispatch),
    }
}

export { messages, createMessageDispatcher };
