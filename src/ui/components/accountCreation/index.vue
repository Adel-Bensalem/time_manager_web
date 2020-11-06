<template>
    <div class="account-creation">
        <div class="account-creation__form">
            <Form :data="formData" @edit-form="editAccountCreationForm" />
        </div>
        <Button
                :disabled="!canSubmitForm"
                :is-loading="request.isRequestPending"
                :has-success="request.isRequestSuccessful"
                :has-error="request.isRequestFailure"
                @click="createAccount"
        >
            Send
        </Button>
    </div>
</template>

<script>
    import Form from "./form";
    import Button from "../button"

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
        components: { Form, Button },
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
        width: 100%;
        margin-bottom: 2rem;
    }
</style>