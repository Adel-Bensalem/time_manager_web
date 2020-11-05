
import {isAccountValid} from "../entities/accountValidator";

function editAccountEditionForm(presenter) {
    return account =>
        isAccountValid(account) ?
            presenter.presentAccountEditionFormEditionSuccess(account) :
            presenter.presentAccountEditionFormEditionFailure(account);
}

export { editAccountEditionForm };