function editAccount(sendHttpRequest) {
    return account => sendHttpRequest({
        endpoint: "/api/general-manager/",
        method: 'PUT',
        data: account
    });
}

export { editAccount };