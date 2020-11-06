<template>
    <Dashboard :scenes="scenes" />
</template>

<script>
    import clockIcon from "../../assets/clock.svg";
    import teamIcon from "../../assets/team.svg";
    import settingsIcon from "../../assets/settings.svg";

    import TimeReport from "../../components/timeReport";
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
                                name: "Time report",
                                component: TimeReport
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