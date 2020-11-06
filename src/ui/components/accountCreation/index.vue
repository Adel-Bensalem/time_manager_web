<template>
    <div class="account-creation">
        <div class="account-creation__form">
            <account-creation-form :data="formData" @edit-form="editAccountCreationForm" />
        </div>
        <button
                class="account-creation__button"
                :disabled="!canSubmitForm"
                @click="createAccount"
        >
            Send
        </button>
    </div>
</template>

<script>
    import Form from "./form";

    export default {
        name: "AccountCreation",
        emits: [
            "edit-account-creation-form",
            "create-account",
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
            editAccountCreationForm(formData) {
                this.$emit("edit-account-creation-form", formData);
            },
            createAccount() {
                this.$emit("create-account", this.formData);
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
        transition: color .4s, border .4s, background-color .4s;
        cursor: pointer;
    }

    .account-creation__button:hover {
        color: var(--color-white);
        border: 1px solid var(--color-black);
        background-color: var(--color-black);
    }

    .account-creation__button:disabled {
        color: var(--color-black);
        border: 1px solid var(--color-black);
        background-color: var(--color-white);
        cursor: initial;
    }
</style>