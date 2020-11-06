function authenticate(sendHttpRequest) {
    return credentials => sendHttpRequest({
        endpoint: "/api/authentication/",
        method: 'POST',
        data: credentials
    });
}

function decodeToken(sendHttpRequest) {
    return token => sendHttpRequest({
        endpoint: "/api/authentication/",
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
    });
}

export {authenticate, decodeToken};