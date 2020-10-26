import {isAccountValid} from "../entities/accountValidator";
import {isPasswordConfirmationValid} from "../entities/passwordMatcher";

function isAccountCreationRequestValid(account) {
    return isAccountValid(account) && isPasswordConfirmationValid(account.password, account.passwordConfirmation);
}

function createAccountCreationInteractor(repository, presenter) {
    return account => {
        presenter.presentAccountCreationRequest();

        return isAccountCreationRequestValid(account) ?
            repository.saveAccount(account)
                .then(presenter.presentAccountCreationSuccess)
                .catch(presenter.presentAccountCreationFailure) :
            presenter.presentAccountCreationFailure();
    };
}

export { createAccountCreationInteractor };