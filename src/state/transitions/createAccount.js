import { messages } from "../messages";
import { createReducer } from "./tools/createReducer";

const initialState = {
    isRequestPending: false,
    isRequestSuccessful: false,
    isRequestFailure: false,
};

function reduceAccountCreationRequestState() {
    return { ...initialState, isRequestPending: true };
}

function reduceAccountCreationSuccessState() {
    return { ...initialState, isRequestSuccessful: true };
}

function reduceAccountCreationFailureState() {
    return { ...initialState, isRequestFailure: true };
}

const reduceAccountCreationState = createReducer(initialState, {
    [messages.ACCOUNT_CREATION_REQUESTED]: reduceAccountCreationRequestState,
    [messages.ACCOUNT_CREATION_SUCCEEDED]: reduceAccountCreationSuccessState,
    [messages.ACCOUNT_CREATION_FAILED]: reduceAccountCreationFailureState,
});

export { reduceAccountCreationState };