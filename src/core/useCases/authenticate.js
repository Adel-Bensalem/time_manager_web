function authenticate(
    gatekeeper,
    session,
    tokenDecoder,
    presenter
) {
    return (credentials) => {
        presenter.presentAuthenticationRequest();

        gatekeeper
            .authenticate(credentials)
            .then(session.start)
            .then(tokenDecoder.decode)
            .then(presenter.presentAuthenticationSuccess)
            .catch(presenter.presentAuthenticationFailure)
    }
}

export { authenticate };