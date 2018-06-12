<template>
  <section class="container">
    <the-Menu></the-Menu>
    <div>
      <h1 class="title">
        lstnr
      </h1>
      <h2 class="subtitle">
        H4 startup weeks project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
    <section class="columns">
      <div class="column">
        <listener-card></listener-card>
      </div>
      <div class="column">
        <listener-card></listener-card>
      </div>
      <div class="column">
        <listener-card></listener-card>
      </div>
      <div class="column">
        <listener-card></listener-card>
      </div>
      <div class="column">
        <listener-card></listener-card>
      </div>
      <div class="column">
        <listener-card></listener-card>
      </div>
    </section>
  </section>
</template>

<script>
import theMenu from '~/components/theMenu.vue'
import listenerCard from '~/components/listenerCard.vue'
export default {
  components: {
    theMenu,
    listenerCard
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
</style>
