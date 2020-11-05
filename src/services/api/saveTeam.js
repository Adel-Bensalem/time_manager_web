
function saveTeam(sendHttpRequest) {
    return (team, { token }) => sendHttpRequest({
        endpoint: "/api/team/",
        method: 'POST',
        data: team,
        headers: { Authorization: `Bearer ${token}` }
    });
}

export { saveTeam };