function start(data) {
    sessionStorage.setItem("session", JSON.stringify(data));

    return data;
}

function exist() {
    return !!sessionStorage.getItem("session");
}

function retrieve() {
    return !!sessionStorage.getItem("session") && JSON.parse(sessionStorage.getItem("session"));
}

export {
    start,
    exist,
    retrieve
};