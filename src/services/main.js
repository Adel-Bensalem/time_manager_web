import { saveAccount } from "./api/saveAccount"
import { authenticate, decodeToken } from "./api/authenticate"

function createServices(sendHttpRequest) {
    return {
        saveAccount: saveAccount(sendHttpRequest),
        authenticate: authenticate(sendHttpRequest),
        decodeToken: decodeToken(sendHttpRequest)
    }
}

export { createServices };