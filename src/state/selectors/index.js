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
    }
}

export {createSelector};