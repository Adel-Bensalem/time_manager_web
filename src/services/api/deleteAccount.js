
function deleteAccount(sendHttpRequest) {
    return ({ token }) => sendHttpRequest({
        endpoint: '/api/account',
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
    });
}

export { deleteAccount };