import {createReducer} from "./tools/createReducer";
import {messages} from "../messages";

const initialState = {
    data: {
        fullName: "",
        email: "",
        role: {
            isGeneralManager: false,
            isManager: false,
            isEmployee: false
        }
    },
    hasSession: false,
};

function saveSession(state, { account }) {
    return {
        data: account,
        hasSession: true
    };
}

const reduceSessionState = createReducer(initialState, {
    [messages.AUTHENTICATION_SUCCEEDED]: saveSession,
    [messages.SESSION_DECODE_SUCCEEDED]: saveSession,
});

export { reduceSessionState };