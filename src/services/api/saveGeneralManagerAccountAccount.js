
function saveGeneralManagerAccount(sendRequest) {
    return account => sendRequest("/api/general-manager/", 'POST', account);
}

export { saveGeneralManagerAccount };