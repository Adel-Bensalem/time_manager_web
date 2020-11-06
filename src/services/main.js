import { saveAccount } from "./api/saveAccount";
import { editAccount } from "./api/editAccount";
import { deleteAccount } from "./api/deleteAccount";
import { authenticate, decodeToken } from "./api/authenticate";
import { saveTeam } from "./api/saveTeam";
import { getTeams } from "./api/getTeams";
import { saveEmployee } from "./api/saveEmployee";
import { saveArrivalTime } from "./api/saveArrivalTime";

function createServices(sendHttpRequest) {
    return {
        saveAccount: saveAccount(sendHttpRequest),
        authenticate: authenticate(sendHttpRequest),
        decodeToken: decodeToken(sendHttpRequest),
        deleteAccount: deleteAccount(sendHttpRequest),
        editAccount: editAccount(sendHttpRequest),
        saveTeam: saveTeam(sendHttpRequest),
        getTeams: getTeams(sendHttpRequest),
        saveEmployee: saveEmployee(sendHttpRequest),
        saveArrivalTime: saveArrivalTime(sendHttpRequest),
    }
}

export { createServices };