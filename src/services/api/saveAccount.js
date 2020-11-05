function saveAccount(sendHttpRequest) {
    return account => sendHttpRequest({
        endpoint: "/api/general-manager/",
        method: 'POST',
        data: account
    });
}

export {saveAccount};