
function retrieveTeams(repository, session, presenter) {
    return () => {
        presenter.presentTeamsRetrievalRequest();

        repository
            .getTeams(session.retrieve())
            .then(presenter.presentTeamsRetrievalSuccess)
            .catch(presenter.presentTeamsRetrievalFailure)
    }
}

export { retrieveTeams };