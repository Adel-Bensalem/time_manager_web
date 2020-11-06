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
import { reduceAccountEditionFormEditionState } from "./editAccountEditionForm";
import { reduceTeamCreationState } from "./createTeam";
import { reduceTeamsRetrievalState } from "./retrieveTeams";
import { reduceEmployeeAdditionState } from "./addEmployee";
import { reduceEmployeeAdditionFormFormEditionState } from "./editEmployeeAdditionForm";
import { reduceArrivalTimeReportState } from "./reportArrivalTime";
import { reduceDepartureTimeReportState } from "./reportDepartureTime";

const reduceState = combineReducers({
    accountCreation: reduceAccountCreationState,
    accountCreationFormEdition: reduceAccountCreationFormEditionState,
    authentication: reduceAuthenticationState,
    authenticationFormEdition: reduceAuthenticationFormFormEditionState,
    sessionDecode: reduceSessionDecodeState,
    session: reduceSessionState,
    location: reduceLocationState,
    accountDeletion: reduceAccountDeletionState,
    accountEdition: reduceAccountEditionState,
    accountEditionFormEdition: reduceAccountEditionFormEditionState,
    teamCreation: reduceTeamCreationState,
    teamsRetrieval: reduceTeamsRetrievalState,
    employeeAddition: reduceEmployeeAdditionState,
    employeeAdditionFormEdition: reduceEmployeeAdditionFormFormEditionState,
    arrivalTimeReport: reduceArrivalTimeReportState,
    departureTimeReport: reduceDepartureTimeReportState,
});

export { reduceState };