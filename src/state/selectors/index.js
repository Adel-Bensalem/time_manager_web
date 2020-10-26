import {
    isGeneralManagerAccountCreationRequestPending,
    isGeneralManagerAccountCreationRequestSuccess,
    isGeneralManagerAccountCreationRequestFailure
} from "./createGeneralManagerAccount";

function createSelector(state) {
    return {
        isGeneralManagerAccountCreationRequestPending: isGeneralManagerAccountCreationRequestPending(state.generalManagerAccountCreation),
        isGeneralManagerAccountCreationRequestSuccess: isGeneralManagerAccountCreationRequestSuccess(state.generalManagerAccountCreation),
        isGeneralManagerAccountCreationRequestFailure: isGeneralManagerAccountCreationRequestFailure(state.generalManagerAccountCreation)
    }
}

export { createSelector };