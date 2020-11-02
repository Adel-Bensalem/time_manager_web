import { messages } from "../messages";
import { createReducer } from "./tools/createReducer";

const initialState = {
    formData: { email: "", password: "" },
    canSendForm: false,
};

function reduceEditionSuccess(state, { formData }) {
    return { formData, canSendForm: true };
}

function reduceEditionFailure(state, { formData }) {
    return { formData, canSendForm: false };
}

const reduceAuthenticationFormFormEditionState = createReducer(initialState, {
    [messages.AUTHENTICATION_FORM_EDITION_SUCCEEDED]: reduceEditionSuccess,
    [messages.AUTHENTICATION_FORM_EDITION_FAILED]: reduceEditionFailure,
});

export { reduceAuthenticationFormFormEditionState };