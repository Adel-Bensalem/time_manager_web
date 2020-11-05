
function getAccountCreationFormData(getState) {
    return () => getState().formData
}

function canSubmitAccountCreationForm(getState) {
    return () => getState().canSendForm;
}

export {
    getAccountCreationFormData,
    canSubmitAccountCreationForm
}