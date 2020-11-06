<template>
    <div @click="navigate">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            to: {
                type: String,
                required: true
            }
        },
        methods: {
            navigate() {
                this.messageDispatcher.dispatchLocationChange(this.to);
            }
        }
    }
</script>