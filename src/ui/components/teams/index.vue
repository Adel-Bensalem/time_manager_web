<template>
    <div class="teams">
        <div class="teams__main" v-if="canRenderList()">
            <h1 class="teams__title">Teams list</h1>
            <ul class="teams__list">
                <li class="teams__list__item" v-for="team of teams">
                    <Team :team="team" />
                </li>
            </ul>
        </div>
        <div class="teams__loader" v-else>
            <Loader />
        </div>
    </div>
</template>

<script>
    import Loader from "../loader";
    import Team from "./team";

    export default {
        components: { Loader, Team },
        data() {
            return {
                isTeamsRetrievalRequestPending: this.selector.isTeamsRetrievalRequestPending(),
                isTeamsRetrievalRequestSuccess: this.selector.isTeamsRetrievalRequestSuccess(),
                isTeamsRetrievalRequestFailure: this.selector.isTeamsRetrievalRequestFailure(),
                teams: this.selector.getTeams()
            }
        },
        methods: {
            canRenderList() {
                return !this.isTeamsRetrievalRequestPending && !this.isTeamsRetrievalRequestFailure;
            }
        },
        created() {
            this.subscribeToStore(() => {
                this.isTeamsRetrievalRequestPending = this.selector.isTeamsRetrievalRequestPending();
                this.isTeamsRetrievalRequestSuccess = this.selector.isTeamsRetrievalRequestSuccess();
                this.isTeamsRetrievalRequestFailure = this.selector.isTeamsRetrievalRequestFailure();
                this.teams = this.selector.getTeams();
            });

            this.core.retrieveTeams();
        }
    }
</script>

<style>
    .teams {
        padding: 2rem 4rem;
        width: 100%;
        height: 100%;
    }

    .teams__loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 10vw;
        width: 10vw;
    }

    .teams__title {
        padding: 1rem;
        color: var(--color-black);
        border-bottom: 1px solid var(--color-black);
        font-size: 1.8rem;
        font-weight: 600;
        margin: 0 auto 2rem;
    }

    .teams__main {

    }

    .teams__list {
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .teams__list__item {
        flex: 1;
        margin-right: 2rem;
        margin-bottom: 2rem;
        min-width: 25rem;
    }
</style>