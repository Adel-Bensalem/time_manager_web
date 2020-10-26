import {
    isAccountCreationRequestPending,
    isAccountCreationRequestSuccess,
    isAccountCreationRequestFailure
} from "./createAccount";

function createSelector(state) {
    return {
        isAccountCreationRequestPending: isAccountCreationRequestPending(state.createAccount),
        isAccountCreationRequestSuccess: isAccountCreationRequestSuccess(state.createAccount),
        isAccountCreationRequestFailure: isAccountCreationRequestFailure(state.createAccount)
    }
}

export { createSelector };