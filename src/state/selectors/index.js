import {
    isAccountCreationRequestPending,
    isAccountCreationRequestSuccess,
    isAccountCreationRequestFailure,
} from "./createAccount";
import {
    isAccountEditionRequestPending,
    isAccountEditionRequestSuccess,
    isAccountEditionRequestFailure,
} from "./editAccount";
import {
    getAccountCreationFormData,
    canSubmitAccountCreationForm
} from "./editAccountCreationForm";
import {
    isAuthenticationRequestPending,
    isAuthenticationRequestSuccess,
    isAuthenticationRequestFailure
} from "./authenticate";
import {
    getAuthenticationFormEditionFormData,
    canSubmitAuthenticationFormEditionForm
} from "./editAuthenticationForm";
import {
    isSessionDecodeRequestPending,
    isSessionDecodeRequestSuccess,
    isSessionDecodeRequestFailure
} from "./decodeSession";
import {
    isAccountDeletionRequestPending,
    isAccountDeletionRequestSuccess,
    isAccountDeletionRequestFailure
} from "./deleteAccount";
import {
    canSubmitAccountEditionForm,
    getAccountEditionFormData
} from "./editAccountEditionForm";
import {
    isTeamCreationRequestPending,
    isTeamCreationRequestSuccess,
    isTeamCreationRequestFailure
} from "./createTeam";
import {
    isTeamsRetrievalRequestPending,
    isTeamsRetrievalRequestSuccess,
    isTeamsRetrievalRequestFailure,
    getTeams
} from "./retrieveTeams";
import {
    isEmployeeAdditionRequestPending,
    isEmployeeAdditionRequestSuccess,
    isEmployeeAdditionRequestFailure
} from "./addEmployee";
import {hasSession, getSession} from "./session";
import {getCurrentLocation} from "./location";

function createSelector(getState) {
    return {
        isAccountCreationRequestPending: isAccountCreationRequestPending(
            () => getState().accountCreation
        ),
        isAccountCreationRequestSuccess: isAccountCreationRequestSuccess(
            () => getState().accountCreation
        ),
        isAccountCreationRequestFailure: isAccountCreationRequestFailure(
            () => getState().accountCreation
        ),
        getAccountCreationFormData: getAccountCreationFormData(
            () => getState().accountCreationFormEdition
        ),
        canSubmitAccountCreationForm: canSubmitAccountCreationForm(
            () => getState().accountCreationFormEdition
        ),
        isAuthenticationRequestPending: isAuthenticationRequestPending(
            () => getState().authentication
        ),
        isAuthenticationRequestSuccess: isAuthenticationRequestSuccess(
            () => getState().authentication
        ),
        isAuthenticationRequestFailure: isAuthenticationRequestFailure(
            () => getState().authentication
        ),
        getAuthenticationFormEditionFormData: getAuthenticationFormEditionFormData(
            () => getState().authenticationFormEdition
        ),
        canSubmitAuthenticationFormEditionForm: canSubmitAuthenticationFormEditionForm(
            () => getState().authenticationFormEdition
        ),
        isSessionDecodeRequestPending: isSessionDecodeRequestPending(
            () => getState().sessionDecode
        ),
        isSessionDecodeRequestSuccess: isSessionDecodeRequestSuccess(
            () => getState().sessionDecode
        ),
        isSessionDecodeRequestFailure: isSessionDecodeRequestFailure(
            () => getState().sessionDecode
        ),
        hasSession: hasSession(() => getState().session),
        getSession: getSession(() => getState().session),
        getCurrentLocation: getCurrentLocation(() => getState().location),
        isAccountDeletionRequestPending: isAccountDeletionRequestPending(
            () => getState().accountDeletion
        ),
        isAccountDeletionRequestSuccess: isAccountDeletionRequestSuccess(
            () => getState().accountDeletion
        ),
        isAccountDeletionRequestFailure: isAccountDeletionRequestFailure(
            () => getState().accountDeletion
        ),
        isAccountEditionRequestPending: isAccountEditionRequestPending(
            () => getState().accountEdition
        ),
        isAccountEditionRequestSuccess: isAccountEditionRequestSuccess(
            () => getState().accountEdition
        ),
        isAccountEditionRequestFailure: isAccountEditionRequestFailure(
            () => getState().accountEdition
        ),
        canSubmitAccountEditionForm: canSubmitAccountEditionForm(
            () => getState().accountEditionFormEdition
        ),
        getAccountEditionFormData: getAccountEditionFormData(
            () => getState().accountEditionFormEdition
        ),
        isTeamCreationRequestPending: isTeamCreationRequestPending(
            () => getState().teamCreation
        ),
        isTeamCreationRequestSuccess: isTeamCreationRequestSuccess(
            () => getState().teamCreation
        ),
        isTeamCreationRequestFailure: isTeamCreationRequestFailure(
            () => getState().teamCreation
        ),
        isTeamsRetrievalRequestPending: isTeamsRetrievalRequestPending(
            () => getState().teamsRetrieval
        ),
        isTeamsRetrievalRequestSuccess: isTeamsRetrievalRequestSuccess(
            () => getState().teamsRetrieval
        ),
        isTeamsRetrievalRequestFailure: isTeamsRetrievalRequestFailure(
            () => getState().teamsRetrieval
        ),
        getTeams: getTeams(() => getState().teamsRetrieval),
        isEmployeeAdditionRequestPending: isEmployeeAdditionRequestPending(
            () => getState().employeeAddition
        ),
        isEmployeeAdditionRequestSuccess: isEmployeeAdditionRequestSuccess(
            () => getState().employeeAddition
        ),
        isEmployeeAdditionRequestFailure: isEmployeeAdditionRequestFailure(
            () => getState().employeeAddition
        ),
    }
}

export {createSelector};