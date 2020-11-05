import {isAccountValid} from "../entities/accountValidator";

function editAccount(repository, presenter) {
    return account => {
        presenter.presentAccountEditionRequest();

        return isAccountValid(account) ?
            repository.editAccount(account)
                .then(presenter.presentAccountEditionSuccess)
                .catch(presenter.presentAccountEditionFailure) :
            presenter.presentAccountEditionFailure();
    };
}

export { editAccount };