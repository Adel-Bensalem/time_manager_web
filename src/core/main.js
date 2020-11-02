import { createGeneralManagerAccount } from "./useCases/createGeneralManagerAccount"
import { editGeneralManagerAccountCreationForm } from "./useCases/editGeneralManagerAccountCreationForm"
import { authenticate } from "./useCases/authenticate"
import { editAuthenticationForm } from "./useCases/editAuthenticationForm"

function createCore(repository, presenter, gatekeeper, session) {
    return {
        createGeneralManagerAccount: createGeneralManagerAccount(repository, presenter),
        editGeneralManagerAccountCreationForm: editGeneralManagerAccountCreationForm(presenter),
        authenticate: authenticate(gatekeeper, session, presenter),
        editAuthenticationForm: editAuthenticationForm(presenter)
    }
}

export { createCore };