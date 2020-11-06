<template>
    <div class="account-edition">
        <div class="account-edition__form">
            <Form :data="formData" @edit-form="editAccountEditionForm" />
        </div>
        <Button
                :disabled="!canSubmitForm"
                :is-loading="request.isRequestPending"
                :has-success="request.isRequestSuccessful"
                :has-error="request.isRequestFailure"
                @click="editAccount"
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
            "edit-account-edition-form",
            "edit-account",
        ],
        props: {
            formData: {
                email: String,
                fullName: String,
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
            editAccountEditionForm(formData) {
                this.$emit("edit-account-edition-form", formData);
            },
            editAccount() {
                this.$emit("edit-account", this.formData);
            }
        }
    }
</script>

<style scoped>
    .account-edition {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .account-edition__form {
        width: 100%;
        margin-bottom: 2rem;
    }
</style>