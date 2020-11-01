import {
    GENERAL_MANAGER_ACCOUNT_CREATION_REQUESTED,
    GENERAL_MANAGER_ACCOUNT_CREATION_SUCCEEDED,
    GENERAL_MANAGER_ACCOUNT_CREATION_FAILED,
    dispatchGeneralManagerAccountCreationRequest,
    dispatchGeneralManagerAccountCreationSuccess,
    dispatchGeneralManagerAccountCreationFailure
} from "./createGeneralManagerAccount";
import {
    GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_REQUESTED,
    GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_SUCCEEDED,
    GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_FAILED,
    dispatchGeneralManagerAccountCreationFormEditionRequest,
    dispatchGeneralManagerAccountCreationFormEditionSuccess,
    dispatchGeneralManagerAccountCreationFormEditionFailure
} from "./editGeneralManagerAccountCreationForm";

const messages = {
    GENERAL_MANAGER_ACCOUNT_CREATION_REQUESTED,
    GENERAL_MANAGER_ACCOUNT_CREATION_SUCCEEDED,
    GENERAL_MANAGER_ACCOUNT_CREATION_FAILED,
    GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_SUCCEEDED,
    GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_REQUESTED,
    GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_FAILED
};

function createMessageDispatcher(dispatch) {
    return {
        dispatchGeneralManagerAccountCreationRequest: dispatchGeneralManagerAccountCreationRequest(dispatch),
        dispatchGeneralManagerAccountCreationSuccess: dispatchGeneralManagerAccountCreationSuccess(dispatch),
        dispatchGeneralManagerAccountCreationFailure: dispatchGeneralManagerAccountCreationFailure(dispatch),
        dispatchGeneralManagerAccountCreationFormEditionRequest: dispatchGeneralManagerAccountCreationFormEditionRequest(dispatch),
        dispatchGeneralManagerAccountCreationFormEditionSuccess: dispatchGeneralManagerAccountCreationFormEditionSuccess(dispatch),
        dispatchGeneralManagerAccountCreationFormEditionFailure: dispatchGeneralManagerAccountCreationFormEditionFailure(dispatch),
    }
}

export { messages, createMessageDispatcher };
