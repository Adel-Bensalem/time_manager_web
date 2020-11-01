
import {isAccountValid} from "../entities/accountValidator";
import {isPasswordConfirmationValid} from "../entities/passwordMatcher";

function isRequestValid(account) {
    return isAccountValid(account) && isPasswordConfirmationValid(account.password, account.passwordConfirmation);
}

function editGeneralManagerAccountCreationForm(presenter) {
    return account => {
        presenter.presentGeneralManagerAccountCreationFormEditionRequest(account);

        return isRequestValid(account) ?
            presenter.presentGeneralManagerAccountCreationFormEditionSuccess(account) :
            presenter.presentGeneralManagerAccountCreationFormEditionFailure(account);
    };
}

export { editGeneralManagerAccountCreationForm };