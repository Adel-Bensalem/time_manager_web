function saveGeneralManagerAccount(sendHttpRequest) {
    return account => sendHttpRequest({
        endpoint: "/api/general-manager/",
        method: 'POST',
        data: account
    });
}

export {saveGeneralManagerAccount};