import { messages } from "../messages";
import { createReducer } from "./tools/createReducer";

const initialState = {
    isRequestPending: false,
    isRequestSuccessful: false,
    isRequestFailure: false,
};

function reduceAuthenticationRequestState() {
    return { ...initialState, isRequestPending: true };
}

function reduceAuthenticationSuccessState() {
    return { ...initialState, isRequestSuccessful: true };
}

function reduceAuthenticationFailureState() {
    return { ...initialState, isRequestFailure: true };
}

const reduceAuthenticationState = createReducer(initialState, {
    [messages.AUTHENTICATION_REQUESTED]: reduceAuthenticationRequestState,
    [messages.AUTHENTICATION_SUCCEEDED]: reduceAuthenticationSuccessState,
    [messages.AUTHENTICATION_FAILED]: reduceAuthenticationFailureState,
});

export { reduceAuthenticationState };