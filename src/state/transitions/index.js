import { combineReducers } from "redux"
import { reduceGeneralManagerAccountCreationState } from "./createGeneralManagerAccount";
import { reduceGeneralManagerAccountCreationFormEditionState } from "./editGeneralManagerAccountCreationForm";

const reduceState = combineReducers({
    generalManagerAccountCreation: reduceGeneralManagerAccountCreationState,
    generalManagerAccountCreationFormEdition: reduceGeneralManagerAccountCreationFormEditionState
});

export { reduceState };