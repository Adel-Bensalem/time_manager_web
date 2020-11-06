<template>
    <ul class="navigation">
        <li
                class="navigation__item"
                :class="{ 'navigation__item--selected': item.name === selectedItem.name }"
                v-for="item of items"
                @click="click(item)"
        >
            <svg class="navigation__icon">
                <use :xlink:href="item.icon" />
            </svg>
            <h3 class="navigation__title">{{ item.name }}</h3>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ["items", "selectedItem"],
        emits: ["click"],
        methods: {
            click(item) {
                this.$emit("click", item);
            }
        }
    }
</script>

<style scoped>
    .navigation {
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    .navigation__item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem 2rem;
        cursor: pointer;
    }

    .navigation__item:hover {
        background-color: var(--color-primary);
    }

    .navigation__item--selected {
        background-color: var(--color-primary);
    }

    .navigation__icon {
        max-height: 3.5rem;
        max-width: 3.5rem;
        fill: var(--color-white);
        margin-bottom: 1rem;
    }

    .navigation__title {
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--color-white);
    }
</style>