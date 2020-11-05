function editAccount(sendHttpRequest) {
    return (account, { token }) => sendHttpRequest({
        endpoint: "/api/general-manager/",
        method: 'PUT',
        data: account,
        headers: { Authorization: `Bearer ${token}` }
    });
}

export { editAccount };