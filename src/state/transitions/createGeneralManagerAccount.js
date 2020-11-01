import { messages } from "../messages";
import { createReducer } from "./tools/createReducer";

const initialState = {
    isRequestPending: false,
    isRequestSuccessful: false,
    isRequestFailure: false,
};

function reduceGeneralManagerAccountCreationRequestState() {
    return { ...initialState, isRequestPending: true };
}

function reduceGeneralManagerAccountCreationSuccessState() {
    return { ...initialState, isRequestSuccessful: true };
}

function reduceGeneralManagerAccountCreationFailureState() {
    return { ...initialState, isRequestFailure: true };
}

const reduceGeneralManagerAccountCreationState = createReducer(initialState, {
    [messages.GENERAL_MANAGER_ACCOUNT_CREATION_REQUESTED]: reduceGeneralManagerAccountCreationRequestState,
    [messages.GENERAL_MANAGER_ACCOUNT_CREATION_SUCCEEDED]: reduceGeneralManagerAccountCreationSuccessState,
    [messages.GENERAL_MANAGER_ACCOUNT_CREATION_FAILED]: reduceGeneralManagerAccountCreationFailureState,
});

export { reduceGeneralManagerAccountCreationState };