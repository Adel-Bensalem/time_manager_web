<template>
    <div class="team">
        <h3 class="team__title">{{ team.name }}</h3>
        <p class="team__paragraph">This team contains <span class="team__paragraph__number">{{ team.members.length }}</span> members<span v-if="hasManagers"> and <span class="team__paragraph__number">{{ managers.length }}</span> managers</span>.</p>
        <div class="team__button">
            <Button @click="clickTeam">See more</Button>
        </div>
    </div>
</template>

<script>
    import Button from "../../button";

    export default {
        props: ["team"],
        emits: ["click-team"],
        components: { Button },
        computed: {
            managers() {
                return this.team.members.filter(({ role }) => role.isManager);
            },
            hasManagers() {
                return this.managers.length > 0;
            }
        },
        methods: {
            clickTeam() {
                this.$emit("click-team", this.team);
            }
        }
    }
</script>

<style scoped>
    .team {
        display: flex;
        flex-direction: column;
        background-color: var(--color-white);
        border: 1px solid var(--color-black);
        padding: 1rem 2rem;
        border-radius: 3px;
        min-height: 12rem;
    }

    .team__title {
        font-size: 2rem;
        color: var(--color-black);
    }

    .team__paragraph {
        font-size: 1.6rem;
        color: var(--color-black);
        padding: 2rem 1rem;
    }

    .team__paragraph__number {
        font-weight: 600;
        color: var(--color-primary);
    }

    .team__button {
        margin-top: auto;
        text-align: right;
    }
</style>