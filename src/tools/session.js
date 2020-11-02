function start(data) {
    sessionStorage.setItem("session", data);

    return data;
}

function exist() {
    return !!sessionStorage.getItem("session");
}

function retrieve() {
    return !!sessionStorage.getItem("session");
}

export {
    start,
    exist,
    retrieve
};