import {
    ACCOUNT_CREATION_REQUESTED,
    ACCOUNT_CREATION_SUCCEEDED,
    ACCOUNT_CREATION_FAILED,
    dispatchAccountCreationRequest,
    dispatchAccountCreationSuccess,
    dispatchAccountCreationFailure
} from "./createAccount";
import {
    ACCOUNT_EDITION_REQUESTED,
    ACCOUNT_EDITION_SUCCEEDED,
    ACCOUNT_EDITION_FAILED,
    dispatchAccountEditionRequest,
    dispatchAccountEditionSuccess,
    dispatchAccountEditionFailure
} from "./editAccount";
import {
    ACCOUNT_CREATION_FORM_EDITION_REQUESTED,
    ACCOUNT_CREATION_FORM_EDITION_SUCCEEDED,
    ACCOUNT_CREATION_FORM_EDITION_FAILED,
    dispatchAccountCreationFormEditionRequest,
    dispatchAccountCreationFormEditionSuccess,
    dispatchAccountCreationFormEditionFailure
} from "./editAccountCreationForm";
import {
    AUTHENTICATION_REQUESTED,
    AUTHENTICATION_SUCCEEDED,
    AUTHENTICATION_FAILED,
    dispatchAuthenticationRequest,
    dispatchAuthenticationSuccess,
    dispatchAuthenticationFailure
} from "./authenticate";
import {
    AUTHENTICATION_FORM_EDITION_SUCCEEDED,
    AUTHENTICATION_FORM_EDITION_FAILED,
    dispatchAuthenticationFormEditionSuccess,
    dispatchAuthenticationFormEditionFailure,
} from "./editAuthenticationForm";
import {
    SESSION_DECODE_REQUESTED,
    SESSION_DECODE_SUCCEEDED,
    SESSION_DECODE_FAILED,
    dispatchSessionDecodeRequest,
    dispatchSessionDecodeSuccess,
    dispatchSessionDecodeFailure,
} from "./decodeSession";
import {
    ACCOUNT_DELETION_REQUESTED,
    ACCOUNT_DELETION_SUCCEEDED,
    ACCOUNT_DELETION_FAILED,
    dispatchAccountDeletionRequest,
    dispatchAccountDeletionSuccess,
    dispatchAccountDeletionFailure,
} from "./deleteAccount";
import {
    LOCATION_CHANGED,
    dispatchLocationChange,
} from "./location";
import {
    ACCOUNT_EDITION_FORM_EDITION_REQUESTED,
    ACCOUNT_EDITION_FORM_EDITION_SUCCEEDED,
    ACCOUNT_EDITION_FORM_EDITION_FAILED,
    dispatchAccountEditionFormEditionRequest,
    dispatchAccountEditionFormEditionSuccess,
    dispatchAccountEditionFormEditionFailure
} from "./editAccountEditionForm";
import {
    TEAM_CREATION_REQUESTED,
    TEAM_CREATION_SUCCEEDED,
    TEAM_CREATION_FAILED,
    dispatchTeamCreationRequest,
    dispatchTeamCreationSuccess,
    dispatchTeamCreationFailure
} from "./createTeam";
import {
    TEAMS_RETRIEVAL_REQUESTED,
    TEAMS_RETRIEVAL_SUCCEEDED,
    TEAMS_RETRIEVAL_FAILED,
    dispatchTeamsRetrievalRequest,
    dispatchTeamsRetrievalSuccess,
    dispatchTeamsRetrievalFailure
} from "./retrieveTeams";
import {
    EMPLOYEE_ADDITION_REQUESTED,
    EMPLOYEE_ADDITION_SUCCEEDED,
    EMPLOYEE_ADDITION_FAILED,
    dispatchEmployeeAdditionRequest,
    dispatchEmployeeAdditionSuccess,
    dispatchEmployeeAdditionFailure
} from "./addEmployee";
import {
    EMPLOYEE_ADDITION_FORM_EDITION_SUCCEEDED,
    EMPLOYEE_ADDITION_FORM_EDITION_FAILED,
    dispatchEmployeeAdditionFormEditionSuccess,
    dispatchEmployeeAdditionFormEditionFailure
} from "./editEmployeeAdditionForm";
import {
    ARRIVAL_TIME_REPORT_REQUESTED,
    ARRIVAL_TIME_REPORT_SUCCEEDED,
    ARRIVAL_TIME_REPORT_FAILED,
    dispatchArrivalTimeReportRequest,
    dispatchArrivalTimeReportSuccess,
    dispatchArrivalTimeReportFailure
} from "./reportArrivalTime";
import {
    DEPARTURE_TIME_REPORT_REQUESTED,
    DEPARTURE_TIME_REPORT_SUCCEEDED,
    DEPARTURE_TIME_REPORT_FAILED,
    dispatchDepartureTimeReportRequest,
    dispatchDepartureTimeReportSuccess,
    dispatchDepartureTimeReportFailure
} from "./reportDepartureTime";

const messages = {
    ACCOUNT_CREATION_REQUESTED,
    ACCOUNT_CREATION_SUCCEEDED,
    ACCOUNT_CREATION_FAILED,
    ACCOUNT_EDITION_REQUESTED,
    ACCOUNT_EDITION_SUCCEEDED,
    ACCOUNT_EDITION_FAILED,
    ACCOUNT_CREATION_FORM_EDITION_SUCCEEDED,
    ACCOUNT_CREATION_FORM_EDITION_REQUESTED,
    ACCOUNT_CREATION_FORM_EDITION_FAILED,
    AUTHENTICATION_REQUESTED,
    AUTHENTICATION_SUCCEEDED,
    AUTHENTICATION_FAILED,
    AUTHENTICATION_FORM_EDITION_SUCCEEDED,
    AUTHENTICATION_FORM_EDITION_FAILED,
    SESSION_DECODE_REQUESTED,
    SESSION_DECODE_SUCCEEDED,
    SESSION_DECODE_FAILED,
    LOCATION_CHANGED,
    ACCOUNT_DELETION_REQUESTED,
    ACCOUNT_DELETION_SUCCEEDED,
    ACCOUNT_DELETION_FAILED,
    ACCOUNT_EDITION_FORM_EDITION_REQUESTED,
    ACCOUNT_EDITION_FORM_EDITION_SUCCEEDED,
    ACCOUNT_EDITION_FORM_EDITION_FAILED,
    TEAM_CREATION_REQUESTED,
    TEAM_CREATION_SUCCEEDED,
    TEAM_CREATION_FAILED,
    TEAMS_RETRIEVAL_REQUESTED,
    TEAMS_RETRIEVAL_SUCCEEDED,
    TEAMS_RETRIEVAL_FAILED,
    EMPLOYEE_ADDITION_REQUESTED,
    EMPLOYEE_ADDITION_SUCCEEDED,
    EMPLOYEE_ADDITION_FAILED,
    EMPLOYEE_ADDITION_FORM_EDITION_SUCCEEDED,
    EMPLOYEE_ADDITION_FORM_EDITION_FAILED,
    ARRIVAL_TIME_REPORT_REQUESTED,
    ARRIVAL_TIME_REPORT_SUCCEEDED,
    ARRIVAL_TIME_REPORT_FAILED,
    DEPARTURE_TIME_REPORT_REQUESTED,
    DEPARTURE_TIME_REPORT_SUCCEEDED,
    DEPARTURE_TIME_REPORT_FAILED,
};

function createMessageDispatcher(dispatch) {
    return {
        dispatchAccountCreationRequest: dispatchAccountCreationRequest(dispatch),
        dispatchAccountCreationSuccess: dispatchAccountCreationSuccess(dispatch),
        dispatchAccountCreationFailure: dispatchAccountCreationFailure(dispatch),
        dispatchAccountCreationFormEditionRequest: dispatchAccountCreationFormEditionRequest(dispatch),
        dispatchAccountCreationFormEditionSuccess: dispatchAccountCreationFormEditionSuccess(dispatch),
        dispatchAccountCreationFormEditionFailure: dispatchAccountCreationFormEditionFailure(dispatch),
        dispatchAuthenticationRequest: dispatchAuthenticationRequest(dispatch),
        dispatchAuthenticationSuccess: dispatchAuthenticationSuccess(dispatch),
        dispatchAuthenticationFailure: dispatchAuthenticationFailure(dispatch),
        dispatchAuthenticationFormEditionSuccess: dispatchAuthenticationFormEditionSuccess(dispatch),
        dispatchAuthenticationFormEditionFailure: dispatchAuthenticationFormEditionFailure(dispatch),
        dispatchSessionDecodeRequest: dispatchSessionDecodeRequest(dispatch),
        dispatchSessionDecodeSuccess: dispatchSessionDecodeSuccess(dispatch),
        dispatchSessionDecodeFailure: dispatchSessionDecodeFailure(dispatch),
        dispatchLocationChange: dispatchLocationChange(dispatch),
        dispatchAccountDeletionRequest: dispatchAccountDeletionRequest(dispatch),
        dispatchAccountDeletionSuccess: dispatchAccountDeletionSuccess(dispatch),
        dispatchAccountDeletionFailure: dispatchAccountDeletionFailure(dispatch),
        dispatchAccountEditionRequest: dispatchAccountEditionRequest(dispatch),
        dispatchAccountEditionSuccess: dispatchAccountEditionSuccess(dispatch),
        dispatchAccountEditionFailure: dispatchAccountEditionFailure(dispatch),
        dispatchAccountEditionFormEditionRequest: dispatchAccountEditionFormEditionRequest(dispatch),
        dispatchAccountEditionFormEditionSuccess: dispatchAccountEditionFormEditionSuccess(dispatch),
        dispatchAccountEditionFormEditionFailure: dispatchAccountEditionFormEditionFailure(dispatch),
        dispatchTeamCreationRequest: dispatchTeamCreationRequest(dispatch),
        dispatchTeamCreationSuccess: dispatchTeamCreationSuccess(dispatch),
        dispatchTeamCreationFailure: dispatchTeamCreationFailure(dispatch),
        dispatchTeamsRetrievalRequest: dispatchTeamsRetrievalRequest(dispatch),
        dispatchTeamsRetrievalSuccess: dispatchTeamsRetrievalSuccess(dispatch),
        dispatchTeamsRetrievalFailure: dispatchTeamsRetrievalFailure(dispatch),
        dispatchEmployeeAdditionRequest: dispatchEmployeeAdditionRequest(dispatch),
        dispatchEmployeeAdditionSuccess: dispatchEmployeeAdditionSuccess(dispatch),
        dispatchEmployeeAdditionFailure: dispatchEmployeeAdditionFailure(dispatch),
        dispatchEmployeeAdditionFormEditionSuccess: dispatchEmployeeAdditionFormEditionSuccess(dispatch),
        dispatchEmployeeAdditionFormEditionFailure: dispatchEmployeeAdditionFormEditionFailure(dispatch),
        dispatchArrivalTimeReportRequest: dispatchArrivalTimeReportRequest(dispatch),
        dispatchArrivalTimeReportSuccess: dispatchArrivalTimeReportSuccess(dispatch),
        dispatchArrivalTimeReportFailure: dispatchArrivalTimeReportFailure(dispatch),
        dispatchDepartureTimeReportRequest: dispatchDepartureTimeReportRequest(dispatch),
        dispatchDepartureTimeReportSuccess: dispatchDepartureTimeReportSuccess(dispatch),
        dispatchDepartureTimeReportFailure: dispatchDepartureTimeReportFailure(dispatch),
    }
}

export {messages, createMessageDispatcher};
