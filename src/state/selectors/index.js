import {
    isGeneralManagerAccountCreationRequestPending,
    isGeneralManagerAccountCreationRequestSuccess,
    isGeneralManagerAccountCreationRequestFailure,
} from "./createGeneralManagerAccount";
import {
    getGeneralManagerAccountCreationFormData,
    canSubmitGeneralManagerAccountCreationForm
} from "./editGeneralManagerAccountCreationForm";
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
        isGeneralManagerAccountCreationRequestPending: isGeneralManagerAccountCreationRequestPending(
            () => getState().generalManagerAccountCreation
        ),
        isGeneralManagerAccountCreationRequestSuccess: isGeneralManagerAccountCreationRequestSuccess(
            () => getState().generalManagerAccountCreation
        ),
        isGeneralManagerAccountCreationRequestFailure: isGeneralManagerAccountCreationRequestFailure(
            () => getState().generalManagerAccountCreation
        ),
        getGeneralManagerAccountCreationFormData: getGeneralManagerAccountCreationFormData(
            () => getState().generalManagerAccountCreationFormEdition
        ),
        canSubmitGeneralManagerAccountCreationForm: canSubmitGeneralManagerAccountCreationForm(
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
    }
}

export {createSelector};