import {isAccountValid} from "../entities/accountValidator";

function editAccount(repository, session, presenter) {
    return (account) => {
        presenter.presentAccountEditionRequest();

        return isAccountValid(account) ?
            repository.editAccount(account, session.retrieve())
                .then(presenter.presentAccountEditionSuccess)
                .catch(presenter.presentAccountEditionFailure) :
            presenter.presentAccountEditionFailure();
    };
}

export { editAccount };