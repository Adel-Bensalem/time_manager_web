
function authenticate(sendRequest) {
    return credentials => sendRequest("/api/authenticate/", 'POST', credentials);
}

function decodeToken(sendRequest) {
    return token => sendRequest("/api/authenticate/", 'GET', token)
}

export { authenticate, decodeToken };