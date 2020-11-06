function saveEmployee(sendHttpRequest) {
    return (employee, team, { token }) => sendHttpRequest({
        endpoint: "/api/employee/",
        method: 'POST',
        data: { employee, team },
        headers: { Authorization: `Bearer ${token}` }
    });
}

export { saveEmployee };