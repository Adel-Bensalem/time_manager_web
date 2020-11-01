
function createDispatcherToPresenterAdapter(messageDispatcher) {
    return {
        presentGeneralManagerAccountCreationRequest: messageDispatcher.dispatchGeneralManagerAccountCreationRequest,
        presentGeneralManagerAccountCreationSuccess: messageDispatcher.dispatchGeneralManagerAccountCreationSuccess,
        presentGeneralManagerAccountCreationFailure: messageDispatcher.dispatchGeneralManagerAccountCreationFailure,
        presentGeneralManagerAccountCreationFormEditionRequest: messageDispatcher.dispatchGeneralManagerAccountCreationFormEditionRequest,
        presentGeneralManagerAccountCreationFormEditionSuccess: messageDispatcher.dispatchGeneralManagerAccountCreationFormEditionSuccess,
        presentGeneralManagerAccountCreationFormEditionFailure: messageDispatcher.dispatchGeneralManagerAccountCreationFormEditionFailure,
    }
}

export { createDispatcherToPresenterAdapter };