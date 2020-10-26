const generalManagerAccountCreationInitialState = {
    isRequestPending: false,
    isRequestSuccessful: false,
    isRequestFailure: false,
};

function reduceGeneralManagerAccountCreationRequestState() {
    return { ...generalManagerAccountCreationInitialState, isRequestPending: true };
}

function reduceGeneralManagerAccountCreationSuccessState() {
    return { ...generalManagerAccountCreationInitialState, isRequestSuccessful: true };
}

function reduceGeneralManagerAccountCreationFailureState() {
    return { ...generalManagerAccountCreationInitialState, isRequestFailure: true };
}

export {
    generalManagerAccountCreationInitialState,
    reduceGeneralManagerAccountCreationRequestState,
    reduceGeneralManagerAccountCreationSuccessState,
    reduceGeneralManagerAccountCreationFailureState
};