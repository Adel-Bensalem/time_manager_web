<template>
    <component v-if="hasRoute" :is="componentToRender"></component>
</template>

<script>
    import Landing from "../../pages/landing/index"

    export default {
        data() {
            return {
                currentRoute: { component: Landing, path: "/" },
                hasRoute: false
            }
        },
        computed: {
            componentToRender() {
                return this.currentRoute.component;
            }
        },
        methods: {
            getRoutes() {
                return this.selector.hasSession() ?
                    [
                    ] :
                    [
                        { component: Landing, path: "/" }
                    ]
            },
            updateRoute() {
                const currentRoute = this.getRoutes().find(({ path }) => path === this.selector.getCurrentLocation());

                this.currentRoute = currentRoute;
                this.hasRoute = !!currentRoute;
            }
        },
        watch: {
            currentRoute(nextRoute) {
                history.pushState(null, null, nextRoute.path);
            }
        },
        created() {
            this.subscribeToStore(this.updateRoute);
            this.updateRoute();
        }
    };
</script>