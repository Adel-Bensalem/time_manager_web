<template>
    <div class="account-creation">
        <div class="account-creation__form">
            <account-creation-form :data="formData" @edit-form="editGeneralManagerAccountCreationForm" />
        </div>
        <button class="account-creation__button" @click="createGeneralManagerAccount">Send</button>
    </div>
</template>

<script>
    import Form from "./form";

    export default {
        name: "GeneralManagerAccountCreation",
        emits: [
            "edit-general-manager-account-creation-form",
            "create-general-manager-account",
        ],
        props: {
            formData: {
                email: String,
                fullName: String,
                password: String,
                passwordConfirmation: String
            },
            request: {
                isPending: Boolean,
                isSuccess: Boolean,
                isFailure: Boolean,
            },
            canSubmitForm: Boolean
        },
        components: { 'account-creation-form': Form },
        methods: {
            editGeneralManagerAccountCreationForm(formData) {
                this.$emit("edit-general-manager-account-creation-form", formData);
            },
            createGeneralManagerAccount() {
                this.$emit("create-general-manager-account", this.formData);
            }
        }
    }
</script>

<style scoped>
    .account-creation {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .account-creation__form {
        max-width: 40rem;
        width: 100%;
        margin-bottom: 2rem;
    }

    .account-creation__button {
        color: var(--color-white);
        padding: 1rem 3rem;
        font-size: 1.6rem;
        border: 1px solid var(--color-white);
        background-color: var(--color-primary);
        cursor: pointer;
    }
</style>