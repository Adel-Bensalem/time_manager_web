<template>
    <div class="form">
        <input
                type="text"
                class="form__input"
                placeholder="Email"
                :value="data.email"
                @input="editForm({ ...data, email: $event.data })"
        />
        <input
                type="text"
                class="form__input"
                placeholder="Full name"
                :value="data.fullName"
                @input="editForm({ ...data, fullName: $event.data })"
        />
        <input
                type="password"
                class="form__input"
                placeholder="Password"
                :value="data.password"
                @input="editForm({ ...data, password: $event.data })"
        />
        <input
                type="password"
                class="form__input"
                placeholder="Password confirmation"
                :value="data.passwordConfirmation"
                @input="editForm({ ...data, passwordConfirmation: $event.data })"
        />
    </div>
</template>

<script>
    export default {
        name: "Form",
        props: {
            data: {
                email: String,
                fullName: String,
                password: String,
                passwordConfirmation: String
            }
        },
        methods: {
            editForm(nextData) {
                console.log(nextData)
                this.$emit("edit-form", nextData);
            }
        }
    }
</script>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
    }

    .form__input {
        flex: 1;
        font-size: 1.4rem;
    }

    .form__input:not(:last-child) {
        margin-bottom: 1rem;
    }
</style>