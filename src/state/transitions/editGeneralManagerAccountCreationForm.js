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

const reduceGeneralManagerAccountCreationFormEditionState = createReducer(initialState, {
    [messages.GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_REQUESTED]: reduceEditionRequest,
    [messages.GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_SUCCEEDED]: reduceEditionSuccess,
    [messages.GENERAL_MANAGER_ACCOUNT_CREATION_FORM_EDITION_FAILED]: reduceEditionFailure,
});

export { reduceGeneralManagerAccountCreationFormEditionState };