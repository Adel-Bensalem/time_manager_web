import { messages } from "../messages";
import { createReducer } from "./tools/createReducer";

const initialState = {
    formData: { email: "", fullName: "" },
    canSendForm: false,
};

function initAccountEditionForm(state, { account }) {
    return { ...state, formData: account };
}

function reduceEditionRequest(state) {
    return state;
}

function reduceEditionSuccess(state, { formData }) {
    return { formData, canSendForm: true };
}

function reduceEditionFailure(state, { formData }) {
    return { formData, canSendForm: false };
}

const reduceAccountEditionFormEditionState = createReducer(initialState, {
    [messages.ACCOUNT_EDITION_FORM_EDITION_REQUESTED]: reduceEditionRequest,
    [messages.ACCOUNT_EDITION_FORM_EDITION_SUCCEEDED]: reduceEditionSuccess,
    [messages.ACCOUNT_EDITION_FORM_EDITION_FAILED]: reduceEditionFailure,
    [messages.AUTHENTICATION_SUCCEEDED]: initAccountEditionForm,
    [messages.SESSION_DECODE_SUCCEEDED]: initAccountEditionForm,
});

export { reduceAccountEditionFormEditionState };