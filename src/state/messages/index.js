import {
    GENERAL_MANAGER_ACCOUNT_CREATION_REQUESTED,
    GENERAL_MANAGER_ACCOUNT_CREATION_SUCCEEDED,
    GENERAL_MANAGER_ACCOUNT_CREATION_FAILED,
    dispatchGeneralManagerAccountCreationRequest,
    dispatchGeneralManagerAccountCreationSuccess,
    dispatchGeneralManagerAccountCreationFailure
} from "./createGeneralManagerAccount"

const messages = {
    GENERAL_MANAGER_ACCOUNT_CREATION_REQUESTED,
    GENERAL_MANAGER_ACCOUNT_CREATION_SUCCEEDED,
    GENERAL_MANAGER_ACCOUNT_CREATION_FAILED
};

function createMessageDispatcher(dispatch) {
    return {
        dispatchGeneralManagerAccountCreationRequest: dispatchGeneralManagerAccountCreationRequest(dispatch),
        dispatchGeneralManagerAccountCreationSuccess: dispatchGeneralManagerAccountCreationSuccess(dispatch),
        dispatchGeneralManagerAccountCreationFailure: dispatchGeneralManagerAccountCreationFailure(dispatch),
    }
}

export { messages, createMessageDispatcher };
