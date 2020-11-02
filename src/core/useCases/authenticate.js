function authenticate(gatekeeper, session, presenter) {
    return (credentials) => {
        presenter.presentAuthenticationRequest();

        gatekeeper
            .authenticate(credentials)
            .then(session.start)
            .then(presenter.presentAuthenticationSuccess)
            .catch(presenter.presentAuthenticationFailure)
    }
}

export { authenticate };