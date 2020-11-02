import { createGeneralManagerAccount } from "./useCases/createGeneralManagerAccount"
import { editGeneralManagerAccountCreationForm } from "./useCases/editGeneralManagerAccountCreationForm"
import { authenticate } from "./useCases/authenticate"

function createCore(repository, presenter, gatekeeper, session) {
    return {
        createGeneralManagerAccount: createGeneralManagerAccount(repository, presenter),
        editGeneralManagerAccountCreationForm: editGeneralManagerAccountCreationForm(presenter),
        authenticate: authenticate(gatekeeper, session, presenter)
    }
}

export { createCore };