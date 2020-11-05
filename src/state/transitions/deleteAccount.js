import { messages } from "../messages";
import { createReducer } from "./tools/createReducer";

const initialState = {
    isRequestPending: false,
    isRequestSuccessful: false,
    isRequestFailure: false,
};

function reduceAccountDeletionRequestState() {
    return { ...initialState, isRequestPending: true };
}

function reduceAccountDeletionSuccessState() {
    return { ...initialState, isRequestSuccessful: true };
}

function reduceAccountDeletionFailureState() {
    return { ...initialState, isRequestFailure: true };
}

const reduceAccountDeletionState = createReducer(initialState, {
    [messages.ACCOUNT_DELETION_REQUESTED]: reduceAccountDeletionRequestState,
    [messages.ACCOUNT_DELETION_SUCCEEDED]: reduceAccountDeletionSuccessState,
    [messages.ACCOUNT_DELETION_FAILED]: reduceAccountDeletionFailureState,
});

export { reduceAccountDeletionState };