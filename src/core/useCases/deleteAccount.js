
function deleteAccount(repository, session, presenter) {
    return () => {
        presenter.presentAccountDeletionRequest();

        session.exist() ?
            repository.deleteAccount(session.retrieve())
                .then(presenter.presentAccountDeletionSuccess)
                .catch(presenter.presentAccountDeletionFailure) :
            presenter.presentAccountDeletionFailure()
    }
}

export { deleteAccount };