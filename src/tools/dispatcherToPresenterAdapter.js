
function createDispatcherToPresenterAdapter(messageDispatcher) {
    return Object
        .entries(messageDispatcher)
        .reduce((presenter, [name, method]) => ({
            ...presenter,
            [name.replace("dispatch", "present")]: method
        }), {});
}

export { createDispatcherToPresenterAdapter };