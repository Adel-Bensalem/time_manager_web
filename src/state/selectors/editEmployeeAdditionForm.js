
function getEmployeeAdditionFormEditionFormData(getState) {
    return () => getState().formData
}

function canSubmitEmployeeAdditionFormEditionForm(getState) {
    return () => getState().canSendForm;
}

export {
    getEmployeeAdditionFormEditionFormData,
    canSubmitEmployeeAdditionFormEditionForm
}