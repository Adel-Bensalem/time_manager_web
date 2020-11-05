import {
    ACCOUNT_CREATION_REQUESTED,
    ACCOUNT_CREATION_SUCCEEDED,
    ACCOUNT_CREATION_FAILED,
    dispatchAccountCreationRequest,
    dispatchAccountCreationSuccess,
    dispatchAccountCreationFailure
} from "./createAccount";
import {
    ACCOUNT_CREATION_FORM_EDITION_REQUESTED,
    ACCOUNT_CREATION_FORM_EDITION_SUCCEEDED,
    ACCOUNT_CREATION_FORM_EDITION_FAILED,
    dispatchAccountCreationFormEditionRequest,
    dispatchAccountCreationFormEditionSuccess,
    dispatchAccountCreationFormEditionFailure
} from "./editAccountCreationForm";
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
import {
    ACCOUNT_DELETION_REQUESTED,
    ACCOUNT_DELETION_SUCCEEDED,
    ACCOUNT_DELETION_FAILED,
    dispatchAccountDeletionRequest,
    dispatchAccountDeletionSuccess,
    dispatchAccountDeletionFailure,
} from "./deleteAccount";
import {
    LOCATION_CHANGED,
    dispatchLocationChange,
} from "./location";

const messages = {
    ACCOUNT_CREATION_REQUESTED,
    ACCOUNT_CREATION_SUCCEEDED,
    ACCOUNT_CREATION_FAILED,
    ACCOUNT_CREATION_FORM_EDITION_SUCCEEDED,
    ACCOUNT_CREATION_FORM_EDITION_REQUESTED,
    ACCOUNT_CREATION_FORM_EDITION_FAILED,
    AUTHENTICATION_REQUESTED,
    AUTHENTICATION_SUCCEEDED,
    AUTHENTICATION_FAILED,
    AUTHENTICATION_FORM_EDITION_SUCCEEDED,
    AUTHENTICATION_FORM_EDITION_FAILED,
    SESSION_DECODE_REQUESTED,
    SESSION_DECODE_SUCCEEDED,
    SESSION_DECODE_FAILED,
    LOCATION_CHANGED,
    ACCOUNT_DELETION_REQUESTED,
    ACCOUNT_DELETION_SUCCEEDED,
    ACCOUNT_DELETION_FAILED,
};

function createMessageDispatcher(dispatch) {
    return {
        dispatchAccountCreationRequest: dispatchAccountCreationRequest(dispatch),
        dispatchAccountCreationSuccess: dispatchAccountCreationSuccess(dispatch),
        dispatchAccountCreationFailure: dispatchAccountCreationFailure(dispatch),
        dispatchAccountCreationFormEditionRequest: dispatchAccountCreationFormEditionRequest(dispatch),
        dispatchAccountCreationFormEditionSuccess: dispatchAccountCreationFormEditionSuccess(dispatch),
        dispatchAccountCreationFormEditionFailure: dispatchAccountCreationFormEditionFailure(dispatch),
        dispatchAuthenticationRequest: dispatchAuthenticationRequest(dispatch),
        dispatchAuthenticationSuccess: dispatchAuthenticationSuccess(dispatch),
        dispatchAuthenticationFailure: dispatchAuthenticationFailure(dispatch),
        dispatchAuthenticationFormEditionSuccess: dispatchAuthenticationFormEditionSuccess(dispatch),
        dispatchAuthenticationFormEditionFailure: dispatchAuthenticationFormEditionFailure(dispatch),
        dispatchSessionDecodeRequest: dispatchSessionDecodeRequest(dispatch),
        dispatchSessionDecodeSuccess: dispatchSessionDecodeSuccess(dispatch),
        dispatchSessionDecodeFailure: dispatchSessionDecodeFailure(dispatch),
        dispatchLocationChange: dispatchLocationChange(dispatch),
        dispatchAccountDeletionRequest: dispatchAccountDeletionRequest(dispatch),
        dispatchAccountDeletionSuccess: dispatchAccountDeletionSuccess(dispatch),
        dispatchAccountDeletionFailure: dispatchAccountDeletionFailure(dispatch),
    }
}

export {messages, createMessageDispatcher};
