
function createDispatcherToPresenterAdapter(messageDispatcher) {
    return {
        presentGeneralManagerAccountCreationRequest: messageDispatcher.dispatchGeneralManagerAccountCreationRequest,
        presentGeneralManagerAccountCreationSuccess: messageDispatcher.dispatchGeneralManagerAccountCreationSuccess,
        presentGeneralManagerAccountCreationFailure: messageDispatcher.dispatchGeneralManagerAccountCreationFailure,
        presentGeneralManagerAccountCreationFormEditionRequest: messageDispatcher.dispatchGeneralManagerAccountCreationFormEditionRequest,
        presentGeneralManagerAccountCreationFormEditionSuccess: messageDispatcher.dispatchGeneralManagerAccountCreationFormEditionSuccess,
        presentGeneralManagerAccountCreationFormEditionFailure: messageDispatcher.dispatchGeneralManagerAccountCreationFormEditionFailure,
        presentAuthenticationRequest: messageDispatcher.dispatchAuthenticationRequest,
        presentAuthenticationSuccess: messageDispatcher.dispatchAuthenticationSuccess,
        presentAuthenticationFailure: messageDispatcher.dispatchAuthenticationFailure,
        presentAuthenticationFormEditionSuccess: messageDispatcher.dispatchAuthenticationFormEditionSuccess,
        presentAuthenticationFormEditionFailure: messageDispatcher.dispatchAuthenticationFormEditionFailure,
    }
}

export { createDispatcherToPresenterAdapter };