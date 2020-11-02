
function authenticate(sendRequest) {
    return credentials => sendRequest("/api/authenticate/", 'GET', credentials);
}

export { authenticate };