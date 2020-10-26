const accountCreationInitialState = {
    isRequestPending: false,
    isRequestSuccessful: false,
    isRequestFailure: false,
};

function reduceAccountCreationRequestState() {
    return { ...accountCreationInitialState, isRequestPending: true };
}

function reduceAccountCreationSuccessState() {
    return { ...accountCreationInitialState, isRequestSuccessful: true };
}

function reduceAccountCreationFailureState() {
    return { ...accountCreationInitialState, isRequestFailure: true };
}

export {
    accountCreationInitialState,
    reduceAccountCreationRequestState,
    reduceAccountCreationSuccessState,
    reduceAccountCreationFailureState
};