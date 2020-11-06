
function isTimeValid(time) {
    return !isNaN(new Date(time).getTime());
}

export { isTimeValid };