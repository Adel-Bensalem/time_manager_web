<template>
    <Dashboard :scenes="scenes" />
</template>

<script>
    import clockIcon from "../../assets/clock.svg";
    import teamIcon from "../../assets/team.svg";
    import settingsIcon from "../../assets/settings.svg";

    import Dashboard from "../../components/dashboard";
    import Teams from "../../components/teams";
    import Settings from "../settings";

    export default {
        components: { Dashboard },
        computed: {
            scenes() {
                return [
                    {
                        name: 'Overview',
                        icon: `${clockIcon}#clock`,
                        components: [
                            {
                                name: "Team list 1",
                                component: {
                                    template: "<h1>TEST 1</h1>"
                                }
                            },
                            {
                                name: "Team list 2",
                                component: {
                                    template: "<h1>TEST 4</h1>"
                                }
                            },
                            {
                                name: "Team list 3",
                                component: {
                                    template: "<h1>TEST 5</h1>"
                                }
                            }
                        ]
                    },
                    {
                        name: 'Teams',
                        icon: `${teamIcon}#team`,
                        components: [
                            {
                                name: "Team list",
                                component: Teams
                            }
                        ]
                    },
                    {
                        name: 'Settings',
                        icon: `${settingsIcon}#settings`,
                        components: [
                            {
                                name: "Team list",
                                component: Settings
                            }
                        ]
                    },
                ]
            }
        }
    }
</script>