import { messages } from "../messages";
import { createReducer } from "./tools/createReducer";

const initialState = {
    isRequestPending: false,
    isRequestSuccessful: false,
    isRequestFailure: false,
};

function reduceTeamCreationRequestState() {
    return { ...initialState, isRequestPending: true };
}

function reduceTeamCreationSuccessState() {
    return { ...initialState, isRequestSuccessful: true };
}

function reduceTeamCreationFailureState() {
    return { ...initialState, isRequestFailure: true };
}

const reduceTeamCreationState = createReducer(initialState, {
    [messages.TEAM_CREATION_REQUESTED]: reduceTeamCreationRequestState,
    [messages.TEAM_CREATION_SUCCEEDED]: reduceTeamCreationSuccessState,
    [messages.TEAM_CREATION_FAILED]: reduceTeamCreationFailureState,
});

export { reduceTeamCreationState };