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
        <div class="settings__section">
            <h1 class="settings__section__title">Delete Account</h1>
            <div class="settings__section__body">
                <AccountDeletion />
            </div>
        </div>
    </div>
</template>

<script>
    import AccountEdition from "../../../components/accountEdition";
    import AccountDeletion from "../../../components/accountDeletion";

    export default {
        components: {AccountEdition, AccountDeletion},
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
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        padding: 4rem;
    }

    .settings__section {
        flex: 1;
        padding: 2rem;
    }

    .settings__section__title {
        padding: 1rem;
        color: var(--color-black);
        border-bottom: 1px solid var(--color-black);
        font-size: 1.8rem;
        font-weight: 600;
        margin: 0 auto 2rem;
        max-width: 40rem;
    }

    .settings__section__body {
        max-width: 40rem;
        margin: 0 auto;
    }
</style>