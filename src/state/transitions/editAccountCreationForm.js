import { messages } from "../messages";
import { createReducer } from "./tools/createReducer";

const initialState = {
    formData: {
        email: "",
        fullName: "",
        password: "",
        passwordConfirmation: "",
    },
    canSendForm: false,
};

function reduceEditionRequest(state) {
    return state;
}

function reduceEditionSuccess(state, { formData }) {
    return { formData, canSendForm: true };
}

function reduceEditionFailure(state, { formData }) {
    return { formData, canSendForm: false };
}

const reduceAccountCreationFormEditionState = createReducer(initialState, {
    [messages.ACCOUNT_CREATION_FORM_EDITION_REQUESTED]: reduceEditionRequest,
    [messages.ACCOUNT_CREATION_FORM_EDITION_SUCCEEDED]: reduceEditionSuccess,
    [messages.ACCOUNT_CREATION_FORM_EDITION_FAILED]: reduceEditionFailure,
});

export { reduceAccountCreationFormEditionState };