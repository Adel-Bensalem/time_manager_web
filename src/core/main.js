import { createAccount } from "./useCases/createAccount";
import { editAccountCreationForm } from "./useCases/editAccountCreationForm";
import { authenticate } from "./useCases/authenticate";
import { editAuthenticationForm } from "./useCases/editAuthenticationForm";
import { decodeSession } from "./useCases/decodeSession";
import { deleteAccount } from "./useCases/deleteAccount";
import { editAccount } from "./useCases/editAccount";
import { editAccountEditionForm } from "./useCases/editAccountEditionForm";
import { createTeam } from "./useCases/createTeam";
import { addEmployee } from "./useCases/addEmployee";
import { editEmployeeAdditionForm } from "./useCases/editEmployeeAdditionForm";
import { reportArrivalTime } from "./useCases/reportArrivalTime";
import { reportDepartureTime } from "./useCases/reportDepartureTime";
import { retrieveTeams } from "./useCases/retrieveTeams";

function createCore(
    repository,
    presenter,
    gatekeeper,
    session,
    tokenDecoder,
) {
    return {
        createAccount: createAccount(repository, presenter),
        editAccountCreationForm: editAccountCreationForm(presenter),
        authenticate: authenticate(gatekeeper, session, tokenDecoder, presenter),
        editAuthenticationForm: editAuthenticationForm(presenter),
        decodeSession: decodeSession(session, tokenDecoder, presenter),
        deleteAccount: deleteAccount(repository, session, presenter),
        editAccount: editAccount(repository, session, presenter),
        editAccountEditionForm: editAccountEditionForm(presenter),
        createTeam: createTeam(repository, session, presenter),
        addEmployee: addEmployee(repository, session, presenter),
        editEmployeeAdditionForm: editEmployeeAdditionForm(presenter),
        reportArrivalTime: reportArrivalTime(repository, session, presenter),
        reportDepartureTime: reportDepartureTime(repository, session, presenter),
        retrieveTeams: retrieveTeams(repository, session, presenter)
    }
}

export { createCore };