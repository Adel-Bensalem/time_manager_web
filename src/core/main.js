import { createGeneralManagerAccount } from "./useCases/createGeneralManagerAccount"
import { editGeneralManagerAccountCreationForm } from "./useCases/editGeneralManagerAccountCreationForm"

function createCore(repository, presenter) {
    return {
        createGeneralManagerAccount: createGeneralManagerAccount(repository, presenter),
        editGeneralManagerAccountCreationForm: editGeneralManagerAccountCreationForm(repository, presenter)
    }
}

export { createCore };