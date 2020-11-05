
const TEAM_CREATION_REQUESTED = "TEAM_CREATION_REQUESTED";
const TEAM_CREATION_SUCCEEDED = "TEAM_CREATION_SUCCEEDED";
const TEAM_CREATION_FAILED = "TEAM_CREATION_FAILED";

function dispatchTeamCreationRequest(dispatch) {
    return () => dispatch({ type: TEAM_CREATION_REQUESTED })
}

function dispatchTeamCreationSuccess(dispatch) {
    return () => dispatch({ type: TEAM_CREATION_SUCCEEDED })
}

function dispatchTeamCreationFailure(dispatch) {
    return () => dispatch({ type: TEAM_CREATION_FAILED })
}

export {
    TEAM_CREATION_REQUESTED,
    TEAM_CREATION_SUCCEEDED,
    TEAM_CREATION_FAILED,
    dispatchTeamCreationRequest,
    dispatchTeamCreationSuccess,
    dispatchTeamCreationFailure
}