
import {isAccountValid} from "../entities/accountValidator";
import {isPasswordConfirmationValid} from "../entities/passwordMatcher";

function isRequestValid(account) {
    return isAccountValid(account) && isPasswordConfirmationValid(account.password, account.passwordConfirmation);
}

function editAccountCreationForm(presenter) {
    return account =>
        isRequestValid(account) ?
            presenter.presentAccountCreationFormEditionSuccess(account) :
            presenter.presentAccountCreationFormEditionFailure(account);
}

export { editAccountCreationForm };