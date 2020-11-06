import {isEmployeeValid} from "../entities/employeeValidator";

function editEmployeeAdditionForm(presenter) {
    return (employee) => isEmployeeValid(employee) ?
        presenter.presentEmployeeAdditionFormEditionSuccess(employee) :
        presenter.presentEmployeeAdditionFormEditionFailure(employee)
}

export { editEmployeeAdditionForm };