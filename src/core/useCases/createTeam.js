import { isTeamValid } from "../entities/teamValidator";

function createTeam(repository, session, presenter) {
    return (team) => {
        presenter.presentTeamCreationRequest();

        isTeamValid(team) ?
            repository
                .saveTeam(team, session.retrieve())
                .then(presenter.presentTeamCreationSuccess)
                .catch(presenter.presentTeamCreationFailure) :
            presenter.presentTeamCreationFailure()
    }
}

export { createTeam };