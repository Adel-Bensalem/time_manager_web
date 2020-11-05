
function deleteAccount(repository, session, presenter) {
    return () => {
        presenter.presentAccountDeletionRequest();

        console.log(session.retrieve());

        session.exist() ?
            repository.deleteAccount(session.retrieve())
                .then(presenter.presentAccountDeletionSuccess)
                .catch(presenter.presentAccountDeletionFailure) :
            presenter.presentAccountDeletionFailure()
    }
}

export { deleteAccount };