import { messages } from "../messages";
import { createReducer } from "./tools/createReducer";

const initialState = {
    isRequestPending: false,
    isRequestSuccessful: false,
    isRequestFailure: false,
};

function reduceEmployeeAdditionRequestState() {
    return { ...initialState, isRequestPending: true };
}

function reduceEmployeeAdditionSuccessState() {
    return { ...initialState, isRequestSuccessful: true };
}

function reduceEmployeeAdditionFailureState() {
    return { ...initialState, isRequestFailure: true };
}

const reduceEmployeeAdditionState = createReducer(initialState, {
    [messages.EMPLOYEE_ADDITION_REQUESTED]: reduceEmployeeAdditionRequestState,
    [messages.EMPLOYEE_ADDITION_SUCCEEDED]: reduceEmployeeAdditionSuccessState,
    [messages.EMPLOYEE_ADDITION_FAILED]: reduceEmployeeAdditionFailureState,
});

export { reduceEmployeeAdditionState };