<template>
    <GeneralManagerAccountCreation
            :form-data="formData"
            :request="requestState"
            :can-submit-form="canSubmitForm"
            @create-general-manager-account="core.createGeneralManagerAccount"
            @edit-general-manager-account-creation-form="core.editGeneralManagerAccountCreationForm"
    />
</template>
<script>
    import GeneralManagerAccountCreation from "../../components/generalManagerAccountCreation";

    export default {
        components: {GeneralManagerAccountCreation},
        data() {
            return {
                formData: this.selector.getGeneralManagerAccountCreationFormData(),
                canSubmitForm: this.selector.canSubmitGeneralManagerAccountCreationForm(),
                requestState: {
                    isPending: this.selector.isGeneralManagerAccountCreationRequestPending(),
                    isSuccess: this.selector.isGeneralManagerAccountCreationRequestSuccess(),
                    isFailure: this.selector.isGeneralManagerAccountCreationRequestFailure(),
                }
            }
        },
        beforeCreate() {
            this.subscribeToStore(() => {
                this.formData = this.selector.getGeneralManagerAccountCreationFormData();
                this.canSubmitForm = this.selector.canSubmitGeneralManagerAccountCreationForm();
                this.requestState = {
                    isPending: this.selector.isGeneralManagerAccountCreationRequestPending(),
                    isSuccess: this.selector.isGeneralManagerAccountCreationRequestSuccess(),
                    isFailure: this.selector.isGeneralManagerAccountCreationRequestFailure(),
                }
            });
        }
    }
</script>
<style scoped></style>