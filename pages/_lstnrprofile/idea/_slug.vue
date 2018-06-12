<template>
  <section class="container">
    <the-Menu></the-Menu>
    <div>
      <div class="columns">
        <div class="column is-two-thirds">
          <idea-card-expanded title="hello" votes="9536" content="hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !hello you !"></idea-card-expanded>
        </div>
        <div class="column">
          <listener-profile-card></listener-profile-card>
        </div>
      </div>
      <comment-card title="hello" votes="9536" content="hi" depth="1"></comment-card>
      <comment-card title="hello" votes="9536" content="hi" depth="2"></comment-card>
      <comment-card title="hello" votes="9536" content="hi" depth="2"></comment-card>
      <comment-card title="hello" votes="9536" content="hi" depth="1"></comment-card>
      <comment-card title="hello" votes="9536" content="hi" depth="2"></comment-card>
    </div>
  </section>
</template>

<script>
import theMenu from '~/components/theMenu.vue'
import ideaCardExpanded from '~/components/ideaCardExpanded.vue'
import commentCard from '~/components/commentCard.vue'
import listenerProfileCard from '~/components/listenerProfileCard.vue'

export default {
  name: 'profile',
  components: {
    theMenu,
    ideaCardExpanded,
    listenerProfileCard,
    commentCard
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
