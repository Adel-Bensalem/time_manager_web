<template>
    <div class="member">
        <h3 class="member__title">{{ member.fullName }}</h3>
        <div class="member__button">
            <Button>See more</Button>
        </div>
    </div>
</template>

<script>
    import Button from "../../button";

    export default {
        props: ["member"],
        components: { Button },
    }
</script>

<style scoped>
    .member {
        display: flex;
        flex-direction: column;
        background-color: var(--color-white);
        border: 1px solid var(--color-black);
        padding: 1rem 2rem;
        border-radius: 3px;
        min-height: 12rem;
    }

    .member__title {
        font-size: 2rem;
        width: 100%;
        color: var(--color-black);
    }

    .member__button {
        margin-top: auto;
        text-align: right;
    }
</style>