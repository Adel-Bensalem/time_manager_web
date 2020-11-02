import { messages } from "../messages";
import { createReducer } from "./tools/createReducer";

const initialState = {
    isRequestPending: false,
    isRequestSuccessful: false,
    isRequestFailure: false,
};

function reduceSessionDecodeRequestState() {
    return { ...initialState, isRequestPending: true };
}

function reduceSessionDecodeSuccessState() {
    return { ...initialState, isRequestSuccessful: true };
}

function reduceSessionDecodeFailureState() {
    return { ...initialState, isRequestFailure: true };
}

const reduceSessionDecodeState = createReducer(initialState, {
    [messages.SESSION_DECODE_REQUESTED]: reduceSessionDecodeRequestState,
    [messages.SESSION_DECODE_SUCCEEDED]: reduceSessionDecodeSuccessState,
    [messages.SESSION_DECODE_FAILED]: reduceSessionDecodeFailureState,
});

export { reduceSessionDecodeState };