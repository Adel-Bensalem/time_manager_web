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
        props: {
            formData: {
                email: String,
                fullName: String,
                password: String,
                passwordConfirmation: String
            }
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
        border: none;
        border-radius: 5px;
        color: #fafafa;
        padding: 6px 2rem;
        font-size: 1.4rem;
        background-image: linear-gradient(to right bottom, #42b983, #2e9567);
        cursor: pointer;
    }
</style>