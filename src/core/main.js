import { createAccount } from "./useCases/createAccount"
import { editAccountCreationForm } from "./useCases/editAccountCreationForm"
import { authenticate } from "./useCases/authenticate"
import { editAuthenticationForm } from "./useCases/editAuthenticationForm"
import { decodeSession } from "./useCases/decodeSession"
import { deleteAccount } from "./useCases/deleteAccount"
import { editAccount } from "./useCases/editAccount"
import { editAccountEditionForm } from "./useCases/editAccountEditionForm"
import {  } from "./useCases/createTeam"

function createCore(
    repository,
    presenter,
    gatekeeper,
    session,
    tokenDecoder
) {
    return {
        createAccount: createAccount(repository, presenter),
        editAccountCreationForm: editAccountCreationForm(presenter),
        authenticate: authenticate(gatekeeper, session, tokenDecoder, presenter),
        editAuthenticationForm: editAuthenticationForm(presenter),
        decodeSession: decodeSession(session, tokenDecoder, presenter),
        deleteAccount: deleteAccount(repository, session, presenter),
        editAccount: editAccount(repository, presenter),
        editAccountEditionForm: editAccountEditionForm(presenter),
    }
}

export { createCore };