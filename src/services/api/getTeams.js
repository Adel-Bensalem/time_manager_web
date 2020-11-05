
function getTeams(sendHttpRequest) {
    return ({ token }) => sendHttpRequest({
        endpoint: "/api/team/",
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
    });
}

export { getTeams };