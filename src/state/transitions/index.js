import { combineReducers } from "redux"
import { reduceGeneralManagerAccountCreationState } from "./createGeneralManagerAccount";
import { reduceGeneralManagerAccountCreationFormEditionState } from "./editGeneralManagerAccountCreationForm";
import { reduceAuthenticationState } from "./authenticate";
import { reduceAuthenticationFormFormEditionState } from "./editAuthenticationForm";
import { reduceSessionDecodeState } from "./decodeSession";
import { reduceSessionState } from "./session";

const reduceState = combineReducers({
    generalManagerAccountCreation: reduceGeneralManagerAccountCreationState,
    generalManagerAccountCreationFormEdition: reduceGeneralManagerAccountCreationFormEditionState,
    authentication: reduceAuthenticationState,
    authenticationFormEdition: reduceAuthenticationFormFormEditionState,
    sessionDecode: reduceSessionDecodeState,
    session: reduceSessionState,
});

export { reduceState };