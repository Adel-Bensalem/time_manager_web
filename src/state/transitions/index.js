import { combineReducers } from "redux"
import { reduceAccountCreationState } from "./createAccount";
import { reduceAccountCreationFormEditionState } from "./editAccountCreationForm";
import { reduceAuthenticationState } from "./authenticate";
import { reduceAuthenticationFormFormEditionState } from "./editAuthenticationForm";
import { reduceSessionDecodeState } from "./decodeSession";
import { reduceSessionState } from "./session";
import { reduceLocationState } from "./location";
import { reduceAccountDeletionState } from "./deleteAccount";
import { reduceAccountEditionState } from "./editAccount";

const reduceState = combineReducers({
    generalManagerAccountCreation: reduceAccountCreationState,
    generalManagerAccountCreationFormEdition: reduceAccountCreationFormEditionState,
    authentication: reduceAuthenticationState,
    authenticationFormEdition: reduceAuthenticationFormFormEditionState,
    sessionDecode: reduceSessionDecodeState,
    session: reduceSessionState,
    location: reduceLocationState,
    accountDeletion: reduceAccountDeletionState,
    accountEdition: reduceAccountEditionState,
});

export { reduceState };