<template>
    <div class="member">
        <div class="member__main">
            <h1 class="member__title">Members list</h1>
            <ul class="member__list">
                <li class="member__list__item" v-for="member of team.members">
                    <Member :member="member" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Member from "./member";

    export default {
        components: { Member },
        props: ["team"]
    }
</script>

<style scoped>
    .member {
        width: 100%;
        height: 100%;
    }

    .member__title {
        padding: 1rem;
        color: var(--color-black);
        border-bottom: 1px solid var(--color-black);
        font-size: 1.8rem;
        font-weight: 600;
        margin: 0 auto 2rem;
    }

    .member__main {

    }

    .member__list {
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .member__list__item {
        flex: 1;
        margin-right: 2rem;
        margin-bottom: 2rem;
        min-width: 25rem;
    }
</style>