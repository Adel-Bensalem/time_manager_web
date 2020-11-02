<template>
    <div class="authentication">
        <form class="authentication__form">
            <input
                type="text"
                class="authentication__form__input"
                placeholder="Email"
                :value="data.email"
                @input="editForm({ ...data, email: $event.target.value })"
            />
            <input
                type="password"
                class="authentication__form__input"
                placeholder="password"
                :value="data.password"
                @input="editForm({ ...data, password: $event.target.value })"
            />
        </form>
        <button
                class="authentication__button"
                :disabled="!canAuthenticate"
                @click="submitForm"
        >
            Submit
        </button>
    </div>
</template>

<script>
    export default {
        name: "Authentication",
        emits: ["edit-authentication-form", "authenticate"],
        props: {
            data: { email: String, password: String },
            canAuthenticate: Boolean,
            request: {
                isPending: Boolean,
                isSuccess: Boolean,
                isFailure: Boolean,
            }
        },
        methods: {
            editForm(nextData) {
                this.$emit("edit-authentication-form", nextData);
            },
            submitForm() {
                this.$emit("authenticate", this.data);
            },
        }
    }
</script>

<style scoped>
    .authentication {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .authentication__form {
        display: flex;
        flex-direction: column;
        max-width: 40rem;
        width: 100%;
        margin-bottom: 2rem;
    }

    .authentication > *:not(:last-child) {
        margin-bottom: 2rem;
    }

    .authentication__form > *:not(:last-child) {
        margin-bottom: 1rem;
    }

    .authentication__form__input {
        flex: 1;
        font-size: 1.4rem;
        border: 1px solid var(--color-black);
        background-color: var(--color-white);
        color: var(--color-black);
        padding: 1rem 2rem;
    }

    .authentication__button {
        color: var(--color-white);
        padding: 1rem 3rem;
        font-size: 1.6rem;
        border: 1px solid var(--color-white);
        background-color: var(--color-primary);
        transition: color .4s, border .4s, background-color .4s;
        cursor: pointer;
    }

    .authentication__button:hover {
        color: var(--color-white);
        border: 1px solid var(--color-black);
        background-color: var(--color-black);
    }

    .authentication__button:disabled {
        color: var(--color-black);
        border: 1px solid var(--color-black);
        background-color: var(--color-white);
        cursor: initial;
    }
</style>