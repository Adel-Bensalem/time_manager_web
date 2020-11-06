<template>
    <component v-if="hasRoute" :is="componentToRender" v-bind="props"></component>
</template>

<script>
    export default {
        props: ["routes"],
        data() {
            return { currentRoute: "" }
        },
        computed: {
            componentToRender() {
                const currentRoute = this.matchRoute();

                return currentRoute && currentRoute.component;
            },
            props() {
                const currentRoute = this.matchRoute();

                console.log(this.currentRoute, currentRoute);

                return currentRoute && currentRoute.props;
            }
        },
        methods: {
            hasRoute() {
                return !!this.matchRoute()
            },
            updateRoute() {
                this.currentRoute = this.selector.getCurrentLocation();
            },
            matchRoute() {
                return this.routes.find(({ path }) => new RegExp(path).test(this.currentRoute))
            }
        },
        created() {
            this.subscribeToStore(this.updateRoute);
            this.updateRoute();

            window.onpopstate = () => this.messageDispatcher.dispatchLocationChange(location.pathname)
        }
    };
</script>