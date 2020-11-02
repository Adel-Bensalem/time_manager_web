import { combineReducers } from "redux"
import { reduceGeneralManagerAccountCreationState } from "./createGeneralManagerAccount";
import { reduceGeneralManagerAccountCreationFormEditionState } from "./editGeneralManagerAccountCreationForm";
import { reduceAuthenticationState } from "./authenticate";

const reduceState = combineReducers({
    generalManagerAccountCreation: reduceGeneralManagerAccountCreationState,
    generalManagerAccountCreationFormEdition: reduceGeneralManagerAccountCreationFormEditionState,
    authentication: reduceAuthenticationState
});

export { reduceState };