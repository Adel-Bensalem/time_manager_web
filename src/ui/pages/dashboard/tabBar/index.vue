<template>
    <ul class="tab-bar">
        <li
                v-for="tab of tabs"
                class="tab-bar__tab"
                :class="{ 'tab-bar__tab--selected': tab.name === currentTab.name }"
                @click="selectTab(tab)"
        >
            <span class="tab-pane__text">{{ tab.name }}</span>
        </li>
    </ul>
</template>

<script>
    import crossIcon from "../../../assets/cross.svg"

    export default {
        props: ["tabs", "currentTab"],
        emits: ["select-tab", "close-tab"],
        computed: {
            icon() {
                return `${crossIcon}#cross`;
            }
        },
        methods: {
            selectTab(tab) {
                this.$emit("select-tab", tab);
            },
            closeTab(tab) {
                this.$emit("close-tab", tab);
            }
        }
    }
</script>

<style scoped>
    .tab-bar {
        list-style: none;
        display: flex;
        min-height: 4rem;
        background-color: var(--color-black);
        border-bottom: 1px solid var(--color-black);
        overflow: hidden;
    }

    .tab-bar > * {
        border-right: 1px solid var(--color-black);
    }

    .tab-bar__tab {
        position: relative;
        font-size: 1.4rem;
        padding: 8px 2rem 8px 5px;
        max-width: 20rem;
        width: 100%;
        background-color: var(--color-black);
        color: var(--color-white);
        cursor: pointer;
    }

    .tab-bar__text {
         display: block;
         width: 100%;
         overflow: hidden;
         white-space: nowrap;
         text-overflow: ellipsis;
     }

    .tab-bar__icon-box {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 1rem;
        top: 50%;
        height: 1.8rem;
        width: 1.8rem;
        padding: 5px;
        transform: translateY(-50%);
    }

    .tab-bar__icon-box:hover::after {
         content: "";
         position: absolute;
         top: 0;
         right: 0;
         bottom: 0;
         left: 0;
         border-radius: 50%;
         background-color: #dfdfe7;
         opacity: 0.6;
         z-index: -1;
    }

    .tab-bar__icon {
         fill: var(--color-white);
         stroke: var(--color-white);
         max-width: 100%;
         max-height: 100%;
     }

    .tab-bar__tab:hover {
        background-color: var(--color-white);
        color: var(--color-black);
        border-bottom: none;
        z-index: 10;
    }

    .tab-bar__tab--selected {
        background-color: var(--color-white);
        color: var(--color-black);
        border-bottom: none;
        z-index: 10;
        cursor: initial;
    }

    .tab-bar__tab:hover .tab-bar__icon {
        fill: var(--color-black);
        stroke: var(--color-black);
    }

    .tab-bar__tab--selected .tab-bar__icon {
        fill: var(--color-black);
        stroke: var(--color-black);
    }
</style>