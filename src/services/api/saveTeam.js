
function saveTeam(sendHttpRequest) {
    return account => sendHttpRequest({
        endpoint: "/api/team/",
        method: 'POST',
        data: account
    });
}

export { saveTeam };