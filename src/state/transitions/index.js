import { combineReducers } from "redux"
import { reduceGeneralManagerAccountCreationState } from "./createGeneralManagerAccount";
import { reduceGeneralManagerAccountCreationFormEditionState } from "./editGeneralManagerAccountCreationForm";
import { reduceAuthenticationState } from "./authenticate";
import { reduceAuthenticationFormFormEditionState } from "./editAuthenticationForm";

const reduceState = combineReducers({
    generalManagerAccountCreation: reduceGeneralManagerAccountCreationState,
    generalManagerAccountCreationFormEdition: reduceGeneralManagerAccountCreationFormEditionState,
    authentication: reduceAuthenticationState,
    authenticationFormEdition: reduceAuthenticationFormFormEditionState,
});

export { reduceState };