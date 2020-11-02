
function hasSession(getState) {
    return () => getState().hasSession;
}

function getSession(getState) {
    return () => getState().data;
}

export { getSession, hasSession };