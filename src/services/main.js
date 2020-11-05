import { saveAccount } from "./api/saveAccount";
import { editAccount } from "./api/editAccount";
import { authenticate, decodeToken } from "./api/authenticate";

function createServices(sendHttpRequest) {
    return {
        saveAccount: saveAccount(sendHttpRequest),
        authenticate: authenticate(sendHttpRequest),
        decodeToken: decodeToken(sendHttpRequest),
        editAccount: editAccount(sendHttpRequest)
    }
}

export { createServices };