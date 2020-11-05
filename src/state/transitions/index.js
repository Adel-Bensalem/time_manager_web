import { combineReducers } from "redux"
import { reduceGeneralManagerAccountCreationState } from "./createGeneralManagerAccount";
import { reduceGeneralManagerAccountCreationFormEditionState } from "./editGeneralManagerAccountCreationForm";
import { reduceAuthenticationState } from "./authenticate";
import { reduceAuthenticationFormFormEditionState } from "./editAuthenticationForm";
import { reduceSessionDecodeState } from "./decodeSession";
import { reduceSessionState } from "./session";
import { reduceLocationState } from "./location";
import { reduceAccountDeletionState } from "./deleteAccount";

const reduceState = combineReducers({
    generalManagerAccountCreation: reduceGeneralManagerAccountCreationState,
    generalManagerAccountCreationFormEdition: reduceGeneralManagerAccountCreationFormEditionState,
    authentication: reduceAuthenticationState,
    authenticationFormEdition: reduceAuthenticationFormFormEditionState,
    sessionDecode: reduceSessionDecodeState,
    session: reduceSessionState,
    location: reduceLocationState,
    accountDeletion: reduceAccountDeletionState
});

export { reduceState };