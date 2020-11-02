
function getAuthenticationFormEditionFormData(getState) {
    return () => getState().formData
}

function canSubmitAuthenticationFormEditionForm(getState) {
    return () => getState().canSendForm;
}

export {
    getAuthenticationFormEditionFormData,
    canSubmitAuthenticationFormEditionForm
}