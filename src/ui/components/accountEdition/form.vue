<template>
    <div class="form">
        <input
                type="text"
                class="form__input"
                placeholder="Email"
                :value="data.email"
                @input="editForm({ ...data, email: $event.target.value })"
        />
        <input
                type="text"
                class="form__input"
                placeholder="Full name"
                :value="data.fullName"
                @input="editForm({ ...data, fullName: $event.target.value })"
        />
    </div>
</template>

<script>
    export default {
        name: "Form",
        emits: ["edit-form"],
        props: {
            data: {
                email: String,
                fullName: String,
            }
        },
        methods: {
            editForm(nextData) {
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
        border: 1px solid var(--color-black);
        background-color: var(--color-white);
        color: var(--color-black);
        padding: 1rem 2rem;
    }

    .form__input:not(:last-child) {
        margin-bottom: 1rem;
    }
</style>