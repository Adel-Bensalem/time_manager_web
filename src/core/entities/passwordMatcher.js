
function isPasswordConfirmationValid(password, passwordConfirmation) {
    return password === passwordConfirmation && password.length > 0;
}

export { isPasswordConfirmationValid };