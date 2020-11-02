import {isEmailValid} from "../entities/emailValidator";

function areCredentialsValid({ email, password }) {
    return email.length > 0 && password.length > 0 && isEmailValid(email);
}

function editAuthenticationForm(presenter) {
    return (credentials) => areCredentialsValid(credentials) ?
        presenter.presentAuthenticationFormEditionSuccess(credentials) :
        presenter.presentAuthenticationFormEditionFailure(credentials)
}

export { editAuthenticationForm };