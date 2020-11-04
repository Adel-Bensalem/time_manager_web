<template>
  <div class="app">
    <Router v-if="canRenderApp" />
    <div class="app__loader" v-else>
      <Loader />
    </div>
  </div>
</template>

<script>
  import Loader from "./components/loader";
  import Router from "./components/router";

  export default {
    components: { Loader, Router },
    data() {
      return {
        canRenderApp: false,
      }
    },
    beforeCreate() {
      this.subscribeToStore(() => {
        this.canRenderApp = !this.selector.isSessionDecodeRequestPending();
      });
    },
    created() {
      this.core.decodeSession();
    }
  }
</script>

<style>
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    min-height: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 64em) {
    html {
      font-size: 62.5%;
    }
  }
  @media only screen and (max-width: 90em) {
    html {
      font-size: 55%;
    }
  }

  body {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    min-height: 100%;
    height: 100%;
  }

  :root {
    --color-primary: #42b983;
    --color-white: #fff;
    --color-black: #2c3e50;
  }

  .app {
    height: 100%;
  }

  .app__loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 10vw;
    width: 10vw;
  }
</style>
