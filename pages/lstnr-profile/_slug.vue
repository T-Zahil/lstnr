<template>
  <section class="container">
    <the-Menu></the-Menu>
    <div>
      <idea-card title="hello" votes="9536" content="hello you !" nbComments="825"></idea-card>
      <idea-card title="hello 2" votes="2" content="hello you !" nbComments="825"></idea-card>
      <idea-card title="hello 3" votes="150" content="hello you !" nbComments="825"></idea-card>
      <idea-card title="hello 4" votes="56" content="hello you !" nbComments="825"></idea-card>
    </div>
  </section>
</template>

<script>
import theMenu from '~/components/theMenu.vue'
import ideaCard from '~/components/ideaCard.vue'

export default {
  name: 'profile',
  components: {
    theMenu,
    ideaCard
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
