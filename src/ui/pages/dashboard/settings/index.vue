<template>
    <div class="settings">
        <div class="settings__section">
            <h1 class="settings__section__title">Edit Account</h1>
            <div class="settings__section__body">
                <AccountEdition
                        :form-data="editionFormData"
                        :request="editionRequestState"
                        :can-submit-form="canEditAccount"
                        @edit-account="core.editAccount"
                        @edit-account-edition-form="core.editAccountEditionForm"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import AccountEdition from "../../../components/accountEdition";

    export default {
        components: {AccountEdition},
        data() {
            return {
                editionFormData: this.selector.getAccountEditionFormData(),
                canEditAccount: this.selector.canSubmitAccountEditionForm(),
                editionRequestState: {
                    isPending: this.selector.isAccountEditionRequestPending(),
                    isSuccess: this.selector.isAccountEditionRequestSuccess(),
                    isFailure: this.selector.isAccountEditionRequestFailure(),
                }
            }
        },
        beforeCreate() {
            this.subscribeToStore(() => {
                this.editionFormData = this.selector.getAccountEditionFormData();
                this.canEditAccount = this.selector.canSubmitAccountEditionForm();
                this.editionRequestState = {
                    isPending: this.selector.isAccountEditionRequestPending(),
                    isSuccess: this.selector.isAccountEditionRequestSuccess(),
                    isFailure: this.selector.isAccountEditionRequestFailure(),
                };
            });
        }
    }
</script>

<style scoped>
    .settings {
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        padding: 4rem;
    }

    .settings__section {
        max-width: 40rem;
        width: 100%;
    }

    .settings__section__title {
        font-size: 1.8rem;
        color: var(--color-black);
        font-weight: 600;
        margin-bottom: 2rem;
    }

    .settings__section__body {

    }
</style>