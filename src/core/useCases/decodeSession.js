
function decodeSession(session, tokenDecoder, presenter) {
    return () => session.exist() ?
        tokenDecoder
            .decode(session.retrieve())
            .then(presenter.presentSessionDecodeSuccess) :
        presenter.presentSessionDecodeFailure();
}

export { decodeSession };