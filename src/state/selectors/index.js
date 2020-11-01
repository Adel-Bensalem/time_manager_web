import {
    isGeneralManagerAccountCreationRequestPending,
    isGeneralManagerAccountCreationRequestSuccess,
    isGeneralManagerAccountCreationRequestFailure,
} from "./createGeneralManagerAccount";
import {
    getGeneralManagerAccountCreationFormData,
    canSubmitGeneralManagerAccountCreationForm
} from "./editGeneralManagerAccountCreationForm"

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
    }
}

export {createSelector};