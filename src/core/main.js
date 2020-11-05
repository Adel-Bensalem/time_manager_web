import { createGeneralManagerAccount } from "./useCases/createGeneralManagerAccount"
import { editGeneralManagerAccountCreationForm } from "./useCases/editGeneralManagerAccountCreationForm"
import { authenticate } from "./useCases/authenticate"
import { editAuthenticationForm } from "./useCases/editAuthenticationForm"
import { decodeSession } from "./useCases/decodeSession"
import { deleteAccount } from "./useCases/deleteAccount"

function createCore(
    repository,
    presenter,
    gatekeeper,
    session,
    tokenDecoder
) {
    return {
        createGeneralManagerAccount: createGeneralManagerAccount(repository, presenter),
        editGeneralManagerAccountCreationForm: editGeneralManagerAccountCreationForm(presenter),
        authenticate: authenticate(gatekeeper, session, tokenDecoder, presenter),
        editAuthenticationForm: editAuthenticationForm(presenter),
        decodeSession: decodeSession(session, tokenDecoder, presenter),
        deleteAccount: deleteAccount(repository, session, presenter)
    }
}

export { createCore };