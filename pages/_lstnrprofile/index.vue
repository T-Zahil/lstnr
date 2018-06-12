<template>
  <section class="container">
    <the-Menu></the-Menu>
    <div class="columns">
      <div class="column is-two-thirds">
        <idea-card-collapsed title="hello" votes="9536" content="hello you !" nbComments="825"></idea-card-collapsed>
        <idea-card-collapsed title="hello 2" votes="2" content="hello you !" nbComments="825"></idea-card-collapsed>
        <idea-card-collapsed title="hello 3" votes="150" content="hello you !" nbComments="825"></idea-card-collapsed>
        <idea-card-collapsed title="hello 4" votes="56" content="hello you !" nbComments="825"></idea-card-collapsed>
      </div>
      <div class="column">
        <listener-profile-card></listener-profile-card>
      </div>
    </div>
  </section>
</template>

<script>
import theMenu from '~/components/theMenu.vue'
import ideaCardCollapsed from '~/components/ideaCardCollapsed.vue'
import listenerProfileCard from '~/components/listenerProfileCard.vue'

export default {
  name: 'profile',
  components: {
    theMenu,
    ideaCardCollapsed,
    listenerProfileCard
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
