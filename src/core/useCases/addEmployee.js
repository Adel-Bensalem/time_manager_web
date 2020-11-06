import {isEmployeeValid} from "../entities/employeeValidator";

function addEmployee(repository, session, presenter) {
    return (employee, team) => {
        presenter.presentEmployeeAdditionRequest();

        isEmployeeValid(employee) ?
            repository
                .saveEmployee(employee, team, session.retrieve())
                .then(presenter.presentEmployeeAdditionSuccess)
                .catch(presenter.presentEmployeeAdditionFailure) :
            presenter.presentEmployeeAdditionFailure()
    }
}

export { addEmployee };