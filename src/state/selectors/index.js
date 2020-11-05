import {
    isAccountCreationRequestPending,
    isAccountCreationRequestSuccess,
    isAccountCreationRequestFailure,
} from "./createAccount";
import {
    isAccountEditionRequestPending,
    isAccountEditionRequestSuccess,
    isAccountEditionRequestFailure,
} from "./editAccount";
import {
    getAccountCreationFormData,
    canSubmitAccountCreationForm
} from "./editAccountCreationForm";
import {
    isAuthenticationRequestPending,
    isAuthenticationRequestSuccess,
    isAuthenticationRequestFailure
} from "./authenticate";
import {
    getAuthenticationFormEditionFormData,
    canSubmitAuthenticationFormEditionForm
} from "./editAuthenticationForm";
import {
    isSessionDecodeRequestPending,
    isSessionDecodeRequestSuccess,
    isSessionDecodeRequestFailure
} from "./decodeSession";
import {
    isAccountDeletionRequestPending,
    isAccountDeletionRequestSuccess,
    isAccountDeletionRequestFailure
} from "./deleteAccount";
import { hasSession, getSession } from "./session";
import { getCurrentLocation } from "./location";

function createSelector(getState) {
    return {
        isAccountCreationRequestPending: isAccountCreationRequestPending(
            () => getState().generalManagerAccountCreation
        ),
        isAccountCreationRequestSuccess: isAccountCreationRequestSuccess(
            () => getState().generalManagerAccountCreation
        ),
        isAccountCreationRequestFailure: isAccountCreationRequestFailure(
            () => getState().generalManagerAccountCreation
        ),
        getAccountCreationFormData: getAccountCreationFormData(
            () => getState().generalManagerAccountCreationFormEdition
        ),
        canSubmitAccountCreationForm: canSubmitAccountCreationForm(
            () => getState().generalManagerAccountCreationFormEdition
        ),
        isAuthenticationRequestPending: isAuthenticationRequestPending(
            () => getState().authentication
        ),
        isAuthenticationRequestSuccess: isAuthenticationRequestSuccess(
            () => getState().authentication
        ),
        isAuthenticationRequestFailure: isAuthenticationRequestFailure(
            () => getState().authentication
        ),
        getAuthenticationFormEditionFormData: getAuthenticationFormEditionFormData(
            () => getState().authenticationFormEdition
        ),
        canSubmitAuthenticationFormEditionForm: canSubmitAuthenticationFormEditionForm(
            () => getState().authenticationFormEdition
        ),
        isSessionDecodeRequestPending: isSessionDecodeRequestPending(
            () => getState().sessionDecode
        ),
        isSessionDecodeRequestSuccess: isSessionDecodeRequestSuccess(
            () => getState().sessionDecode
        ),
        isSessionDecodeRequestFailure: isSessionDecodeRequestFailure(
            () => getState().sessionDecode
        ),
        hasSession: hasSession(() => getState().session),
        getSession: getSession(() => getState().session),
        getCurrentLocation: getCurrentLocation(() => getState().location),
        isAccountDeletionRequestPending: isAccountDeletionRequestPending(
            () => getState().accountDeletion
        ),
        isAccountDeletionRequestSuccess: isAccountDeletionRequestSuccess(
            () => getState().accountDeletion
        ),
        isAccountDeletionRequestFailure: isAccountDeletionRequestFailure(
            () => getState().accountDeletion
        ),
        isAccountEditionRequestPending: isAccountEditionRequestPending(
            () => getSession().accountEdition
        ),
        isAccountEditionRequestSuccess: isAccountEditionRequestSuccess(
            () => getSession().accountEdition
        ),
        isAccountEditionRequestFailure: isAccountEditionRequestFailure(
            () => getSession().accountEdition
        ),
    }
}

export {createSelector};