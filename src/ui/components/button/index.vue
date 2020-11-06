<template>
    <button
            class="button"
            :class="{
                'button--loading': isLoading,
                'button--error': hasError,
                'button--success': hasSuccess,
            }"
            @click="click"
    >
        <slot v-if="!isLoading"></slot>
        <img class="button__icon" src="./loading.gif" v-else />
    </button>
</template>

<script>
    export default {
        props: ["isLoading", "hasError", "hasSuccess", "isDisabled"],
        emits: ["click"],
        methods: {
            click() {
                this.$emit("click");
            }
        }
    }
</script>

<style scoped>
    .button {
        color: var(--color-white);
        padding: 1rem 3rem;
        font-size: 1.6rem;
        border: 1px solid var(--color-white);
        background-color: var(--color-primary);
        transition: color .4s, border .4s, background-color .4s;
        cursor: pointer;
    }

    .button:not(.button--loading):not(.button--success):not(.button--error):not(:disabled):hover {
        color: var(--color-white);
        border: 1px solid var(--color-black);
        background-color: var(--color-black);
    }

    .button:disabled {
        color: var(--color-black);
        border: 1px solid var(--color-black);
        background-color: var(--color-white);
        cursor: initial;
    }

    .button--loading {
        background-color: #1c273a;
        border-color: #1c273a;
    }

    .button--error {
        background-color: #d0021b;
        border-color: #d0021b;
    }

    .button--success {
        background-color: #2cb924;
        border-color: #2cb924;
    }

    .button__icon {
        width: 8rem;
    }
</style>