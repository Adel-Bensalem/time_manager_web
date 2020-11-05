
function createDispatcherToPresenterAdapter(messageDispatcher) {
    return {
        presentAccountCreationRequest: messageDispatcher.dispatchAccountCreationRequest,
        presentAccountCreationSuccess: messageDispatcher.dispatchAccountCreationSuccess,
        presentAccountCreationFailure: messageDispatcher.dispatchAccountCreationFailure,
        presentAccountCreationFormEditionRequest: messageDispatcher.dispatchAccountCreationFormEditionRequest,
        presentAccountCreationFormEditionSuccess: messageDispatcher.dispatchAccountCreationFormEditionSuccess,
        presentAccountCreationFormEditionFailure: messageDispatcher.dispatchAccountCreationFormEditionFailure,
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