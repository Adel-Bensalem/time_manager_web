import { createGeneralManagerAccount } from "./useCases/createGeneralManagerAccount"

function createCore(repository, presenter) {
    return {
        createGeneralManagerAccount: createGeneralManagerAccount(repository, presenter)
    }
}

export { createCore };