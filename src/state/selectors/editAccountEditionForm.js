
function getAccountEditionFormData(getState) {
    return () => getState().formData
}

function canSubmitAccountEditionForm(getState) {
    return () => getState().canSendForm;
}

export {
    getAccountEditionFormData,
    canSubmitAccountEditionForm
}