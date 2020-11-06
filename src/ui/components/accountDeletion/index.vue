<template>
    <div class="account-deletion">
        <div class="account-deletion__main">
            <h1 class="account-deletion__title">Delete account</h1>
            <p class="account-deletion__paragraph">
                If you delete your account all associated data will be lost forever
            </p>
            <button class="account-deletion__button" @click>Confirm</button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            deleteAccount()
        }
    }
</script>

<style scoped>
    .account-deletion {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .account-deletion__main > *:not(:last-child) {
        margin-bottom: 2rem;
    }

    .account-deletion__title {
        padding: 1rem 2rem;
        color: var(--color-black);
        border-bottom: 1px solid var(--color-black);
        font-size: 1.8rem;
        font-weight: 600;
    }

    .account-deletion__paragraph {
        color: var(--color-black);
        font-size: 1.4rem;
    }

    .account-deletion__button {
        color: var(--color-white);
        padding: 1rem 3rem;
        font-size: 1.6rem;
        border: 1px solid var(--color-white);
        background-color: var(--color-primary);
        transition: color .4s, border .4s, background-color .4s;
        cursor: pointer;
    }

    .account-deletion__button:hover {
        color: var(--color-white);
        border: 1px solid var(--color-black);
        background-color: var(--color-black);
    }

    .account-deletion__button:disabled {
        color: var(--color-black);
        border: 1px solid var(--color-black);
        background-color: var(--color-white);
        cursor: initial;
    }
</style>