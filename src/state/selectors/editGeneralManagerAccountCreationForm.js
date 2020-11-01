
function getGeneralManagerAccountCreationFormData(getState) {
    return () => getState().formData
}

function canSubmitGeneralManagerAccountCreationForm(getState) {
    return () => getState().canSendForm;
}

export {
    getGeneralManagerAccountCreationFormData,
    canSubmitGeneralManagerAccountCreationForm
}