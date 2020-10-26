import {createStore} from 'vuex';
import {createMessageDispatcher, messages} from "./messages";
import {createSelector} from "./selectors";
import {
    generalManagerAccountCreationInitialState,
    reduceGeneralManagerAccountCreationFailureState,
    reduceGeneralManagerAccountCreationRequestState,
    reduceGeneralManagerAccountCreationSuccessState,
} from "./transitions";

function createState() {
    return createStore({
        state: {
            generalManagerAccountCreation: generalManagerAccountCreationInitialState
        },
        mutations: {
            [messages.GENERAL_MANAGER_ACCOUNT_CREATION_REQUESTED]: reduceGeneralManagerAccountCreationRequestState,
            [messages.GENERAL_MANAGER_ACCOUNT_CREATION_SUCCEEDED]: reduceGeneralManagerAccountCreationSuccessState,
            [messages.GENERAL_MANAGER_ACCOUNT_CREATION_FAILED]: reduceGeneralManagerAccountCreationFailureState,
        }
    });
}

export {createState, createMessageDispatcher, createSelector};
