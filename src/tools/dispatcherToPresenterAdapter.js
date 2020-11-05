
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
        presentSessionDecodeRequest: messageDispatcher.dispatchSessionDecodeRequest,
        presentSessionDecodeSuccess: messageDispatcher.dispatchSessionDecodeSuccess,
        presentSessionDecodeFailure: messageDispatcher.dispatchSessionDecodeFailure,
        presentAccountDeletionRequest: messageDispatcher.dispatchAccountDeletionRequest,
        presentAccountDeletionSuccess: messageDispatcher.dispatchAccountDeletionSuccess,
        presentAccountDeletionFailure: messageDispatcher.dispatchAccountDeletionFailure,
    }
}

export { createDispatcherToPresenterAdapter };