import { saveGeneralManagerAccount } from "./api/saveGeneralManagerAccountAccount"

function createServices(sendRequest) {
    return {
        saveGeneralManagerAccount: saveGeneralManagerAccount(sendRequest)
    }
}

export { createServices };