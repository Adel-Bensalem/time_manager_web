<template>
    <div class="teams">
        <div class="teams__main" v-if="canRenderList() && !hasTeamToDisplay()">
            <h1 class="teams__title">Teams list</h1>
            <ul class="teams__list">
                <li class="teams__list__item" v-for="team of teams">
                    <Team :team="team" @click-team="showTeam" />
                </li>
            </ul>
        </div>
        <div class="teams__loader" v-else-if="!hasTeamToDisplay()">
            <Loader />
        </div>
        <div class="teams__team" v-if="hasTeamToDisplay()">
            <TeamPage :team="teamToDisplay" />
            <div class="teams__team__icon-box" @click="hideTeam">
                <svg class="teams__team__icon">
                    <use xlink:href="../../assets/cross.svg#cross" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
    import Loader from "../loader";
    import TeamPage from "../team";
    import Team from "./team";

    export default {
        components: { Loader, Team, TeamPage },
        data() {
            return {
                teamToDisplay: null,
                isTeamsRetrievalRequestPending: this.selector.isTeamsRetrievalRequestPending(),
                isTeamsRetrievalRequestSuccess: this.selector.isTeamsRetrievalRequestSuccess(),
                isTeamsRetrievalRequestFailure: this.selector.isTeamsRetrievalRequestFailure(),
                teams: this.selector.getTeams()
            }
        },
        methods: {
            canRenderList() {
                return !this.isTeamsRetrievalRequestPending && !this.isTeamsRetrievalRequestFailure;
            },
            hasTeamToDisplay() {
                return !!this.teamToDisplay;
            },
            showTeam(team) {
                this.teamToDisplay = team;
            },
            hideTeam() {
                this.teamToDisplay = null;
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

    .teams__team {
    }

    .teams__team__icon-box {
        position: absolute;
        top: 1rem;
        right: 1rem;
        height: 3.5rem;
        width: 3.5rem;
        padding: 1rem;
        border: 1px solid var(--color-black);
        border-radius: 50%;
        cursor: pointer;
    }

    .teams__team__icon {
        max-height: 100%;
        max-width: 100%;
        fill: var(--color-black);
    }
</style>