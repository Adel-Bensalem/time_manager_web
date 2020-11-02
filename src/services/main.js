import { saveGeneralManagerAccount } from "./api/saveGeneralManagerAccountAccount"
import { authenticate } from "./api/authenticate"

function createServices(sendRequest) {
    return {
        saveGeneralManagerAccount: saveGeneralManagerAccount(sendRequest),
        authenticate: authenticate(sendRequest),
    }
}

export { createServices };