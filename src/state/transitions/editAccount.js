import { messages } from "../messages";
import { createReducer } from "./tools/createReducer";

const initialState = {
    isRequestPending: false,
    isRequestSuccessful: false,
    isRequestFailure: false,
};

function reduceAccountEditionRequestState() {
    return { ...initialState, isRequestPending: true };
}

function reduceAccountEditionSuccessState() {
    return { ...initialState, isRequestSuccessful: true };
}

function reduceAccountEditionFailureState() {
    return { ...initialState, isRequestFailure: true };
}

const reduceAccountEditionState = createReducer(initialState, {
    [messages.ACCOUNT_EDITION_REQUESTED]: reduceAccountEditionRequestState,
    [messages.ACCOUNT_EDITION_SUCCEEDED]: reduceAccountEditionSuccessState,
    [messages.ACCOUNT_EDITION_FAILED]: reduceAccountEditionFailureState,
});

export { reduceAccountEditionState };