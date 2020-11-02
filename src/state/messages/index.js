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
import {
    AUTHENTICATION_REQUESTED,
    AUTHENTICATION_SUCCEEDED,
    AUTHENTICATION_FAILED,
    dispatchAuthenticationRequest,
    dispatchAuthenticationSuccess,
    dispatchAuthenticationFailure
} from "./authenticate";
import {
    AUTHENTICATION_FORM_EDITION_SUCCEEDED,
    AUTHENTICATION_FORM_EDITION_FAILED,
    dispatchAuthenticationFormEditionSuccess,
    dispatchAuthenticationFormEditionFailure,
} from "./editAuthenticationForm";
import {
    SESSION_DECODE_REQUESTED,
    SESSION_DECODE_SUCCEEDED,
    SESSION_DECODE_FAILED,
    dispatchSessionDecodeRequest,
    dispatchSessionDecodeSuccess,
    dispatchSessionDecodeFailure,
} from "./decodeSession";

const messages = {
    GENERAL_MANAGER_ACCOUNT_CREATION_REQUESTED,
    GENERAL_MANAGER_ACCOUNT_CREATION_SUCCEEDED,
    GENERAL_MANAGER_ACCOUNT_CREATION_FAILED,
    GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_SUCCEEDED,
    GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_REQUESTED,
    GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_FAILED,
    AUTHENTICATION_REQUESTED,
    AUTHENTICATION_SUCCEEDED,
    AUTHENTICATION_FAILED,
    AUTHENTICATION_FORM_EDITION_SUCCEEDED,
    AUTHENTICATION_FORM_EDITION_FAILED,
    SESSION_DECODE_REQUESTED,
    SESSION_DECODE_SUCCEEDED,
    SESSION_DECODE_FAILED,
};

function createMessageDispatcher(dispatch) {
    return {
        dispatchGeneralManagerAccountCreationRequest: dispatchGeneralManagerAccountCreationRequest(dispatch),
        dispatchGeneralManagerAccountCreationSuccess: dispatchGeneralManagerAccountCreationSuccess(dispatch),
        dispatchGeneralManagerAccountCreationFailure: dispatchGeneralManagerAccountCreationFailure(dispatch),
        dispatchGeneralManagerAccountCreationFormEditionRequest: dispatchGeneralManagerAccountCreationFormEditionRequest(dispatch),
        dispatchGeneralManagerAccountCreationFormEditionSuccess: dispatchGeneralManagerAccountCreationFormEditionSuccess(dispatch),
        dispatchGeneralManagerAccountCreationFormEditionFailure: dispatchGeneralManagerAccountCreationFormEditionFailure(dispatch),
        dispatchAuthenticationRequest: dispatchAuthenticationRequest(dispatch),
        dispatchAuthenticationSuccess: dispatchAuthenticationSuccess(dispatch),
        dispatchAuthenticationFailure: dispatchAuthenticationFailure(dispatch),
        dispatchAuthenticationFormEditionSuccess: dispatchAuthenticationFormEditionSuccess(dispatch),
        dispatchAuthenticationFormEditionFailure: dispatchAuthenticationFormEditionFailure(dispatch),
        dispatchSessionDecodeRequest: dispatchSessionDecodeRequest(dispatch),
        dispatchSessionDecodeSuccess: dispatchSessionDecodeSuccess(dispatch),
        dispatchSessionDecodeFailure: dispatchSessionDecodeFailure(dispatch),
    }
}

export { messages, createMessageDispatcher };
