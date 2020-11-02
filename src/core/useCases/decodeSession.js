
function decodeSession(session, tokenDecoder, presenter) {
    return () => {
        presenter.presentSessionDecodeRequest();

        session.exist() ?
            tokenDecoder
                .decode(session.retrieve())
                .then(presenter.presentSessionDecodeSuccess) :
            presenter.presentSessionDecodeFailure();
    };
}

export { decodeSession };