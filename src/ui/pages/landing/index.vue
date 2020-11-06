<template>
    <div class="landing">
        <div class="landing__section">
            <div class="landing__form">
                <h1 class="landing__title">Register</h1>
                <AccountCreation
                        :form-data="registrationFormData"
                        :request="registrationRequestState"
                        :can-submit-form="canRegister"
                        @create-account="core.createAccount"
                        @edit-account-creation-form="core.editAccountCreationForm"
                />
            </div>
        </div>
        <div class="landing__section">
            <div class="landing__form">
                <h1 class="landing__title">Log In</h1>
                <Authentication
                        :data="authenticationFormData"
                        :can-authenticate="canAuthenticate"
                        :request="authenticationRequestState"
                        @edit-authentication-form="core.editAuthenticationForm"
                        @authenticate="core.authenticate"
                />
            </div>

        </div>
    </div>
</template>
<script>
    import AccountCreation from "../../components/accountCreation";
    import Authentication from "../../components/authentication";

    export default {
        components: {AccountCreation, Authentication},
        data() {
            return {
                registrationFormData: this.selector.getAccountCreationFormData(),
                authenticationFormData: this.selector.getAuthenticationFormEditionFormData(),
                canRegister: this.selector.canSubmitAccountCreationForm(),
                canAuthenticate: this.selector.canSubmitAuthenticationFormEditionForm(),
                registrationRequestState: {
                    isPending: this.selector.isAccountCreationRequestPending(),
                    isSuccess: this.selector.isAccountCreationRequestSuccess(),
                    isFailure: this.selector.isAccountCreationRequestFailure(),
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
                this.registrationFormData = this.selector.getAccountCreationFormData();
                this.canRegister = this.selector.canSubmitAccountCreationForm();
                this.registrationRequestState = {
                    isPending: this.selector.isAccountCreationRequestPending(),
                    isSuccess: this.selector.isAccountCreationRequestSuccess(),
                    isFailure: this.selector.isAccountCreationRequestFailure(),
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
        padding: 4rem;
    }

    .landing > *:not(:last-child) {
        margin-right: 2rem;
    }

    .landing__title {
        font-size: 1.8rem;
        color: var(--color-black);
        font-weight: 600;
        margin-bottom: 2rem;
    }

    .landing__section {
        flex: 1;
    }

    .landing__form {
        margin: 0 auto;
        max-width: 40rem;
    }
</style>