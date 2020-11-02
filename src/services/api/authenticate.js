
function authenticate(sendRequest) {
    return credentials => sendRequest("/api/authentication/", 'POST', credentials);
}

function decodeToken(sendRequest) {
    return token => sendRequest("/api/authentication/", 'GET', token)
}

export { authenticate, decodeToken };