<template>
    <Dashboard :scenes="scenes" />
</template>

<script>
    import Dashboard from "../../components/dashboard";
    import clockIcon from "../../assets/clock.svg";
    import settingsIcon from "../../assets/settings.svg";
    import Settings from "../settings";
    import TimeReport from "../../components/timeReport";

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