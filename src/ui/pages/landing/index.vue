<template>
    <div class="landing">
        <div class="landing__form">
            <GeneralManagerAccountCreation
                    :form-data="registrationFormData"
                    :request="registrationRequestState"
                    :can-submit-form="canRegister"
                    @create-general-manager-account="core.createGeneralManagerAccount"
                    @edit-general-manager-account-creation-form="core.editGeneralManagerAccountCreationForm"
            />
        </div>
        <div class="landing__form">
            <Authentication
                    :data="authenticationFormData"
                    :can-authenticate="canAuthenticate"
                    :request="authenticationRequestState"
                    @edit-authentication-form="core.editAuthenticationForm"
                    @authenticate="core.authenticate"
            />
        </div>
    </div>
</template>
<script>
    import GeneralManagerAccountCreation from "../../components/generalManagerAccountCreation";
    import Authentication from "../../components/authentication";

    export default {
        components: {GeneralManagerAccountCreation, Authentication},
        data() {
            return {
                registrationFormData: this.selector.getGeneralManagerAccountCreationFormData(),
                authenticationFormData: this.selector.getAuthenticationFormEditionFormData(),
                canRegister: this.selector.canSubmitGeneralManagerAccountCreationForm(),
                canAuthenticate: this.selector.canSubmitAuthenticationFormEditionForm(),
                registrationRequestState: {
                    isPending: this.selector.isGeneralManagerAccountCreationRequestPending(),
                    isSuccess: this.selector.isGeneralManagerAccountCreationRequestSuccess(),
                    isFailure: this.selector.isGeneralManagerAccountCreationRequestFailure(),
                },
                authenticationRequestState: {
                    isPending: this.selector.isAuthenticationRequestPending(),
                    isSuccess: this.selector.isAuthenticationRequestSuccess(),
                    isFailure: this.selector.isAuthenticationRequestFailure(),
                }
            }
        },
        beforeCreate() {
            this.subscribeToStore(() => {
                this.registrationFormData = this.selector.getGeneralManagerAccountCreationFormData();
                this.canRegister = this.selector.canSubmitGeneralManagerAccountCreationForm();
                this.registrationRequestState = {
                    isPending: this.selector.isGeneralManagerAccountCreationRequestPending(),
                    isSuccess: this.selector.isGeneralManagerAccountCreationRequestSuccess(),
                    isFailure: this.selector.isGeneralManagerAccountCreationRequestFailure(),
                };
                this.authenticationFormData = this.selector.getAuthenticationFormEditionFormData();
                this.canAuthenticate = this.selector.canSubmitAuthenticationFormEditionForm();
                this.authenticationRequestState = {
                    isPending: this.selector.isAuthenticationRequestPending(),
                    isSuccess: this.selector.isAuthenticationRequestSuccess(),
                    isFailure: this.selector.isAuthenticationRequestFailure(),
                }
            });
        }
    }
</script>
<style scoped>
    .landing {
        display: flex;
        justify-content: center;
        flex-direction: row;
        width: 100%;
    }

    .landing > *:not(:last-child) {
        margin-right: 2rem;
    }

    .landing__form {
        flex: 1;
    }
</style>