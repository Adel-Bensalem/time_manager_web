import { saveGeneralManagerAccount } from "./api/saveGeneralManagerAccountAccount"
import { authenticate, decodeToken } from "./api/authenticate"

function createServices(sendRequest) {
    return {
        saveGeneralManagerAccount: saveGeneralManagerAccount(sendRequest),
        authenticate: authenticate(sendRequest),
        decodeToken: decodeToken(sendRequest)
    }
}

export { createServices };