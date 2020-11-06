import { messages } from "../messages";
import { createReducer } from "./tools/createReducer";

const initialState = {
    formData: {
        email: "",
        fullName: "",
        password: "",
        passwordConfirmation: "",
        isManager: false
    },
    canSendForm: false,
};

function reduceEditionSuccess(state, { formData }) {
    return { formData, canSendForm: true };
}

function reduceEditionFailure(state, { formData }) {
    return { formData, canSendForm: false };
}

const reduceEmployeeAdditionFormFormEditionState = createReducer(initialState, {
    [messages.EMPLOYEE_ADDITION_FORM_EDITION_SUCCEEDED]: reduceEditionSuccess,
    [messages.EMPLOYEE_ADDITION_FORM_EDITION_FAILED]: reduceEditionFailure,
});

export { reduceEmployeeAdditionFormFormEditionState };