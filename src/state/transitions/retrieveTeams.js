import { messages } from "../messages";
import { createReducer } from "./tools/createReducer";

const initialState = {
    teams: [],
    request: {
        isRequestPending: false,
        isRequestSuccessful: false,
        isRequestFailure: false,
    }
};

function reduceTeamsRetrievalRequestState(state) {
    return { ...state, request: { ...initialState, isRequestPending: true } };
}

function reduceTeamsRetrievalSuccessState(state, { teams }) {
    return { ...state, request: { ...initialState, isRequestSuccessful: true }, teams };
}

function reduceTeamsRetrievalFailureState(state) {
    return { ...state, request: { ...initialState, isRequestFailure: true } };
}

function addCreatedTeam(state, { team }) {
    return { ...state, teams: [...state.teams, team] };
}

const reduceTeamsRetrievalState = createReducer(initialState, {
    [messages.TEAMS_RETRIEVAL_REQUESTED]: reduceTeamsRetrievalRequestState,
    [messages.TEAMS_RETRIEVAL_SUCCEEDED]: reduceTeamsRetrievalSuccessState,
    [messages.TEAMS_RETRIEVAL_FAILED]: reduceTeamsRetrievalFailureState,
    [messages.TEAM_CREATION_SUCCEEDED]: addCreatedTeam,
});

export { reduceTeamsRetrievalState };