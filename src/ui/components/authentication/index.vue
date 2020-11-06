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
        <Button
                :disabled="!canAuthenticate"
                :is-loading="request.isRequestPending"
                :has-success="request.isRequestSuccessful"
                :has-error="request.isRequestFailure"
                @click="submitForm"
        >
            Submit
        </Button>
    </div>
</template>

<script>
    import Button from "../button"

    export default {
        name: "Authentication",
        emits: ["edit-authentication-form", "authenticate"],
        components: { Button },
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
</style>