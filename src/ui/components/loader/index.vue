<template>
    <div class="loader" />
</template>

<style scoped>
    .loader {
        height: 100%;
        width: 100%;
        border: 2px solid var(--color-primary);
        border-right: none;
        border-bottom: none;
        border-radius: 50%;
        animation: spin 0.6s cubic-bezier(0.68, 0.3, 0.83, 0.67) infinite forwards;
    }

    @keyframes spin {
        0% {
            transform: rotate(0);
        }

        0% {
            transform: rotate(360deg);
        }

        100% {
            transform: rotate(0);
        }
    }
</style>