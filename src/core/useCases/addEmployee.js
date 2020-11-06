import {isEmployeeValid} from "../entities/employeeValidator";
import {isPasswordConfirmationValid} from "../entities/passwordMatcher";

function isRequestValid(employee) {
    return (
        isEmployeeValid(employee) &&
        isPasswordConfirmationValid(employee.password, employee.passwordConfirmation)
    )
}

function addEmployee(repository, session, presenter) {
    return (employee, team) => {
        presenter.presentEmployeeAdditionRequest();

        isRequestValid(employee) ?
            repository
                .saveEmployee(employee, team, session.retrieve())
                .then(presenter.presentEmployeeAdditionSuccess)
                .catch(presenter.presentEmployeeAdditionFailure) :
            presenter.presentEmployeeAdditionFailure()
    }
}

export { addEmployee };