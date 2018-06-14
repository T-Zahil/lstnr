<template>
  <div>
    <the-Menu></the-Menu>
    <nuxt/>
    <the-Footer></the-Footer>
  </div>
</template>

<script>
import theMenu from '~/components/theMenu.vue'
import theFooter from '~/components/theFooter.vue'

export default {
  components: {
    theMenu,
    theFooter
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Futura';
  src: url('../static/fonts/FuturaStd-Book.otf') format('truetype');
}
@font-face {
  font-family: 'Futura Bold';
  src: url('../static/fonts/FuturaStd-Bold.otf') format('truetype');
}

* {
  font-family: 'Futura';
}
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
