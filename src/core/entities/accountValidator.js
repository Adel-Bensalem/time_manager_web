import {isEmailValid} from "./emailValidator";

function isFullNameValid(fullName) {
    return fullName.length > 0;
}

function isAccountValid({ email, fullName }) {
    return isEmailValid(email) && isFullNameValid(fullName);
}

export { isAccountValid };