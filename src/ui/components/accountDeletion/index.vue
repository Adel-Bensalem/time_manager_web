<template>
    <div class="account-deletion">
        <div class="account-deletion__main">
            <p class="account-deletion__paragraph">
                If you delete your account all associated data will be lost forever
            </p>
            <Button
                    :is-disabled="isRequestPending"
                    :is-loading="isRequestPending"
                    :has-success="isRequestSuccess"
                    :has-error="isRequestFailure"
                    @click="deleteAccount"
            >
                Confirm
            </Button>
        </div>
    </div>
</template>

<script>
    import Button from "../button"

    export default {
        components: { Button },
        data() {
            return {
                isRequestPending: this.selector.isAccountDeletionRequestPending(),
                isRequestSuccess: this.selector.isAccountDeletionRequestSuccess(),
                isRequestFailure: this.selector.isAccountDeletionRequestFailure(),
            }
        },
        methods: {
            deleteAccount() {
                this.core.deleteAccount();
            }
        },
        created() {
            this.subscribeToStore(() => {
                this.isRequestPending = this.selector.isAccountDeletionRequestPending();
                this.isRequestSuccess = this.selector.isAccountDeletionRequestSuccess();
                this.isRequestFailure = this.selector.isAccountDeletionRequestFailure();
            });
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

    .account-deletion__main {
        text-align: center;
    }

    .account-deletion__main > *:not(:last-child) {
        margin-bottom: 2rem;
    }

    .account-deletion__paragraph {
        color: var(--color-black);
        font-size: 1.4rem;
    }
</style>