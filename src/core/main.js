import { createAccountCreationInteractor } from "./useCases/createAccount"

function createCore(repository, presenter) {
    return {
        createAccount: createAccountCreationInteractor(repository, presenter)
    }
}

export { createCore };