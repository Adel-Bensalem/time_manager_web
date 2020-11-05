
const TEAMS_RETRIEVAL_REQUESTED = "TEAMS_RETRIEVAL_REQUESTED";
const TEAMS_RETRIEVAL_SUCCEEDED = "TEAMS_RETRIEVAL_SUCCEEDED";
const TEAMS_RETRIEVAL_FAILED = "TEAMS_RETRIEVAL_FAILED";

function dispatchTeamsRetrievalRequest(dispatch) {
    return () => dispatch({ type: TEAMS_RETRIEVAL_REQUESTED })
}

function dispatchTeamsRetrievalSuccess(dispatch) {
    return (teams) => dispatch({ type: TEAMS_RETRIEVAL_SUCCEEDED, teams })
}

function dispatchTeamsRetrievalFailure(dispatch) {
    return () => dispatch({ type: TEAMS_RETRIEVAL_FAILED })
}

export {
    TEAMS_RETRIEVAL_REQUESTED,
    TEAMS_RETRIEVAL_SUCCEEDED,
    TEAMS_RETRIEVAL_FAILED,
    dispatchTeamsRetrievalRequest,
    dispatchTeamsRetrievalSuccess,
    dispatchTeamsRetrievalFailure
}