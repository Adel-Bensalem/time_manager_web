import {createStore} from 'vuex';
import {createMessageDispatcher, messages} from "./messages";
import {createSelector} from "./selectors";
import {
    accountCreationInitialState,
    reduceAccountCreationFailureState,
    reduceAccountCreationRequestState,
    reduceAccountCreationSuccessState,
} from "./transitions";

function createState() {
    return createStore({
        state: {
            createAccount: accountCreationInitialState
        },
        mutations: {
            [messages.ACCOUNT_CREATION_REQUESTED]: reduceAccountCreationRequestState,
            [messages.ACCOUNT_CREATION_SUCCEEDED]: reduceAccountCreationSuccessState,
            [messages.ACCOUNT_CREATION_FAILED]: reduceAccountCreationFailureState,
        }
    });
}

export {createState, createMessageDispatcher, createSelector};
