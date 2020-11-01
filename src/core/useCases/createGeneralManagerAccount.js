import {isAccountValid} from "../entities/accountValidator";
import {isPasswordConfirmationValid} from "../entities/passwordMatcher";

function isAccountCreationRequestValid(account) {
    return isAccountValid(account) && isPasswordConfirmationValid(account.password, account.passwordConfirmation);
}

function createGeneralManagerAccount(repository, presenter) {
    return account => {
        presenter.presentGeneralManagerAccountCreationRequest();

        return isAccountCreationRequestValid(account) ?
            repository.saveGeneralManagerAccount(account)
                .then(presenter.presentGeneralManagerAccountCreationSuccess)
                .catch(presenter.presentGeneralManagerAccountCreationFailure) :
            presenter.presentGeneralManagerAccountCreationFailure();
    };
}

export { createGeneralManagerAccount };