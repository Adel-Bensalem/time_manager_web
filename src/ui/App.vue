<template>
  <router-view />
</template>

<script>
  export default {
    data() {
      return {
        canRenderApp: false,
      }
    },
    beforeCreate() {
      this.core.authenticate({});
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
</style>
