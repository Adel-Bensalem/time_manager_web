<template>
    <div class="dashboard">
        <div class="dashboard__aside">
            <Navigation :items="scenes" :selected-item="scenes[y]" @click="selectTarget" />
        </div>
        <div class="dashboard__main">
            <TabBar :tabs="tabs" :current-tab="currentTab" v-if="hasMultipleTabs()" @select-tab="selectTab" />
            <component :is="selectedTarget"></component>
        </div>
    </div>
</template>

<script>
    import 'vue/dist/vue.esm-bundler.js';
    import Navigation from "./navigation/index";
    import TabBar from "./tabBar/index";
    import Settings from "../../pages/settings/index";

    import clockIcon from "../../assets/clock.svg";
    import settingsIcon from "../../assets/settings.svg";
    import teamIcon from "../../assets/team.svg";

    export default {
        components: { Settings, Navigation, TabBar },
        props: ["scenes"],
        data() {
            return { x: 0, y: 0 }
        },
        methods: {
           selectTarget(item) {
               const index = this.scenes.findIndex(({ name }) => name === item.name);

               this.y =  index !== -1 ? index : 0;
               this.x =  0;
           },
            hasMultipleTabs() {
                return this.scenes[this.y].components.length > 1;
            },
            selectTab(item) {
                const index = this.tabs.findIndex(({ name }) => name === item.name);

                this.x = index !== -1 ? index : 0;
            }
        },
        computed: {
            selectedTarget() {
                return this.scenes[this.y].components[this.x].component;
            },
            tabs() {
                return this.scenes[this.y].components;
            },
            currentTab() {
                return this.scenes[this.y].components[this.x];
            },
        }
    }
</script>

<style scoped>
    .dashboard {
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
    }

    .dashboard__aside {
        background-color: var(--color-black);
    }

    .dashboard__main {
        flex: 1;
    }


    @media only screen and (max-width: 64em) {
        .dashboard {
            flex-direction: column;
        }

        .dashboard__aside {
            order: 2;
        }
    }
</style>