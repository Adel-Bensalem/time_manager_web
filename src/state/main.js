import {createStore} from 'redux';

import {createMessageDispatcher} from "./messages";
import {createSelector} from "./selectors";
import { reduceState } from "./transitions";

function createState() {
    return createStore(reduceState);
}

export {createState, createMessageDispatcher, createSelector};
