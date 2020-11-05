import { saveGeneralManagerAccount } from "./api/saveGeneralManagerAccountAccount"
import { authenticate, decodeToken } from "./api/authenticate"

function createServices(sendHttpRequest) {
    return {
        saveGeneralManagerAccount: saveGeneralManagerAccount(sendHttpRequest),
        authenticate: authenticate(sendHttpRequest),
        decodeToken: decodeToken(sendHttpRequest)
    }
}

export { createServices };