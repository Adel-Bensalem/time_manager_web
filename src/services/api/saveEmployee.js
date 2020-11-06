function saveEmployee(sendHttpRequest) {
    return (employee, team, { token }) => sendHttpRequest({
        endpoint: "/api/employee/",
        method: 'POST',
        data: { employee, token },
        headers: { Authorization: `Bearer ${token}` }
    });
}

export { saveEmployee };